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
          description="End-to-end manufacturing and supply support for industrial and commercial buyers who expect dependable delivery, clear communication, and consistent quality."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-800/5 bg-slate-950 p-8 text-white shadow-premium">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              JYOTHI INDUSTRIES serves as a practical manufacturing partner for businesses
              that need bulk supply, custom manufacturing, and dependable day-to-day support.
              Our approach is built around industrial-grade materials, quality standards, and
              the kind of consistent execution that helps procurement teams plan with confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Business Focus
                </div>
                <div className="mt-3 text-xl font-semibold">
                  Built for repeat supply and long-term partnerships
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Operational Support
                </div>
                <div className="mt-3 text-xl font-semibold">
                  Clear quotations, practical timelines, and reliable follow-up
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Serving industrial clients across multiple sectors",
                "Focused on long-term business relationships",
                "Committed to consistent quality and performance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-[rgba(180,83,9,0.14)] bg-white p-4 shadow-premium">
              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#334155_0%,#0f172a_100%)] p-5 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.12),transparent_30%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.68)_100%)]" />
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
                      Facility Profile
                    </div>
                    <div className="mt-3 text-2xl font-semibold">
                      Industrial production, fabrication, and packing support
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                      A visual representation of a working factory environment focused on order
                      fulfillment, quality checks, and reliable dispatch.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                        <div className="h-14 rounded-xl bg-[linear-gradient(180deg,#64748b_0%,#1e293b_100%)]" />
                        <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                          Metalwork
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                        <div className="h-14 rounded-xl bg-[linear-gradient(180deg,#475569_0%,#0f172a_100%)]" />
                        <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                          Assembly
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                        <div className="h-14 rounded-xl bg-[linear-gradient(180deg,#334155_0%,#020617_100%)]" />
                        <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                          Packing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-stone-50 p-4 shadow-sm">
                    <div className="relative h-full min-h-40 overflow-hidden rounded-[1.1rem] bg-[linear-gradient(180deg,#d6d3d1_0%,#94a3b8_45%,#334155_100%)]">
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(180,83,9,0.18),rgba(15,23,42,0.03))]" />
                      <div className="absolute left-4 top-4 h-10 w-20 rounded-lg bg-white/18 backdrop-blur-sm" />
                      <div className="absolute left-6 bottom-5 h-10 w-10 rounded-full border-4 border-[rgba(180,83,9,0.50)]" />
                      <div className="absolute right-5 top-8 h-24 w-14 rounded-t-xl bg-slate-800/45" />
                      <div className="absolute inset-x-4 bottom-6 h-2 rounded-full bg-slate-950/25" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-700">
                      Factory floor and heavy-duty production infrastructure
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {overviewCards.map((card) => (
                      <div
                        key={card.title}
                        className="subtle-border rounded-[1.5rem] bg-stone-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl brand-accent-bg text-white">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
