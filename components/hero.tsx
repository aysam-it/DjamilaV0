export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-background pt-24"
    >
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <div className="flex flex-col items-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Bien-être · Équilibre · Vitalité
          </p>
          <h1 className="text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Retrouvez l&apos;équilibre
            <span className="mt-2 block text-primary">
              Réveillez votre vitalité
            </span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-center text-lg leading-relaxed text-muted-foreground">
            Djamila Bereksi — Bioénergéticienne &amp; Coach Holistique. Un
            accompagnement doux et concret pour retrouver votre harmonie
            intérieure.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#rdv"
              className="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#approche"
              className="rounded-full border border-foreground/20 px-7 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Découvrir mon approche
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
