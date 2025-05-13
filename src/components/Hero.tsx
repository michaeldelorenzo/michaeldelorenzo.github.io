
import React from 'react';
import { Button } from "@/components/ui/button.tsx";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
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

  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Transform Your <span className="text-primary">MVP</span> Into a Growth-Ready Product
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Technical advisory for early-stage companies ready to scale their software architecture and engineering practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-medium"
                onClick={() => scrollToSection('contact')}
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-medium"
                onClick={() => scrollToSection('services')}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
            <div className="relative bg-white rounded-lg p-6 shadow-xl">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-md flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/70 backdrop-blur-sm rounded-md shadow-lg p-4 flex flex-col">
                  <div className="w-full h-2 bg-primary/30 rounded-full mb-3"></div>
                  <div className="grid grid-cols-3 gap-2 flex-grow">
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="h-3 bg-secondary/20 rounded-full w-3/4"></div>
                      <div className="h-3 bg-secondary/20 rounded-full w-full"></div>
                      <div className="h-3 bg-secondary/20 rounded-full w-5/6"></div>
                    </div>
                    <div className="col-span-1">
                      <div className="w-full h-full bg-primary/10 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*<div className="container mx-auto px-4 pb-12 relative z-10">*/}
      {/*  <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 py-8 border-t border-gray-200">*/}
      {/*    <p className="text-sm text-muted-foreground font-medium">Trusted by innovative companies:</p>*/}
      {/*    <div className="flex flex-wrap justify-center gap-8 md:gap-12">*/}
      {/*      {['Tech Innovators', 'GrowthStart', 'ScaleUp Labs', 'NextGen Software'].map((company) => (*/}
      {/*        <div key={company} className="text-secondary/70 font-semibold">*/}
      {/*          {company}*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default Hero;
