const Stats = ({
  title,
  subtitle,
  stats = [
    {
      title: "30,000+",
      subtitle: "Active Users",
    },
    {
      title: "2 Million",
      subtitle: "Excel Files Crunched",
    },
    {
      title: "100k Hours",
      subtitle: "Saved by Users",
    },
    {
      title: "< 1 Minute",
      subtitle: "Avg. Time to Build a Dashboard",
    },
  ],
}: {
  title: string;
  subtitle: string;
  stats?: { title: string; subtitle: string }[];
}) => {
  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-4xl font-medium md:text-5xl">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center w-full">
                <div className="text-lg md:text-5xl font-bold text-primary mb-1">
                  {stat.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats };
