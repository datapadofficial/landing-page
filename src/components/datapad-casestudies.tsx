import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const DatapadCasestudies = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium">500+ Teams Already Scaling</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Real results. Real ROI. Real fast.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stop paying for insights you can't use. See how teams turn data into
            dollars with implementation-ready strategies.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/testimonial/testimonial-4.jpg"
                alt="VP of Growth"
                width={240}
                height={290}
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  "The analysis-to-action gap was killing us. We had insights
                  but no execution. Datapad bridges that gap—it doesn't just
                  tell us what's wrong, it creates the campaigns to fix it. Our
                  conversion rates doubled in 6 weeks."
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Jennifer Walsh
                    </p>
                    <p className="text-muted-foreground">VP of Growth, Grin</p>
                  </div>
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                    alt="Grin logo"
                    width={60}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  2x
                </p>
                <p className="font-semibold text-primary">Conversion Rate</p>
                <p className="text-muted-foreground">In just 6 weeks</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  0
                </p>
                <p className="font-semibold text-primary">Analysis Gap</p>
                <p className="text-muted-foreground">From insight to action</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/testimonial/testimonial-3.jpg"
                alt="Data Team Lead"
                width={240}
                height={290}
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  "Our CEO wanted answers yesterday, but our data team was
                  drowning. Datapad doesn't just analyze—it creates the actual
                  SEO content, ad copy, and optimization lists we need. It's
                  like having 10 senior analysts working 24/7."
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Michael Torres
                    </p>
                    <p className="text-muted-foreground">
                      Data Team Lead, ScaleUp
                    </p>
                  </div>
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="ScaleUp logo"
                    width={60}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  10x
                </p>
                <p className="font-semibold text-primary">Team Output</p>
                <p className="text-muted-foreground">Same team, 10x results</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  24/7
                </p>
                <p className="font-semibold text-primary">AI Analysis</p>
                <p className="text-muted-foreground">
                  Never sleeps, always delivers
                </p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/testimonial/testimonial-1.jpg"
                alt="Marketing Director"
                width={240}
                height={290}
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  "We were spending $15K/month on analysts who took weeks to
                  deliver insights we couldn't act on. Datapad gives us
                  ready-to-deploy campaigns in minutes. Our ROAS improved 340%
                  in the first month."
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Rachel Kim
                    </p>
                    <p className="text-muted-foreground">
                      Marketing Director, GrowthCorp
                    </p>
                  </div>
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                    alt="GrowthCorp logo"
                    width={60}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  340%
                </p>
                <p className="font-semibold text-primary">ROAS Improvement</p>
                <p className="text-muted-foreground">In first 30 days</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  $15K
                </p>
                <p className="font-semibold text-primary">Monthly Savings</p>
                <p className="text-muted-foreground">On analyst costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DatapadCasestudies };
