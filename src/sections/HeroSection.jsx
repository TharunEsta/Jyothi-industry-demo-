import React from "react";
import { quickLinks, trustMarkers, stats } from "../data";

export function HeroSection() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="section-shell">
          <div className="flex h-20 items-center justify-between gap-6">
            <a href="#top" className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/15">
                <span className="text-sm font-bold tracking-[0.28em]">JI</span>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-[0.24em] text-slate-900">
                  JYOTHI INDUSTRIES
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Industrial Manufacturing
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#quote"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-70" />
        <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 translate-x-1/3 rounded-full bg-slate-900/5 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-28" id="top">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm">
                Premium Industrial Partner
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Reliable Industrial Manufacturing Solutions
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Professional, quality-driven manufacturing solutions built for trust,
                consistency, and long-term business partnerships.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-amber-700"
                >
                  Request a Quote
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  View Capabilities
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {trustMarkers.map((item) => (
                  <div
                    key={item}
                    className="subtle-border rounded-2xl bg-white/90 px-4 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
                  >
                    <div className="mb-2 h-2.5 w-2.5 rounded-full bg-amber-600" />
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-premium"
                  >
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 hidden h-20 w-20 rounded-full border border-slate-300/70 lg:block" />
              <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-full border border-amber-500/30 lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-premium">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                        Industrial Overview
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">
                        Precision. Reliability. Scale.
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                      B2B Ready
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
                      <div className="flex items-end gap-3">
                        {[64, 92, 78, 110, 84, 118].map((height, index) => (
                          <div key={index} className="flex flex-1 items-end">
                            <div
                              className="w-full rounded-t-lg bg-gradient-to-t from-amber-600 to-amber-300"
                              style={{ height }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                        <span>Workflow stability</span>
                        <span>Quality output</span>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
                        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          Manufacturing Focus
                        </div>
                        <div className="mt-3 text-3xl font-semibold">01</div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Structured production built around repeatability and buyer confidence.
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
                        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          Supply Assurance
                        </div>
                        <div className="mt-3 text-3xl font-semibold">02</div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Reliable execution that supports procurement cycles and order planning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      ["Quality", "Checked"],
                      ["Delivery", "Aligned"],
                      ["Support", "Responsive"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4"
                      >
                        <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                          {label}
                        </div>
                        <div className="mt-2 text-sm font-semibold text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
