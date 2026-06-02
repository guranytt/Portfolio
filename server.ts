import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Body parsing middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Lazy configuration function for Cloudinary
function getCloudinary() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary credentials are not fully configured in your environment secrets.");
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  return cloudinary;
}

// Multer memory storage configuration for streaming uploads directly to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// GET endpoint to fetch real images from Cloudinary
app.get("/api/cloudinary/images", async (req, res) => {
  try {
    const c = getCloudinary();
    
    // Fetch resources with specific tag or general limit
    const response = await c.api.resources({
      type: "upload",
      max_results: 50,
      direction: "desc"
    });

    res.json({
      success: true,
      images: response.resources.map((item: any) => ({
        id: item.public_id,
        src: item.secure_url,
        title: item.public_id.split("/").pop()?.replace(/[_-]/g, " ") || "Cloud Image",
        description: `Uploaded directly to Cloudinary folder. Format: ${item.format.toUpperCase()} (${item.width}x${item.height})`,
        category: "Cloud",
        date: item.created_at.split("T")[0]
      }))
    });
  } catch (error: any) {
    console.error("Cloudinary fetch error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to retrieve images from Cloudinary."
    });
  }
});

// POST endpoint to handle single file uploads directly to Cloudinary via streams
app.post("/api/cloudinary/upload", upload.single("file"), async (req, res) => {
  try {
    const c = getCloudinary();
    
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file was selected for upload." });
    }

    // Convert memory buffer to upload stream
    const uploadStream = c.uploader.upload_stream(
      {
        folder: "dr_nkanta_portfolio",
        resource_type: "auto"
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary stream upload error:", error);
          return res.status(500).json({ success: false, message: error.message });
        }
        
        return res.json({
          success: true,
          url: result?.secure_url,
          public_id: result?.public_id,
          format: result?.format,
          bytes: result?.bytes,
          dimensions: `${result?.width}x${result?.height}`
        });
      }
    );

    uploadStream.end(req.file.buffer);

  } catch (error: any) {
    console.error("Upload route handling error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error during upload."
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    cloudinary_configured: !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET)
  });
});

// Integrate Vite Middleware
async function initializeServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // Fallback for Single Page Application routing (supporting path matches)
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server bound and running successfully on http://0.0.0.0:${PORT}`);
  });
}

initializeServer().catch((err) => {
  console.error("Critical error building server architecture:", err);
});
