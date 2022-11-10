import Header from "../components/header"
import Design from "../components/design"
import Client from "../components/client"
import Hero from "../components/hero"
import Partner from "../components/partners"

export default function Home() {
  return (
    <section className="text-3xl font-bold font-Palanquin">
      <Header/>
      <Hero/>
      <Design/>
      <Client/>
      <Partner/>
      <section className="join relative">
        <video className="join__content object-cover lg:h-30r h-35r w-full"  autoPlay loop muted>
          <source src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black%20And%20White%20Video%20Of%20Man%20Infront%20Of%20The%20Computer-transcode.mp4"/>
        </video>
        <div className="absolute flex justify-center lg:top-32 top-2">
          <div className="flex lg:flex-row flex-col lg:gap-32">
            <div className="lg:align-center flex justify-center mx-0 my-auto xl:ml-32 lg:ml-12 lg:mt-auto mt-12">
              <img className="lg:w-32 w-14" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg" alt="" />
            </div>
            <div className="lg:w-4/6 w-5/6 lg:ml-auto ml-[10%] text-kaki lg:mt-auto mt-12">
              <h2 className="italic lg:text-3r text-2/5r">Psst...</h2>
              <p className="lg:text-3r lg:my-4 my-2  text-2/5r lg:w-auto w-56">are you a designer?</p>
              <p className="font-palanquina lg:text-1/4r text-1r lg:w-5/6">Consider joining our <span className="text-rose">San Diego Design Designers</span> group. More than 700 people, we meet
                online via Slack and in person at social events around the city. It’s a great opportunity
                to share ideas, get inspired, find support, and celebrate great design.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <a className="" href="#">
          <h1 className="bg-deeporange text-3r text-white text-center lg:pt-12 pt-4 leading-[3rem] h-32">🙋 How can we help?</h1>
        </a>
      </section>
    </section>
  )
}
