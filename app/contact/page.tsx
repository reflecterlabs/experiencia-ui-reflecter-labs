"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ContactPage() {
  const { t } = useLocale();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - connect to your backend/email service
    setSubmitted(true);
  };

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.contact.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.contact.contactInfo}
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="mailto:contact@reflecterlabs.xyz"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>contact@reflecterlabs.xyz</span>
                </a>
                <a
                  href="tel:+5491173661972"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+54 9 11 7366 1972</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Córdoba, Argentina</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.contact.hours}
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t.contact.monFri}</span>
                  <span className="text-foreground">9:00 - 18:00 ART</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.satSun}</span>
                  <span className="text-foreground">{t.contact.closed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border p-12 text-center bg-background/30 backdrop-blur-sm shadow-xl">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h2 className="mt-4 font-mono text-xl font-semibold text-foreground">
                  {t.common.messageSent}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.contact.thankYou}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 font-mono text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {t.common.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border p-6 lg:p-8 bg-background/20 backdrop-blur-sm shadow-sm"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="h-10 rounded-lg border border-border bg-background px-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="h-10 rounded-lg border border-border bg-background px-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t.contact.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="h-10 rounded-lg border border-border bg-background px-3 font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                  >
                    <option value="" disabled>
                      {t.contact.selectSubject}
                    </option>
                    <option value="proyecto">{t.contact.subjectProject}</option>
                    <option value="colaboracion">{t.contact.subjectCollab}</option>
                    <option value="soporte">{t.contact.subjectSupport}</option>
                    <option value="otro">{t.contact.subjectOther}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="resize-none rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-11 items-center justify-center gap-3 rounded-lg bg-foreground px-6 font-mono text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  <span>{t.common.sendMessage}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
