import { Marquee } from "./magicui/marquee";

export const Logos = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-8">
          Trusted by the world's most innovative teams
        </p>
        <Marquee pauseOnHover className="[--duration:20s]" />
      </div>
    </section>
  );
};
