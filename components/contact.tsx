'use client'

import { useState, type FormEvent } from 'react'
import { FadeIn } from '@/components/fade-in'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
              Contact
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Écrivons votre prochain chapitre
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Une question, une envie d&apos;échanger&nbsp;? Laissez-moi un
              message, je vous répondrai avec attention.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-sm text-muted-foreground">
                    11 rue Lavoisier, 77680 Roissy-en-Brie
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a
                    href="tel:+33695123924"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    06 95 12 39 24
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    contact@djamila-bereksi.fr
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              {sent ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Merci pour votre message
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Je reviendrai vers vous dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="prenom"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Prénom
                    </label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="vous@exemple.fr"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Envoyer
                  </button>
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
