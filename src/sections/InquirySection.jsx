import React from "react";
import { SectionHeader, FormField, ContactLine } from "../components/common";

export function InquirySection() {
  return (
    <section id="quote" className="border-t border-slate-200 bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Inquiry"
          title="Request a Business Quote"
          description="A clean inquiry form that makes it easy for industrial buyers to share requirements and start a conversation."
        />

        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-premium">
            <div className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Business-first response
            </div>
            <h3 className="mt-4 text-3xl font-semibold">
              Tell us what you need and we will follow up professionally.
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              Share your product requirement, volume, or target timeline. This sample layout
              is designed to capture serious B2B inquiries without friction.
            </p>

            <div className="mt-8 space-y-4">
              <ContactLine label="Expected turnaround" value="Fast response" />
              <ContactLine label="Ideal for" value="Quotes and supply requests" />
              <ContactLine label="Communication style" value="Clear and professional" />
            </div>
          </div>

          <form className="subtle-border rounded-[2rem] bg-stone-50 p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Name" placeholder="Your name" />
              <FormField label="Company Name" placeholder="Company / organization" />
              <FormField label="Phone Number" placeholder="+91 -" />
              <FormField label="Email" placeholder="name@company.com" type="email" />
            </div>
            <div className="mt-5">
              <FormField
                label="Requirement / Inquiry"
                placeholder="Tell us about your requirement, quantities, material type, or any specific details."
                textarea
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                We respect business privacy and treat inquiries professionally.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-amber-700"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
