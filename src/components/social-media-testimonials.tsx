"use client";
import { BadgeCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AttributionLink } from "./attribution-link";

interface DataItem {
  id: string;
  name: string;
  username: string;
  date: string;
  avatar: string;
  content: string;
}

const DATA: DataItem[] = [
  {
    id: "1",
    name: "Sarah Chen",
    username: "sarah_data",
    date: "2025-10-05",
    avatar: "/images/avatars/uifaces-human-avatar-1.jpg",
    content:
      "Datapad has completely transformed how I analyze our customer data. Instead of spending hours writing complex SQL queries, I can just ask questions in plain English and get instant insights with beautiful visualizations. Our data team's productivity has increased 5x!",
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    username: "mike_analytics",
    date: "2025-09-30",
    avatar: "/images/avatars/uifaces-human-avatar-2.jpg",
    content:
      "The collaboration features are incredible. My marketing team can now ask questions about sales data in real-time during meetings, and Datapad instantly generates custom dashboards. No more waiting for IT to create reports - we get answers immediately with the full context we need.",
  },
  {
    id: "3",
    name: "Lisa Thompson",
    username: "lisa_marketing",
    date: "2025-09-25",
    avatar: "/images/avatars/uifaces-human-avatar-3.jpg",
    content:
      "Datapad's AI assistant is like having a senior data analyst on speed dial. It understands our business context and creates actionable insights, not just generic charts. Game-changer for our marketing optimization!",
  },
  {
    id: "4",
    name: "David Kim",
    username: "david_bi",
    date: "2025-09-20",
    avatar: "/images/avatars/uifaces-human-avatar-4.jpg",
    content:
      "The integrations are seamless! We connect all our data sources - Google Analytics, Salesforce, Facebook Ads, and our warehouse - and Datapad blends everything automatically. What used to take days of manual ETL work now happens in minutes.",
  },
  {
    id: "5",
    name: "Rachel Martinez",
    username: "rachel_growth",
    date: "2025-09-15",
    avatar: "/images/avatars/uifaces-human-avatar-5.jpg",
    content:
      "Datapad doesn't just show you data - it creates the actual deliverables! It generated our complete SEO strategy with keyword targeting, ad optimization to-do lists, and even wrote our blog posts. Copy-paste ready content that actually drives results.",
  },
  {
    id: "6",
    name: "James Wilson",
    username: "james_ceo",
    date: "2025-09-10",
    avatar: "/images/avatars/uifaces-human-avatar-6.jpg",
    content:
      "As a startup founder, I couldn't afford a full data team. Datapad scales our analytics capabilities at a fraction of the cost. We get enterprise-level insights and automated reports that keep everyone aligned on our KPIs.",
  },
  {
    id: "7",
    name: "Amanda Foster",
    username: "amanda_ops",
    date: "2025-09-05",
    avatar: "/images/avatars/uifaces-human-avatar-7.jpg",
    content:
      "The anomaly detection is incredible. Datapad sends us daily alerts about unusual patterns in our sales data, and even suggests root causes and solutions. We've caught revenue-impacting issues before they became problems.",
  },
  {
    id: "8",
    name: "Carlos Mendoza",
    username: "carlos_data",
    date: "2025-08-30",
    avatar: "/images/avatars/uifaces-human-avatar-8.jpg",
    content:
      "Text2SQL has been a revelation. I can ask complex questions like 'Show me customer LTV by acquisition channel for the past 6 months' and get perfectly optimized queries that run instantly. No more debugging SQL syntax!",
  },
  {
    id: "9",
    name: "Emma Johnson",
    username: "emma_strategy",
    date: "2025-08-25",
    avatar: "/images/avatars/uifaces-human-avatar-4.jpg",
    content:
      "Datapad's memory layer learns from our conversations and improves over time. It remembers our business context, preferred metrics, and even our team's terminology. It's like having an AI analyst who's been with us for years.",
  },
];

// Reusable testimonial card component
const TestimonialCard = ({ testimonial }: { testimonial: DataItem }) => (
  <Card className="relative mb-5 break-inside-avoid rounded-xl p-5 shadow-sm">
    <div className="flex items-center gap-4">
      <Avatar className="ring-muted h-10 w-10 rounded-full ring-1">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
      </Avatar>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">{testimonial.name}</p>
          <BadgeCheck className="h-4 w-4 fill-cyan-400 stroke-white" />
        </div>
        <p className="text-muted-foreground mt-2 text-xs">
          @{testimonial.username}
        </p>
      </div>
      <div className="ml-auto hover:cursor-pointer">
        <Image
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg"
          alt="X logo"
          width={16}
          height={16}
          className="h-4 w-4"
        />
      </div>
    </div>

    <div className="border-border my-4 border-t border-dashed" />

    <div className="text-foreground text-sm">
      <q>{testimonial.content}</q>
    </div>
    {/* 
    <div className="text-muted-foreground mt-4 flex items-center gap-2 text-xs">
      <Clock className="h-4 w-4" />
      <span>{testimonial.date}</span>
    </div> */}
  </Card>
);

const SocialMediaTestimonials = () => {
  const [columnCount, setColumnCount] = useState(3);

  // Get current column count based on screen size
  useEffect(() => {
    const getColumnCount = () => {
      if (typeof window === "undefined") return 3;
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width < 1024) return 2;
      return 3;
    };

    const updateColumnCount = () => {
      setColumnCount(getColumnCount());
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  // Function to reorder items for left-to-right flow in CSS columns
  const reorderForColumns = (items: DataItem[], columns: number) => {
    const itemsPerColumn = Math.ceil(items.length / columns);
    const reordered: DataItem[] = [];

    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < itemsPerColumn; row++) {
        const originalIndex = row * columns + col;
        if (originalIndex < items.length) {
          reordered.push(items[originalIndex]);
        }
      }
    }

    return reordered;
  };

  // Calculate reordered data based on current column count
  const reorderedData = useMemo(() => {
    return reorderForColumns(DATA, columnCount);
  }, [columnCount]);

  return (
    <section className="py-32">
      <div>
        {/* Title */}
        <div className="flex flex-col gap-6 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            Hear what our customers are saying
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how teams use Datapad to talk to their data like a human
            analyst, get instant insights, and create actionable deliverables
            that drive real results.
          </p>
        </div>

        <div className="after:bg-linear-to-t after:from-background relative mt-14 w-full px-4 after:absolute after:inset-x-0 after:-bottom-2 after:h-96 sm:px-8 md:px-16 lg:px-32">
          <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {reorderedData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <AttributionLink
            buttonLocation="social-media-testimonials-primary"
            className="cursor-pointer"
          >
            <Button className="mt-4">Try for Free</Button>
          </AttributionLink>
        </div>
      </div>
    </section>
  );
};

export { SocialMediaTestimonials };
