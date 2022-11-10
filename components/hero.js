import Button from "./button";

function Hero() {
  return(
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
  )
}

export default Hero;
