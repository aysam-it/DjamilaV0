import { FadeIn } from '@/components/fade-in'

const photos = [
  {
    src: '/images/cabinet-1.webp',
    label: 'L\'espace d\'accueil',
    alt: 'L\'espace d\'accueil lumineux du cabinet avec fauteuils, table de soin et mur doré',
  },
  {
    src: '/images/cabinet-2.webp',
    label: 'Le cocon Safe Place',
    alt: 'Le coin cocon avec ses fauteuils douillets baigné de lumière dorée',
  },
]

export function Cabinet() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Le cabinet
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Un lieu chaleureux et lumineux
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Un écrin baigné de lumière dorée, pensé pour vous offrir détente et
            sérénité dès le premier instant.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {photos.map((p, i) => (
            <FadeIn key={p.label} delay={i * 100}>
              <figure className="group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={p.src || "/placeholder.svg"}
                    alt={p.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 font-serif text-2xl text-foreground">
                  {p.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
