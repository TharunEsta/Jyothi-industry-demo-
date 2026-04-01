import React from "react";
import { reasons } from "../data";
import { SectionHeader } from "../components/common";
import {
  BadgeIcon,
  BriefcaseIcon,
  SupportIcon,
  TruckIcon,
} from "../components/icons";

const iconMap = {
  badge: BadgeIcon,
  truck: TruckIcon,
  support: SupportIcon,
  briefcase: BriefcaseIcon,
};

export function TrustSection() {
  return (
    <section id="why-us" className="border-t border-slate-200 bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Trust & Value"
          title="Why Businesses Choose JYOTHI INDUSTRIES"
          description="A trust-heavy presentation built for procurement teams, distributors, and industrial buyers who care about quality control, delivery discipline, and reliable support."
        />

        <div className="mb-8 grid gap-3 rounded-[1.5rem] border border-slate-200 bg-stone-50 p-5 text-sm text-slate-600 sm:grid-cols-3">
          <div>Strict process control across production and inspection</div>
          <div>Timely delivery planning for business continuity</div>
          <div>Clear communication for repeat supply relationships</div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {reasons.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="subtle-border rounded-[1.75rem] bg-gradient-to-br from-white to-stone-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
