import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
    </main>
  );
}
