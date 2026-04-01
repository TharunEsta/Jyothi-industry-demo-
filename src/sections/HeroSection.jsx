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
                  Manufacturing & Supply
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="absolute inset-0 premium-grid opacity-55" />
        <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[rgba(180,83,9,0.10)] blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 translate-x-1/3 rounded-full bg-slate-900/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-28" id="top">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm">
                Precision-Driven Manufacturing Partner
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Precision-Driven Industrial Manufacturing
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Consistent quality, reliable delivery, and industrial-grade manufacturing
                support for businesses that need a dependable partner for bulk supply,
                custom production, and long-term procurement relationships.
              </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                  Serving industrial clients across multiple sectors with a focus on performance,
                  communication, and practical supply support.
                </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-full brand-accent-bg px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:brightness-105"
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
                    className="subtle-border rounded-2xl bg-white/90 px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                  >
                    <div className="mb-2 h-2.5 w-2.5 rounded-full brand-accent-bg" />
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
                {[
                  "Industrial-grade materials",
                  "Timely delivery planning",
                  "Long-term business partnerships",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2">
                    {item}
                  </span>
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
              <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-full border border-[rgba(180,83,9,0.30)] lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-premium">
                <IndustrialVisual />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function IndustrialVisual() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Industrial Scene
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Factory floor, production lines, and bulk dispatch support
          </h2>
        </div>
        <div className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
          B2B Ready
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,119,6,0.09)_0%,transparent_35%,rgba(15,23,42,0.2)_100%)]" />
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#1e293b_0%,#0f172a_58%,#020617_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_30%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.65)_100%)]" />
              <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#334155_0%,#1e293b_46%,#0f172a_100%)] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
                      Production Floor
                    </div>
                    <div className="rounded-full border border-[rgba(180,83,9,0.20)] bg-[rgba(180,83,9,0.10)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#f4b974]">
                      Active
                    </div>
                  </div>

                  <div className="relative h-56 overflow-hidden rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,#475569_0%,#1e293b_55%,#0f172a_100%)]">
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(180,83,9,0.14),rgba(15,23,42,0.02))]" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]" />
                    <div className="absolute left-6 top-6 h-28 w-16 rounded-t-xl bg-slate-500/40" />
                    <div className="absolute left-20 top-2 h-36 w-20 rounded-t-xl bg-slate-400/30" />
                    <div className="absolute left-44 top-8 h-30 w-14 rounded-t-xl bg-slate-500/35" />
                    <div className="absolute left-8 top-8 h-16 w-2 rounded-full bg-slate-300/60" />
                    <div className="absolute left-12 top-4 h-16 w-2 rounded-full bg-slate-300/45" />
                    <div className="absolute left-48 top-2 h-14 w-2 rounded-full bg-slate-300/50" />
                    <div className="absolute inset-x-0 bottom-10 h-1 bg-[rgba(217,119,6,0.22)]" />
                    <div className="absolute inset-x-8 bottom-10 flex items-end gap-2">
                      {[30, 46, 38, 52, 34, 44].map((height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#7c2d12]/70 to-[#d97706]/35"
                          style={{ height }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/[0.08] bg-black/25 px-4 py-3 text-xs uppercase tracking-[0.28em] text-slate-300">
                      <span>Sheet metal</span>
                      <span>Machined parts</span>
                      <span>Bulk dispatch</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Production
                    </div>
                    <div className="mt-3 text-xl font-semibold text-white">Controlled output</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Repeatable manufacturing backed by quality checks and practical planning.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Supply
                    </div>
                    <div className="mt-3 text-xl font-semibold text-white">On-schedule dispatch</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Prepared for procurement timelines, bulk orders, and repeat shipments.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-[rgba(180,83,9,0.20)] bg-gradient-to-br from-[rgba(180,83,9,0.12)] to-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Material Focus
                    </div>
                    <div className="mt-3 text-xl font-semibold text-white">Industrial-grade inputs</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Built around dependable materials for business-critical supply requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Manufacturing Focus
            </div>
            <div className="mt-3 text-3xl font-semibold">01</div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Structured production built around repeatability, industrial-grade materials, and buyer confidence.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Supply Assurance
            </div>
            <div className="mt-3 text-3xl font-semibold">02</div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Reliable execution that supports bulk supply, procurement cycles, and long-term business partnerships.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Quality Standards", "Strict controls"],
          ["Delivery", "Timely planning"],
          ["Support", "Responsive follow-up"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{label}</div>
            <div className="mt-2 text-sm font-semibold text-white">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
