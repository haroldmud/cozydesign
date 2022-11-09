import Header from "../components/header"
import Button from "../components/button"
import Design from "../components/design"

export default function Home() {
  return (
    <section className="text-3xl font-bold font-Palanquin">
      <Header/>
      <section className="bg-lightblue relative lg:pt-28  lg:pl-6 overflow-hidden">
        <div className="main__wrapper lg:w-1/2 lg:mt-0 mt-32 pl-8">
          <h1 className="main__title text-khaki lg:text-5/5r text-4r pb-2 font-semibold leading-4r w-5/6 lg:leading-6r lg:w-35r"> Your design team for the cost of a salary.</h1>
          <p className="text-gray lg:leading-4r mt-12 w-5/6 lg:w-37r lg:text-2/5r font-palanquini ">Full-service design support that growing B2B and non-profit organizations need.
             Are you strained because you should have a design team but you don't?</p>
          <Button style={"main__button lg:block hidden text-18s p-4  font-extrabold text-kaki rounded-t-xl px-12 pt-4 mt-12"} children={"SEE HOW WE WORK & WHAT WE CAN DO"}/>
          <Button style={"main__mobile-button lg:hidden text-kaki px-12 leading-6 py-4 mt-12 rounded-xl"} children={"SEE HOW WE WORK & WHAT WE CAN DO"}/>
        </div>
        <img className="absolute hidden lg:block lg:w-50r xl:-right-10r lg:-right-20r top-16r " src="/images/image1.png"/>
       <div className="flex justify-center ">
        <img className="block lg:hidden w-5/6 -mb-3/5r mt-12" src="/images/image1.png"/>
       </div>
      </section>
      <Design/>
      <section className="text-lightblue bg-kaki font-palanquini pb-32">
        <div className="flex justify-center">
          <h2 className="lg:text-4r lg:mt-52 mt-32">❤️ from our clients</h2>
        </div>
        <div className="flex justify-center mt-8"><span className="border-b-4 border-khaki text-transparent">isk</span></div>
        <div className="text-[1rem] flex justify-center lg:mt-32 -mt-32">
          <div className="client__blue-green-items flex lg:flex-row flex-col gap-8 lg:w-4/6">
            <div className="client__blue-item  text-end text-kaki ">
              <div className="flex justify-center mb-8">
                <img className="client__blue-image relative w-16 ring-2 color-red ring-white border border-black rounded-3xl" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp" alt="susie" />
              </div>
              <h2 className="text-khaki leading-6 ">“One of the top design professionals…”</h2>
              <p className="leading-8 mt-4">I connect with hundreds of talented folks on a regular basis,
                 and I can say with complete confidence that Lee is one of 
                the best UX designers in Aquent/Vitamin T's global network.</p>
              <h3 className="font-normal text-15s">SUSIE POLLASKY</h3>
              <p className="text-xs text-gray w-5/6 lg:ml-14 ml-10 font-normal">Now: Leadership Recruiting @ Product Design at Facebook</p>
            </div>
            <div className="client__green-item pt-48 mb-8">
              <div className="flex justify-center mb-8">
                <img className="relative w-16 ring-2 color-red ring-white border border-black rounded-3xl" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp" alt="susie" />
              </div>
              <h2 className="text-khaki leading-6">“They’re a very well-rounded organization…”</h2>
              <p className="leading-8 mt-4">Cost per conversion and all of those metrics have dropped significantly.
               We used to pay an average of $100 per lead that converts… now we have that  down to about $20. 
               Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social 
              media referrals have all continued to skyrocket. We’re really pleased.</p>
              <h3 className="font-normal text-15s">MARTIN SPRITZER</h3>
              <p className="text-xs text-gray w-5/6 font-normal">General Manager @ iQuoteXpress</p>
            </div>
          </div>
        </div>
        <div className="text-[1rem] flex justify-center ml-[6rem]">
          <div className="client__khaki-orange-items flex lg:flex-row flex-col gap-8 xl:w-5/6 lg:w-5/6 xl:ml-0 lg:ml-[7.7rem]">
            <div className="client__khaki-item text-end text-kaki pt-20">
              <div className="mb-12">
                <img className="client__blue-image relative w-16 ring-2 color-red ring-white border border-black rounded-3xl" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb7dda4eebc035f1c0beb_1565729526231.webp" alt="susie" />
              </div>
              <h2 className="leading-6 text-[1.2rem]">“They're just good people.”</h2>
              <p className="leading-6 mt-6">They were a pleasure to work with and I'm really happy with the results.
               They pretty much nailed it</p>
              <h3 className="font-normal text-15s">ERIC WEISS</h3>
              <p className="text-xs text-lightkaki font-normal">Founder @ Full Cycle Product Development</p>
            </div>
            <div className="client__orange-item text-kaki pt-20 xl:w-auto">
              <div className="mb-12">
                <img className="client__blue-image relative w-16 ring-2 color-red ring-white border border-black rounded-3xl" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb8a427acfd62e2c3148c_Michael%20Weisfeld-p-500.webp" alt="susie" />
              </div>
              <h2 className="text-[1.2rem]">“The project was successful”</h2>
              <p className="leading-6 mt-6">They strive to come up with good design, and they focus on all the right things. 
              The quality of their work is high,
               and all the deliverables are very well-organized and professional.</p>
              <h3 className="font-normal">MICHAEL WEISFELD</h3>
              <p className="text-xs text-lightkaki font-normal">Director of Digital Marketing @ National Funding</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
