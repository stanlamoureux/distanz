import { AidsTeaser } from "@/components/sections/aids-teaser";
import { CloseCta } from "@/components/sections/close-cta";
import { Compare } from "@/components/sections/compare";
import { Faq } from "@/components/sections/faq";
import { Problem } from "@/components/sections/problem";
import { Product } from "@/components/sections/product";
import { StoryTeaser } from "@/components/sections/story-teaser";
import { Uses } from "@/components/sections/uses";
import { Marquee } from "@/components/motion/marquee";
import { ClipSteps } from "@/components/sections/clip-steps";
import { Hero } from "@/components/sections/hero";

export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        words={[
          "Liberté",
          "Tout-terrain",
          "Franchir",
          "Obstacles",
          "Trottoir",
          "Racines",
          "Côte",
          "Hors bitume",
          "Clip",
          "Autonomie",
        ]}
      />
      <Problem />
      <Product />
      <AidsTeaser />
      <ClipSteps />
      <Compare />
      <Uses />
      <StoryTeaser />
      <Faq />
      <CloseCta />
    </>
  );
}
