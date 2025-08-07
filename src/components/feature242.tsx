"use client";

import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HowItWorks = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const steps = [
    {
      step: "01",
      title: "Connect All Your Data",
      description:
        "Link your Google Ads, Analytics, CRM, and social platforms. No complex setup - just secure connections to your existing tools.",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-exchange-between-the-user-and-the-global-network.svg",
      href: "#",
    },
    {
      step: "02",
      title: "AI Finds What Actually Works",
      description:
        "Our AI identifies your top-performing content themes, winning keywords, and highest-converting customer behaviors to replicate success.",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-letters-and-arrows-flying-out-of-a-black-hole.svg",
      href: "#",
    },
    {
      step: "03",
      title: "Get Copy-Paste Ready Deliverables",
      description:
        "Receive complete ad campaigns, blog posts, email sequences, product descriptions, and sales scripts - optimized from your data and ready to deploy immediately.",
      imgSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-loading-the-next-page.svg",
      href: "#",
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(steps.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, steps.length]);

  return (
    <section className="overflow-hidden py-32">
      <div className="container relative flex flex-col items-center md:px-0 lg:pt-8">
        <div className="relative z-10 w-full items-center justify-between lg:flex">
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tighter md:text-7xl">
            How Datapad Works
          </h1>
          <p className="text-muted-foreground/80 mt-8 max-w-lg tracking-tight md:text-xl lg:mt-0">
            Stop wasting hours creating content that doesn't convert. Get AI
            that actually generates your ad campaigns, blog posts, email
            sequences, and sales scripts - ready to copy-paste in minutes.{" "}
            <span className="text-foreground group inline-flex cursor-pointer items-center font-medium transition-all ease-in-out">
              See it in action{" "}
              <ChevronRight
                size={17}
                className="ml-1 mt-px transition-all ease-in-out group-hover:ml-2"
              />{" "}
            </span>
          </p>
        </div>
        <DottedDiv className="mt-8 flex w-full items-center justify-center px-2 py-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="m-0 flex w-full">
              {steps.map((step, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-muted group relative flex h-full max-h-96 w-full flex-col justify-between text-ellipsis rounded-3xl p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-bold text-primary">
                          {step.step}
                        </span>
                        <a
                          href={step.href}
                          className="relative z-10 cursor-pointer"
                        >
                          <Button
                            variant="outline"
                            className="hover:bg-muted h-10 w-10 rounded-full bg-transparent transition-all ease-in-out"
                          >
                            <Plus className="scale-125" />
                          </Button>
                        </a>
                      </div>
                      <Image
                        className="max-h-48 w-full opacity-100 transition-all ease-in-out group-hover:scale-95 group-hover:opacity-70"
                        src={step.imgSrc}
                        alt={step.title}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="flex w-full flex-col space-y-2">
                      <h5 className="text-xl font-semibold leading-6 tracking-tight transition-all ease-in-out">
                        {step.title}
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex w-full items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">
                  {current.toString().padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">
                  {count.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="relative mr-10 flex gap-2">
                <CarouselPrevious className="h-10 w-10" />
                <CarouselNext variant="default" className="h-10 w-10" />
              </div>
            </div>
          </Carousel>
        </DottedDiv>
      </div>
    </section>
  );
};

export { HowItWorks };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="bg-muted absolute -left-[12.5px] top-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -left-[12.5px] bottom-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -top-4 left-0 h-[110%] w-[1.5px]" />
    <div className="bg-muted absolute -top-4 right-0 h-[110%] w-[1.5px]" />
    <div className="bg-foreground absolute left-[-3px] top-[12.5px] z-10 h-2 w-2 rounded-full" />
    <div className="bg-foreground absolute right-[-3px] top-[12.5px] z-10 h-2 w-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] left-[-3px] z-10 h-2 w-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] right-[-3px] z-10 h-2 w-2 rounded-full" />
    {children}
  </div>
);
