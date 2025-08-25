"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useRef, useEffect, useState } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
}

interface TestimonialWallProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const TestimonialWall = ({
  title = "Meet our happy clients",
  subtitle = "All of our 1000+ clients are happy",
  testimonials,
  showButton = false,
  buttonText = "Get started for free",
  buttonHref,
  className = "",
}: TestimonialWallProps) => {
  // Split testimonials into two arrays for dual scrolling
  const midpoint = Math.ceil(testimonials.length / 2);
  const testimonials1 = testimonials.slice(0, midpoint);
  const testimonials2 = testimonials.slice(midpoint);

  // State to track if components are mounted
  const [isMounted, setIsMounted] = useState(false);

  // Auto-scroll plugins - initialize only once
  const plugin1 = useRef<any>(null);
  const plugin2 = useRef<any>(null);

  useEffect(() => {
    // Initialize plugins only after component mounts
    if (!plugin1.current) {
      plugin1.current = AutoScroll({
        startDelay: 1000,
        speed: 1,
        stopOnInteraction: false,
      });
    }
    
    if (!plugin2.current) {
      plugin2.current = AutoScroll({
        startDelay: 1000,
        speed: 1,
        direction: "backward",
        stopOnInteraction: false,
      });
    }

    setIsMounted(true);

    // Cleanup function
    return () => {
      if (plugin1.current?.destroy) {
        plugin1.current.destroy();
      }
      if (plugin2.current?.destroy) {
        plugin2.current.destroy();
      }
    };
  }, []);

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground mb-8">
            {subtitle}
          </p>
        )}
        {showButton && (
          <Button className="mt-6">
            {buttonText}
          </Button>
        )}
      </div>
      
      {testimonials.length > 0 && isMounted && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 space-y-4">
            {/* First row of testimonials */}
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={plugin1.current ? [plugin1.current] : []}
              onMouseEnter={() => plugin1.current?.stop()}
              onMouseLeave={() => plugin1.current?.play()}
            >
              <CarouselContent>
                {testimonials1.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-auto">
                    <Card className="max-w-96 p-6 select-none">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-muted-foreground">
                            {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                          </p>
                        </div>
                      </div>
                      <q className="text-sm">{testimonial.content}</q>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Second row of testimonials (if we have enough) */}
            {testimonials2.length > 0 && (
              <Carousel
                opts={{
                  loop: true,
                }}
                plugins={plugin2.current ? [plugin2.current] : []}
                onMouseEnter={() => plugin2.current?.stop()}
                onMouseLeave={() => plugin2.current?.play()}
              >
                <CarouselContent>
                  {testimonials2.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-auto">
                      <Card className="max-w-96 p-6 select-none">
                        <div className="mb-4 flex gap-4">
                          <Avatar className="size-9 rounded-full ring-1 ring-input">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                          </Avatar>
                          <div className="text-sm">
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-muted-foreground">
                              {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                            </p>
                          </div>
                        </div>
                        <q className="text-sm">{testimonial.content}</q>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export { TestimonialWall, type Testimonial };