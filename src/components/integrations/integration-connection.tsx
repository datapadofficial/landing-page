"use client";

import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Integration } from "@/types/integration";

interface Props {
  integration: Integration;
}

const IntegrationConnection = ({ integration }: Props) => {
  return (
    <section className="flex w-full  items-center justify-center py-8 sm:py-32 px-4 sm:px-0 bg-black-3 dark:bg-white-3 border border-input sm:rounded-xl">
      <div className="container">
        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 p-0">
          <div className="flex w-full flex-col items-center gap-2">
            <div className="mb-2 mt-2 flex items-center justify-center gap-4">
              <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg border p-3 shadow">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={24}
                  height={24}
                />
              </div>
              <ArrowLeftRight className="size-4" />
              <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg border p-3 shadow">
                <Image
                  src="/images/datapad-logo.svg"
                  alt="Datapad"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Connect {integration.name} to Datapad
            </h1>
            <p className="text-muted-foreground mt-1 text-center text-base">
              {integration.description}
            </p>
          </div>

          <div className="flex w-full items-center justify-center gap-2 pb-2">
            <Button type="button" size="lg" asChild>
              <a href="https://app.datapad.io">Connect Free in 2 Minutes</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntegrationConnection };
