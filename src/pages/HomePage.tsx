import Hero from "../components/Hero";
import Biography from "../components/Biography";
import ExecutiveValueScroll from "../components/ExecutiveValueScroll";
import Legacy from "../components/Legacy";
import Portfolio from "../components/Portfolio";
import MediaGallery from "../components/MediaGallery";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Biography />
      <ExecutiveValueScroll />
      <Legacy />
      <Portfolio />
      <MediaGallery />
      <Testimonials />
    </>
  );
}
