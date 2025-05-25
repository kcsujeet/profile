"use client";

import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const navigationItems = [
  {
    id: "hero",
    label: "home",
    command: "cd ~/",
    description: "Back to home",
  },
  {
    id: "about",
    label: "about",
    command: "cat about.md",
    description: "Learn about me",
  },
  {
    id: "experience",
    label: "experience",
    command: "ls -la work/",
    description: "View work history",
  },
  {
    id: "projects",
    label: "projects",
    command: "git log --oneline",
    description: "Browse projects",
  },
  {
    id: "contact",
    label: "contact",
    command: "ping sujeet",
    description: "Get in touch",
  },
];

interface CommandPaletteProps {
  scrollToSection: (sectionId: string) => void;
}

export function CommandPalette({ scrollToSection }: CommandPaletteProps) {
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
      const sections = ["hero", "about", "experience", "projects", "contact"];
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
    <div>
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
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-32"
          onClick={() => setShowCommandPalette(false)}
        >
          <div
            className="bg-gray-800 border border-gray-600 rounded-lg w-full max-w-lg mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center gap-2 text-gray-300">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-sm">Command Palette</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded ml-auto">
                  ESC to close
                </span>
              </div>
            </div>
            <div className="p-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left p-3 rounded hover:bg-gray-700 transition-all group hover:translate-x-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-emerald-400">
                      $ {item.command}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
