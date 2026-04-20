import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Pricing } from "@/components/pricing"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfterSlider />
        <About />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
