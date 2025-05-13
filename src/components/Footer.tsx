
import React from 'react';
import { Separator } from "@/components/ui/separator.tsx";
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Michael DeLorenzo</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Technical advisory services for early-stage companies looking to scale their software architecture and engineering practices.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rmichaeldelorenzo" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/michaledelorenzo" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/*<div>*/}
          {/*  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <li>*/}
          {/*      <a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        Services*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        About*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#testimonials" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        Testimonials*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        Contact*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
          
          {/*<div>*/}
          {/*  <h3 className="text-lg font-semibold mb-4">Resources</h3>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        Blog*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        Case Studies*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        Technical Guides*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">*/}
          {/*        FAQ*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
        
        <Separator className="bg-secondary-foreground/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/80 text-sm">
            &copy; {year} Michael DeLorenzo. All rights reserved.
          </p>
          {/*<div className="flex space-x-6 mt-4 md:mt-0">*/}
          {/*  <a href="#" className="text-secondary-foreground/80 hover:text-primary text-sm transition-colors">*/}
          {/*    Privacy Policy*/}
          {/*  </a>*/}
          {/*  <a href="#" className="text-secondary-foreground/80 hover:text-primary text-sm transition-colors">*/}
          {/*    Terms of Service*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
