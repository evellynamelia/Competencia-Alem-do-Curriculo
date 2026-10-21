/** PÁGINA INICIAL ("/") — apenas monta as seções na ordem em que aparecem. */
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem, Solution, Modalities, Supervision, Audiences, FinalCta } from "@/components/landing/Sections";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modalities />
        <Supervision />
        <Audiences />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
