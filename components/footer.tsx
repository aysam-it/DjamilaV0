export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <div>
          <p className="font-serif text-2xl font-semibold text-foreground">
            Djamila Bereksi
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Bien-être · Équilibre · Vitalité · Épanouissement
          </p>
        </div>
        <a
          href="tel:+33695123924"
          className="text-sm text-foreground/80 transition-colors hover:text-foreground"
        >
          06 95 12 39 24 · 11 rue Lavoisier, 77680 Roissy-en-Brie
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Djamila Bereksi — Bioénergéticienne &amp;
          Coach Holistique. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
