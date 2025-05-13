
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Code, Database, Globe, Laptop, Settings, Users } from 'lucide-react';

const serviceItems = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Technical Due Diligence",
    description: "Comprehensive assessment of your codebase, architecture, and technical debt to identify growth barriers."
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Architecture Redesign",
    description: "Transform your MVP architecture into a scalable, maintainable system designed for growth and flexibility."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Team Development",
    description: "Build and mentor high-performing engineering teams with processes tailored to your growth stage."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Data Infrastructure",
    description: "Design and implement scalable data systems that grow with your business needs and support analytics."
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "DevOps Maturity",
    description: "Establish robust CI/CD pipelines, monitoring, and operational practices for reliability at scale."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Product Roadmap",
    description: "Strategic planning that aligns technical capabilities with your business objectives and market opportunities."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Technical Advisory Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized expertise to transform your early-stage product into a robust, scalable platform ready for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 md:p-10 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Your Product at a Technological Crossroads?
              </h3>
              <p className="text-muted-foreground mb-6">
                Many early-stage companies face critical challenges when transitioning from MVP to growth phase. Your technology choices now will determine how effectively you can scale, innovate, and respond to market demands.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="relative bg-gradient-to-r from-white to-blue-50 p-6 rounded-lg shadow-md">
                  <p className="font-medium text-secondary text-center">
                    <span className="block text-4xl font-bold text-primary mb-2">73%</span>
                    of startups fail due to premature scaling and technical debt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
