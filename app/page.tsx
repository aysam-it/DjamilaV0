import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Approche } from '@/components/approche'
import { Prestations } from '@/components/prestations'
import { Rdv } from '@/components/rdv'
import { Cabinet } from '@/components/cabinet'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Approche />
      <Prestations />
      <Rdv />
      <Cabinet />
      <Contact />
      <Footer />
    </main>
  )
}
