"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
            Contacto
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tienes un proyecto en mente o quieres saber cómo podemos ayudarte? Escríbenos y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-border p-6">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Información de contacto
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

            <div className="rounded-2xl border border-border p-6">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Horario de atención
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="text-foreground">9:00 - 18:00 ART</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado - Domingo</span>
                  <span className="text-foreground">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border p-12 text-center">
                <CheckCircle className="h-12 w-12 text-foreground" />
                <h2 className="mt-4 font-mono text-xl font-semibold text-foreground">
                  Mensaje enviado
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 font-mono text-sm text-muted-foreground underline transition-colors hover:text-foreground"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="h-10 rounded-lg border border-border bg-background px-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="h-10 rounded-lg border border-border bg-background px-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="h-10 rounded-lg border border-border bg-background px-3 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <option value="" disabled>
                      Selecciona un asunto
                    </option>
                    <option value="proyecto">Nuevo proyecto</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    className="resize-none rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-6 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
