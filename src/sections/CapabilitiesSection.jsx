import React from "react";
import { capabilities } from "../data";
import { SectionHeader } from "../components/common";
import {
  BlueprintIcon,
  BoxesIcon,
  CogIcon,
  FactoryIcon,
  HandshakeIcon,
  ShieldCheckIcon,
} from "../components/icons";

const iconMap = {
  factory: FactoryIcon,
  cog: CogIcon,
  blueprint: BlueprintIcon,
  boxes: BoxesIcon,
  shield: ShieldCheckIcon,
  handshake: HandshakeIcon,
};

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-slate-200 bg-stone-50 py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Capabilities"
          title="Our Products & Capabilities"
          description="Clear, clean, and commercially focused capability cards built to communicate manufacturing strength without unnecessary clutter."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white transition group-hover:bg-amber-600">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
