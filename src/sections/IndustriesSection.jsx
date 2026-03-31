import React from "react";
import { industries } from "../data";
import { ArrowIcon, SectionHeader } from "../components/common";

export function IndustriesSection() {
  return (
    <section className="border-t border-slate-200 bg-stone-50 py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Industries"
          title="Industries We Serve"
          description="Built for sectors that need dependable supply, professional handling, and business-grade presentation."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
            >
              <span className="text-base font-semibold text-slate-900">{industry}</span>
              <span className="text-slate-400">
                <ArrowIcon />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
