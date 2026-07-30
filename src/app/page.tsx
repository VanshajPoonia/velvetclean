import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Team />
      <Contact />
    </main>
  );
}
