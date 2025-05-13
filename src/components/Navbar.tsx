
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button.tsx";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-xl font-bold text-secondary"
            >
              Michael DeLorenzo
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-secondary hover:text-primary transition-colors"
            >Services</a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-secondary hover:text-primary transition-colors"
            >About</a>
            {/*<a */}
            {/*  href="#testimonials"*/}
            {/*  onClick={(e) => {*/}
            {/*    e.preventDefault();*/}
            {/*    scrollToSection('testimonials');*/}
            {/*  }}*/}
            {/*  className="text-secondary hover:text-primary transition-colors"*/}
            {/*>Testimonials</a>*/}
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <Button variant="default" size="sm">Contact</Button>
            </a>
          </div>
          
          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-secondary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('testimonials');
                }}
              >
                Testimonials
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <Button variant="default" size="sm">Contact</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
