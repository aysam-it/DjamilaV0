import { FadeIn } from '@/components/fade-in'
import { MapPin, Video, Check } from 'lucide-react'

const cabinet = [
  'Séances de bioénergie',
  'Coaching holistique individuel',
  'Espace cocon « Safe Place »',
]
const distance = [
  'Par téléphone',
  'En visioconférence',
  'Même qualité d\'accompagnement',
]

export function Prestations() {
  return (
    <section id="prestations" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Mes prestations
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Un accompagnement adapté à vos besoins
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <MapPin className="size-7" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                En Cabinet
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                11 rue Lavoisier, 77680 Roissy-en-Brie
              </p>
              <ul className="mt-8 space-y-4">
                {cabinet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-secondary-foreground" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#rdv"
                className="mt-auto pt-10 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Réserver une séance →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-secondary/40 p-8 md:p-10">
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-background text-secondary-foreground">
                <Video className="size-7" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                À Distance
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Où que vous soyez, en toute sérénité
              </p>
              <ul className="mt-8 space-y-4">
                {distance.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-secondary-foreground" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#rdv"
                className="mt-auto pt-10 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Réserver une séance →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
