import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type FormData = z.infer<typeof formSchema>;

const GOOGLE_FORM_ACTION_URL = 
  'https://docs.google.com/forms/d/e/1FAIpQLSdqvwqjkffulqp81jOkWqhqJhvDDLHUhzTyYhRKdO3Olh47ig/formResponse';

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('entry.372933923', data.name);
      formData.append('entry.665627448', data.email);
      formData.append('entry.1287323876', data.company);
      formData.append('entry.561609161', data.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      toast.success("Thank you for your message. I'll get back to you soon!");
      form.reset();
      
    } catch (error) {
      toast.error("Sorry, there was a problem sending your message. Please try again.");
      console.error('Error sending message:', error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message here..." 
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </Form>
  );
};

const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss your technical challenges? Reach out for a consultation or just to chat about your product's growth path.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold text-secondary mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-md">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary">Email</h4>
                      <p className="text-muted-foreground">delorenzo.michael@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-md">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary">Phone</h4>
                      <p className="text-muted-foreground">(973) 922-0738</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-md">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary">Location</h4>
                      <p className="text-muted-foreground">New York, NY (Remote availability worldwide)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg">
                  <h4 className="font-medium text-secondary mb-2">Schedule a Call</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Book a free 30-minute consultation to discuss your technical challenges.
                  </p>
                  <Button size="lg" asChild>
                    <a 
                      href="https://calendly.com/delorenzo-michael/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book Appointment
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-6">Send a Message</h3>

                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;