import React from 'react';
import { Button } from "@/components/ui/button";
import {Briefcase, Cog, Database, Laptop} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full filter blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-lg">
                <img
                    src="/me.png"
                    alt="Photo of Michael DeLorenzo"
                    className="rounded-lg w-full h-full object-cover"
                />

                <div className="mt-4 space-y-2">
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Technical Leadership for Growth-Stage Products
            </h2>
            <p className="text-muted-foreground mb-6">
              With over 15 years of experience transforming early-stage products into scalable platforms, I provide the
              technical leadership needed at this critical growth stage. My approach focuses on pragmatic solutions that
              balance immediate business needs with long-term technical sustainability.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Former CTO at Unite US</h3>
                  <p className="text-muted-foreground">Led technical transformation and scaled engineering from 5 to 50</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Former VPE at Koneksa Health</h3>
                  <p className="text-muted-foreground">Guided architecture evolution and technical debt reduction</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Laptop className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Software Architecture Specialist</h3>
                  <p className="text-muted-foreground">Expert in modernizing and scaling for the company's
                    <em><strong>current</strong></em> stage</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Cog className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Best Practices &amp; Processes</h3>
                  <p className="text-muted-foreground">Improve velocity and quality through processes that fit the team</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <a href="/delorenzo-resume-2025-04-web.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;