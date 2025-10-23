import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import InnovativeShoppingSection from '@/components/InnovativeShoppingSection'
import FeaturesSection from '@/components/FeaturesSection'
import AppScreenshotsSection from '@/components/AppScreenshotsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-milkyway-dark">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <WhyChooseUsSection />
      </section>
      <InnovativeShoppingSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="screenshot">
        <AppScreenshotsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </main>
  )
}
