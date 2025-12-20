import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils"; // Standard Shadcn utility

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for a floating navbar look
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#bento" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={
      cn("fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 pt-4", scrolled ? "pt-2" : "pt-4")
    }>

      <nav className={
        cn("max-w-7xl mx-auto rounded-full border border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-lg transition-all duration-300 shadow-sm", scrolled ? "shadow-md py-2 px-6" : "py-3 px-8")
      }>
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">

            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Zap className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              MagicUI
            </span>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-blue-600 dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800" />
            
            <Button size="sm" className="rounded-full px-5 bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/20">
              Get Started
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">

            <button onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Menu - Simple dropdown */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col gap-4 border-t border-gray-100 dark:border-white/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full rounded-xl bg-blue-600 py-6 text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;