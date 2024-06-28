import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
