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
          description="Our manufacturing and supply support is positioned for sectors that need dependable bulk supply, consistent quality standards, and straightforward business communication."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-base font-semibold text-slate-900">{industry.title}</span>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{industry.text}</p>
                </div>
                <span className="text-slate-400">
                  <ArrowIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
