import React from "react";
import { overviewCards } from "../data";
import { DotIcon, SectionHeader } from "../components/common";

export function IntroSection() {
  return (
    <section id="about" className="border-t border-slate-200 bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Company Overview"
          title="About JYOTHI INDUSTRIES"
          description="A reliable manufacturing and industrial partner focused on quality output, professional communication, and dependable business relationships."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-premium">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              JYOTHI INDUSTRIES is positioned as a dependable manufacturing partner for
              businesses that expect consistency, service discipline, and a serious
              professional approach. We support industrial buyers with a clear focus on
              quality, responsiveness, and long-term value.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Business Approach
                </div>
                <div className="mt-3 text-xl font-semibold">
                  Reliable, responsive, and partner-led
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Buyer Confidence
                </div>
                <div className="mt-3 text-xl font-semibold">
                  Built to support repeat industrial orders
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {overviewCards.map((card) => (
              <div
                key={card.title}
                className="subtle-border rounded-[1.5rem] bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-white">
                    <DotIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
