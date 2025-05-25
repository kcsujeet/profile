import {
  Dot,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Terminal,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative p-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-sm text-emerald-400">
              ~/sujeet-kc
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span className="block text-gray-100">SUJEET</span>
            <span className="block text-emerald-400 ml-8 md:ml-16">KC</span>
          </h1>
        </div>

        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
            Full-Stack Engineer crafting{" "}
            <span className="text-emerald-400 font-semibold">
              scalable web experiences
            </span>{" "}
            with 6+ years of expertise in React.js and Ruby on Rails.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-300 font-mono mb-8">
            <div className="flex items-center gap-2">
              <Dot className="w-4 h-4 text-emerald-400" />
              Available for opportunities
            </div>
            <div className="flex items-center gap-2">
              <Dot className="w-4 h-4 text-blue-400" />
              Halifax, NS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
