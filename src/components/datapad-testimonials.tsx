import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    quote:
      "We were drowning in data but starving for insights. Datapad turned our mess into actionable strategies that actually move the needle.",
    link: "#",
    author: {
      name: "David Park",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      role: "CEO, DataDriven Co",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      name: "DataDriven Co",
    },
  },
  {
    quote:
      "Finally, an AI tool that doesn't just tell me what happened—it creates the actual campaigns I need to run. Copy-paste ready, results guaranteed.",
    link: "#",
    author: {
      name: "Sarah Martinez",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      role: "Marketing Director, ScaleUp Inc",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      name: "ScaleUp Inc",
    },
  },
  {
    quote:
      "Datapad replaced our entire data team's manual work. What used to take 3 analysts a week now happens in 10 minutes. The ROI was immediate.",
    link: "#",
    author: {
      name: "Marcus Chen",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      role: "VP of Growth, TechFlow",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      name: "TechFlow",
    },
  },
];

const CASE_STUDIES = [
  {
    title: "From Data Chaos to $2M Pipeline Growth",
    link: "#",
    stats: [
      {
        number: "$2M",
        text: "new pipeline generated in 90 days",
      },
    ],
    author: {
      name: "Lisa Thompson",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      role: "Head of Revenue Ops",
    },
    background:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  },
  {
    title: "How We Cut Analysis Time by 95%",
    link: "#",
    stats: [
      {
        number: "95%",
        text: "reduction in analysis time",
      },
    ],
    author: {
      name: "James Wilson",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      role: "Data Team Lead",
    },
    background:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  },
  {
    title: "From Insights to Action: 10x ROI Story",
    link: "#",
    stats: [
      {
        number: "10x",
        text: "return on investment achieved",
      },
    ],
    author: {
      name: "Emily Rodriguez",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      role: "VP of Marketing",
    },
    background:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
  },
];

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}

const Author = ({ image, name, role }: AuthorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10 rounded-xl bg-background/50">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
};

const DatapadTestimonials = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Teams that chose action over analysis
            </h2>
            <div className="max-w-[28.75rem]">
              <p className="text-lg text-muted-foreground md:text-xl">
                While competitors show charts, we deliver campaigns. See how
                teams transform data into dollars with Datapad.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-muted p-6"
            >
              <div className="flex flex-col gap-6">
                <p className="text-xl leading-relaxed font-medium text-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Author
                  image={testimonial.author.image}
                  role={testimonial.author.role}
                  name={testimonial.author.name}
                />
                <div className="w-24">
                  <img
                    className="w-full object-contain object-center opacity-80"
                    src={testimonial.company.logo}
                    alt={testimonial.company.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {CASE_STUDIES.map((caseStudy, index) => (
            <a
              key={index}
              href={caseStudy.link}
              className="group relative flex aspect-square flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-muted p-8 transition-all duration-300 hover:bg-foreground hover:shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-300 group-hover:scale-105 group-hover:opacity-10"
                style={{ backgroundImage: `url(${caseStudy.background})` }}
              />
              <div className="relative flex flex-col gap-3">
                <div className="text-5xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-background">
                  {caseStudy.stats[0].number}
                </div>
                <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-background/80">
                  {caseStudy.stats[0].text}
                </p>
              </div>
              <div className="relative flex flex-col gap-6">
                <p className="text-xl leading-tight font-semibold text-foreground transition-colors duration-300 group-hover:text-background">
                  {caseStudy.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { DatapadTestimonials };
