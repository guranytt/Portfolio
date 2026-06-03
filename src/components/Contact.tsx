import { MapPin, Mail, Globe, ArrowRight } from "lucide-react";
import { profileDetails } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-royal-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text & Info */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100/50 border border-gold-200/50 text-gold-800 text-sm font-medium tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse" />
              Contact
            </div>

            <h2 className="text-4xl sm:text-5xl font-light text-royal-950 tracking-tight leading-tight mb-6">
              Get in Touch with
              <br />
              <span className="font-semibold text-royal-800">Dr. Nkanta</span>
            </h2>

            <p className="text-lg text-royal-700/80 mb-12">
              For corporate engagements, philanthropic collaborations, or
              executive consulting, please reach out through the official
              channels below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-royal-950 uppercase tracking-wider mb-1">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${profileDetails.contactEmail}`}
                    className="text-lg text-gold-700 underline underline-offset-4 font-medium hover:text-gold-600 transition-colors"
                  >
                    {profileDetails.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-50 flex items-center justify-center text-royal-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-royal-950 uppercase tracking-wider mb-1">
                    Corporate Office
                  </h3>
                  <p className="text-lg text-royal-700">
                    {profileDetails.officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-royal-950 uppercase tracking-wider mb-1">
                    Digital Portals
                  </h3>
                  <div className="flex flex-col gap-2 mt-2">
                    <a
                      href={profileDetails.socials.guardianOffice}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-700 underline underline-offset-4 font-medium hover:text-gold-600 transition-colors"
                    >
                      FlyBooking Arena <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Socials/Interactive Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-200 to-royal-200 rounded-3xl transform rotate-3 scale-[1.02] opacity-30" />
            <div className="relative bg-white border border-royal-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-royal-900/5">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-royal-950 mb-2">
                  Social Connect
                </h3>
                <p className="text-royal-600">
                  Follow Dr. Nkanta across digital platforms for professional
                  insights and updates.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={profileDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl border border-royal-100 hover:border-gold-300 hover:bg-gold-50/30 transition-all"
                >
                  <span className="font-medium text-royal-950 group-hover:text-gold-700 transition-colors">
                    LinkedIn Profile
                  </span>
                  <ArrowRight className="w-5 h-5 text-royal-400 group-hover:text-gold-600 transform group-hover:translate-x-1 transition-all" />
                </a>
                <a
                  href={profileDetails.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl border border-royal-100 hover:border-gold-300 hover:bg-gold-50/30 transition-all"
                >
                  <span className="font-medium text-royal-950 group-hover:text-gold-700 transition-colors">
                    X (Twitter) Feed
                  </span>
                  <ArrowRight className="w-5 h-5 text-royal-400 group-hover:text-gold-600 transform group-hover:translate-x-1 transition-all" />
                </a>
                <a
                  href={profileDetails.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl border border-royal-100 hover:border-gold-300 hover:bg-gold-50/30 transition-all"
                >
                  <span className="font-medium text-royal-950 group-hover:text-gold-700 transition-colors">
                    Facebook Page
                  </span>
                  <ArrowRight className="w-5 h-5 text-royal-400 group-hover:text-gold-600 transform group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
