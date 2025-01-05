"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { coursesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");
  // console.log(ref);
  return (
    <section
      ref={ref}
      id="certifications"
      className="mb-28 max-w-[65rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Certifications</SectionHeading>

      <AnimatedTestimonials testimonials={[...coursesData]} />
    </section>
  );
}
