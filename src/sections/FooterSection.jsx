import React from "react";
import { quickLinks } from "../data";
import { ContactCard } from "../components/common";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "../components/icons";

export function FooterSection() {
  return (
    <>
      <section id="contact" className="border-t border-slate-200 bg-stone-50 py-20">
        <div className="section-shell">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-[0.38em] text-amber-700">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Simple, direct business contact information presented with the kind of clarity
              industrial clients expect.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-premium">
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard icon={PhoneIcon} label="Phone" value="+91 90000 00000" />
                <ContactCard icon={MailIcon} label="Email" value="info@jyothiindustries.com" />
                <ContactCard icon={MapPinIcon} label="Location" value="Industrial Area, India" />
                <ContactCard
                  icon={ClockIcon}
                  label="Business Hours"
                  value="Mon - Sat, 9:00 AM - 6:00 PM"
                />
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-premium">
              <div className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Direct support
              </div>
              <h3 className="mt-4 text-3xl font-semibold">
                Need quick answers for a procurement or supply enquiry?
              </h3>
              <p className="mt-4 leading-8 text-slate-300">
                Use WhatsApp for fast communication, quote follow-up, and business coordination.
              </p>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-stone-50 pt-12 text-slate-700">
        <div className="section-shell pb-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <div className="text-lg font-semibold tracking-[0.24em] text-slate-950">
                JYOTHI INDUSTRIES
              </div>
              <p className="mt-4 max-w-lg leading-7 text-slate-500">
                Professional Industrial Manufacturing Solutions designed to support trust,
                quality, and long-term business growth.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                Quick Links
              </div>
              <div className="mt-4 grid gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-slate-600 transition hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                Contact Details
              </div>
              <div className="mt-4 space-y-3 text-slate-600">
                <p>+91 90000 00000</p>
                <p>info@jyothiindustries.com</p>
                <p>Industrial Area, India</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
            Professional Industrial Manufacturing Solutions
          </div>
        </div>
      </footer>
    </>
  );
}
