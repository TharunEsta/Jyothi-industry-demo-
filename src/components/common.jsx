import React from "react";

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.38em] text-amber-700">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export function FormField({ label, placeholder, textarea = false, type = "text" }) {
  const base =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10";

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {textarea ? (
        <textarea className={`${base} min-h-[140px] resize-y`} placeholder={placeholder} />
      ) : (
        <input className={base} type={type} placeholder={placeholder} />
      )}
    </label>
  );
}

export function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:shadow-premium">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
        <Icon />
      </div>
      <div className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">{label}</div>
      <div className="mt-2 text-base font-semibold text-slate-900">{value}</div>
    </div>
  );
}

export function ContactLine({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

export function DotIcon() {
  return <span className="h-3 w-3 rounded-full bg-white" />;
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h13m0 0-5-5m5 5-5 5" />
    </svg>
  );
}
