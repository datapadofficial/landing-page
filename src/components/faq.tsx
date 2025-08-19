import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq2Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = "Frequently asked questions",
  items = [
    {
      question: "Can Datapad combine data from multiple sources?",
      answer:
        "Yes! Datapad excels at data blending from multiple sources. With 50+ integrations including databases (SQL, BigQuery, Snowflake), marketing platforms (Google Ads, Facebook Ads), social media, sales CRMs, and more, you can combine and analyze all your data in one place for comprehensive insights.",
    },
    {
      question: "Can I have unlimited Sources?",
      answer:
        "Datapad supports connections to 50+ different data sources including databases, marketing platforms, social media, sales tools, and APIs. The number of sources you can connect depends on your plan. Contact our team to discuss your specific integration needs.",
    },
    {
      question: "Can we have unlimited chats?",
      answer:
        "You can have extensive conversations with your AI data analyst. The chat limits vary by plan, but our AI assistant is designed to handle complex, ongoing conversations about your data, providing detailed analysis and actionable insights whenever you need them.",
    },
    {
      question: "Do I need technical skills to use Datapad?",
      answer:
        "No technical skills required! Datapad is designed for everyone. Simply talk to your data like you're speaking with a human analyst. Our AI handles the complex SQL queries, Python code, and data processing behind the scenes, so you can focus on getting insights and making decisions.",
    },
    {
      question: "How does the assistant analyze my data?",
      answer:
        "Our AI assistant works like a real data analyst. It can write SQL queries, execute Python code, blend data from multiple sources, create visualizations, and generate actionable insights. It learns from your workspace context and remembers your preferences to provide increasingly personalized analysis.",
    },
    {
      question: "How many users can I add to my workspace?",
      answer:
        "Datapad supports team collaboration with multiple users per workspace. The number of users depends on your plan. You can share reports, dashboards, and insights with your team, and even get data insights directly in Slack through our bot integration.",
    },
    {
      question: "How often will my data refresh?",
      answer:
        "Data refresh frequency depends on your integrations and plan. Many sources can be set to refresh in real-time or on custom schedules. You can also schedule automated report generation and set up alerts for anomalies or important changes in your data.",
    },
    {
      question: "I have questions, can we talk?",
      answer:
        "Absolutely! We'd love to chat about how Datapad can help with your specific use case. You can reach out to our team through our contact form, and we'll schedule a personalized demo to show you exactly how Datapad can transform your data analysis workflow.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, data security is our top priority. We follow industry-standard security practices to protect your data. Your information is encrypted in transit and at rest, and we maintain strict access controls. We never share your data with third parties, and you maintain full control over your data at all times.",
    },
  ],
}: Faq2Props) => {
  return (
    <section className="py-32 bg-background">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <h4 className="mb-2 font-semibold">{item.question}</h4>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq };
