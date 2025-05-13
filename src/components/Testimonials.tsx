
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card.tsx';
import { Star } from 'lucide-react';

const testimonials = [
  // {
  //   text: "We brought in this consultant when our MVP started breaking under increased customer load. Within 3 months, we had a completely revamped architecture that handled 10x the traffic with better stability.",
  //   author: "Sarah Chen",
  //   position: "CEO, DataStream",
  //   stars: 5
  // },
  // {
  //   text: "The technical assessment uncovered critical issues that were holding back our product development. The actionable roadmap we received helped us prioritize our engineering efforts and accelerate feature delivery.",
  //   author: "Michael Rodriguez",
  //   position: "CTO, GrowthTech",
  //   stars: 5
  // },
  // {
  //   text: "As a non-technical founder, I was struggling to effectively manage our outsourced development team. The guidance provided on technical specifications and quality assurance practices transformed our product development process.",
  //   author: "Jessica Nguyen",
  //   position: "Founder, HealthConnect",
  //   stars: 5
  // }
];

const Testimonials = () => {
  if(testimonials.length === 0){
    return <></>;
  }

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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from founders and technical leaders who transformed their early-stage products into scalable platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-secondary mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t pt-6">
                <p className="font-medium text-secondary">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-primary font-medium mb-4">Ready to transform your product architecture?</p>
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            Schedule a free 30-minute technical assessment call
          </h3>
          <div className="inline-block">
            <button 
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Book Your Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
