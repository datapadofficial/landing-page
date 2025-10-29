"use client";

import { Faq } from "@/components/faq";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";

const stockAIFaqItems = [
  {
    question: "How do I analyze a stock chart with AI?",
    answer:
      "Simply open the camera or gallery feature in Stock AI, select or capture an image of a stock chart, and our AI will automatically analyze it. The AI examines technical indicators, patterns, and trends, then provides a plain-English explanation of what the chart shows.",
  },
  {
    question: "What does the technical analysis show?",
    answer:
      "Stock AI provides comprehensive technical analysis including RSI, MACD, moving averages, support and resistance levels, trend analysis, and momentum indicators. The AI explains these metrics in simple terms.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Stock AI uses advanced AI models to analyze charts and market data. However, it's important to remember that Stock AI is an educational tool only and does not provide investment advice. Always do your own research.",
  },
  {
    question: "Can I save my favorite stocks?",
    answer:
      "Yes! You can create watchlists and save your favorite stock tickers for quick access. Your watchlists are saved to your account and sync across your devices.",
  },
  {
    question: "What's included in the free tier vs premium?",
    answer:
      "The free tier includes limited stock analyses and chart image uploads. Premium subscribers get unlimited analyses, unlimited chart uploads, advanced AI features, and priority support.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes, we take your privacy seriously. Your chat history and uploaded images are encrypted and stored securely. We do not sell your data to third parties. For complete details, please read our Privacy Policy.",
  },
  {
    question: "How do I delete my account and data?",
    answer:
      "To delete your account and data, please contact us at hello@datapad.io with your account email. We will permanently delete your account data including chat history and uploaded images.",
  },
  {
    question: "Can I use Stock AI for day trading?",
    answer:
      "Stock AI is designed as an educational tool to help you learn about technical analysis. It is NOT investment advice. Always conduct your own research and consult with a financial advisor.",
  },
];

export default function StockAISupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      `Stock AI Support: ${formData.subject}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@datapad.io?subject=${subject}&body=${body}`;
  };

  return (
    <main className="flex flex-col max-w-7xl items-center mx-auto">
      <section className="py-8 sm:py-32 bg-background px-4 sm:px-0 w-full">
        <div className="container text-center">
          <h1 className="mb-4 text-3xl font-semibold md:mb-6 md:text-5xl">
            Stock AI Support
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Get help with Stock AI - Trends & Analysis. Browse our FAQ or
            contact our support team.
          </p>
        </div>
      </section>

      <Faq
        heading="Frequently Asked Questions"
        items={stockAIFaqItems}
      />

      <section className="py-8 sm:py-32 bg-background px-4 sm:px-0 w-full">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-3xl font-semibold md:mb-6 md:text-4xl text-center">
              Contact Support
            </h2>
            <p className="text-muted-foreground text-center mb-8 md:text-lg">
              Send us a message and we'll get back to you within 1-2 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger id="subject">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technical Support">
                      Technical Support
                    </SelectItem>
                    <SelectItem value="Account & Billing">
                      Account & Billing
                    </SelectItem>
                    <SelectItem value="Feature Request">
                      Feature Request
                    </SelectItem>
                    <SelectItem value="Bug Report">Bug Report</SelectItem>
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your question or issue..."
                  rows={6}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting, you agree to our{" "}
                <a
                  href="/stock-ai/privacy-policy"
                  className="underline hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </p>
            </form>

            <div className="mt-12 p-6 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-2">
                Prefer to email us directly?
              </p>
              <a
                href="mailto:hello@datapad.io"
                className="text-primary underline hover:no-underline font-medium"
              >
                hello@datapad.io
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
