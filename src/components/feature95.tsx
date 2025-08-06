import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { Badge } from "@/components/ui/badge";

const Feature95 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 max-w-xl px-8 lg:px-0">
          <Badge variant="outline">How it works</Badge>
          <h3 className="mb-3 mt-6 text-balance font-medium">
            From data source to insights in minutes
          </h3>
          <p>
            Connect your data, let AI analyze it, and get actionable insights
            through beautiful dashboards.
          </p>
        </div>
        <div>
          <Tabs defaultValue="tab-1">
            <TabsList className="relative grid items-start gap-6 lg:grid-cols-4">
              <div className="bg-input absolute left-4 right-0 top-[30px] -z-10 hidden h-px lg:block"></div>
              <TabsTrigger
                value="tab-1"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background lg:group-data-[state=active]:bg-primary lg:group-data-[state=active]:text-background lg:group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium lg:group-data-[state=active]:ring">
                      1
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium lg:mt-4">
                      Connect your data source
                    </h4>
                    <p className="text-sm">
                      Link your databases, APIs, or files in seconds with our
                      100+ integrations.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      2
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium lg:mt-4">
                      Ask the AI agent to analyze
                    </h4>
                    <p className="text-sm">
                      Simply ask questions about your data and get instant
                      AI-powered insights.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      3
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium lg:mt-4">
                      Get interactive dashboards
                    </h4>
                    <p className="text-sm">
                      Transform insights into beautiful, interactive dashboards
                      that update in real-time.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      4
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium lg:mt-4">
                      Share and collaborate
                    </h4>
                    <p className="text-sm">
                      Export reports, share dashboards, and collaborate with
                      your team seamlessly.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <div className="bg-muted/50 mt-10 hidden rounded-xl border p-10 lg:block">
              <TabsContent value="tab-1" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-2" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-3" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-4" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature95 };
