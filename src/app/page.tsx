import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Posts />
      <Footer />
    </main>
  );
}
