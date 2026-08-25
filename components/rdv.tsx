import { FadeIn } from '@/components/fade-in'
import { Phone, Calendar } from 'lucide-react'

export function Rdv() {
  return (
    <section id="rdv" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <div className="mx-auto mb-6 inline-flex size-14 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground">
            <Calendar className="size-7" />
          </div>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
            Prenons rendez-vous
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Faites le premier pas vers votre équilibre. Contactez-moi par
            téléphone pour planifier votre séance, en cabinet ou à distance.
          </p>

          <a
            href="tel:+33695123924"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 font-serif text-2xl font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            <Phone className="size-6" />
            06 95 12 39 24
          </a>

          {/* Calendly placeholder */}
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
              Réservation en ligne
            </p>
            <p className="mt-3 text-primary-foreground/90">
              Le module de réservation Calendly sera intégré ici prochainement.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
