import Header from "../components/header"
import Design from "../components/design"
import Digital from "../components/digital"
import Client from "../components/client"
import Hero from "../components/hero"
import Partner from "../components/partners"
import Footer from "../components/footer"

export default function Home() {
  return (
    <section className="text-3xl font-bold font-Palanquin">
      <Header/>
      <Hero/>
      <Design/>
      <Client/>
      <Partner/>
      <Digital/>
      <Footer/>
    </section>
  )
}
