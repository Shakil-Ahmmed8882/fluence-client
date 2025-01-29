"use client";

import { FeatureCard, features, HeroButton, HeroHeader } from ".";
import { TFeature } from "../types/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <HeroHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {features?.map((feature: TFeature, index: number) => (
          <FeatureCard key={index} feature={feature} />
        ))}
        <div className="col-span-2 text-center justify-center mt-5">
          <HeroButton />
        </div>
      </div>
    </main>
  );
}
