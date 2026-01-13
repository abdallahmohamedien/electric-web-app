import Navbar from "../components/Navbar";
import Hero from "../section/Hero";
import Services from "../section/Services";
import Portfolio from "@/section/Portfolio";
import Contact from "@/section/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      {/* Hero Section Placeholder */}
      <section className="pt-32 pb-20 bg-black px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-300 mb-6">
          خدمات كهربائية احترافية <br/> 
          <span className="text-white">بأعلى معايير الأمان</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          نحن الخيار الأول لصيانة وتأسيس الكهرباء في المملكة. خبرة، سرعة، وضمان حقيقي.
        </p>
      </section>

    </main>
  );
}