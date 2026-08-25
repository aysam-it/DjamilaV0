import { FadeIn } from '@/components/fade-in'
import { Heart, Eye, Clock, Sparkles, Shield } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Bienveillance',
    desc: 'Un accueil chaleureux, sans pression, dans le respect de qui vous êtes.',
  },
  {
    icon: Eye,
    title: 'Non-jugement',
    desc: 'Un espace où vous pouvez vous livrer en toute confiance et liberté.',
  },
  {
    icon: Clock,
    title: 'Respect de votre rythme',
    desc: 'Chaque parcours est unique. Nous avançons à votre mesure.',
  },
  {
    icon: Sparkles,
    title: 'Méthode concrète',
    desc: 'Une approche multidimensionnelle, à la fois douce et structurée.',
  },
]

export function Approche() {
  return (
    <section id="approche" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Mon approche
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Un accompagnement humain, à l&apos;écoute de votre énergie
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Je suis Djamila Bereksi, bioénergéticienne et coach holistique. Ma
            philosophie repose sur une conviction simple&nbsp;: le bien-être
            naît de l&apos;équilibre entre le corps, le cœur et l&apos;esprit.
            Je vous accompagne avec douceur pour libérer vos blocages et
            réveiller votre vitalité.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-background p-7">
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <v.icon className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Cocon Safe Place */}
        <FadeIn>
          <div className="mt-16 grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-primary">
                <Shield className="size-5" />
                <span className="text-xs uppercase tracking-[0.2em]">
                  Le cocon
                </span>
              </div>
              <h3 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Un espace « Safe Place »
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-foreground/80">
                Mon cabinet est pensé comme un cocon&nbsp;: un lieu protégé,
                chaleureux et apaisant où vous pouvez déposer vos tensions en
                toute sécurité. Ici, vous êtes accueilli·e tel·le que vous êtes.
              </p>
            </div>
            <div className="relative hidden aspect-[4/5] md:block">
              <div className="absolute inset-0 rounded-2xl bg-primary" />
              <div className="absolute inset-x-6 bottom-6 top-16 rounded-xl bg-secondary" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
