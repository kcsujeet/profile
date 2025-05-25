import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { CommandPalette } from "./command-palette";
import { SocialMediaLinks } from "./social-media-links";

const sections = ["hero", "about", "experience", "projects", "contact"];

export function Header() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update current section
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowCommandPalette(!showCommandPalette);
      }
      if (e.key === "Escape") {
        setShowCommandPalette(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showCommandPalette]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Command Palette Trigger */}
      <button
        onClick={() => setShowCommandPalette(true)}
        className="fixed top-8 left-8 z-40 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95"
      >
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="font-mono text-sm">⌘K</span>
        </div>
      </button>

      {/* Current Section Indicator */}
      <div className="fixed top-8 right-8 z-40 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2">
        <span className="font-mono text-sm text-emerald-400">
          /{currentSection}
        </span>
      </div>

      {/* Command Palette */}
      {showCommandPalette && (
        <CommandPalette scrollToSection={setCurrentSection} />
      )}

      {/* Social Media Links - Floating */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 lg:flex flex-col gap-4">
        <SocialMediaLinks />
        <div className="w-px h-16 bg-gray-600 mx-auto mt-4" />
      </div>
    </>
  );
}
