function Footer() {
  return(
    <section className="bg-kaki flex  justify-center">
        <section className="w-11/12">
          <section className="flex lg:flex-row md:flex-row flex-col justify-between border-b-2 border-orange mb-2 lg:py-12 pb-4 pt-12">
            <div className="flex lg:flex-row md:flex-row flex-col xl:gap-20">
              <div className="flex justify-center">
                <img className="w-20" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8782865afd27755f3cb5bd_Cozy_logo_denim.svg" alt="logo" />
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col font-palanquini text-[0.7rem] mt-2 text-deeporange">
                <div className="flex justify-center text-center">
                  <a className="w-20" href="#">About</a>
                </div>
                <div className="flex md:-ml-4 lg:ml-auto justify-center text-center">
                  <a className="w-20" href="#">Services</a>
                </div>
                <div className="flex md:-ml-4 lg:ml-auto justify-center text-center">
                  <a className="w-20" href="#">Work</a>
                </div>
                <div className="flex md:-ml-4 lg:ml-auto justify-center text-center">
                  <a className="w-20" href="#">Blog</a>
                </div>
                <div className="flex md:-ml-4 lg:ml-auto justify-center text-center">
                  <a className="w-20" href="#">Contact</a>  
                </div>
              </div>
            </div>
            <div className="flex lg:gap-12 mt-3 lg:flex-row flex-col lg:mt-3 md:-mt-1">
              <div className="flex justify-center">
                <a href="#" className="flex gap-2 mt-1">
                  <div>
                    <img className="w-4" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f862ba8b2efe0fc2b486af2_emoji%402x.webp" alt="logo" />
                  </div>
                  <p className="text-rose font-palanquini text-xs">San Diego Digital Designers</p>
                </a>
              </div>
              <div className="flex justify-center xl:mt-0 lg:-mt-1 md:mt-4">
                <a href="#">
                  <img className="lg:w-40 w-56" src="/icons/icons.jpg" alt="sites" />
                </a>
              </div>
            </div>
          </section>

          <section className="flex lg:flex-row flex-col justify-between md:flex-row py-8">
            <div className="flex lg:flex-row flex-col gap-12">
              <div className="md:flex md:gap-8 md:ml-8   lg:ml-auto ml-32">
                <p className="font-geomanist text-sm align-center mx-0 my-auto md:mb-auto mb-12">BBB rating: A+</p>
                <div className="align-center mx-0 my-auto">
                  <img className="w-32" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/634dd43d0cf9ec7420324d59_bod-new_shield-logo-member-p-500.png" alt="bureau" />
                </div>
              </div>
              <div className="align-center mx-0 my-auto lg:ml-auto ml-12 lg:mb-auto md:ml-2 mb-12">
                <img className="w-13r" src="/icons/icon2.jpg" alt="clutch" />
              </div>
            </div>
            <div className="font-geomanist lg:flex-row  flex-col text-xs flex gap-4 font-petit align-center mx-0 my-auto">
              <div className="flex justify-center">
                <div className="flex  gap-4 lg:mr-auto lg:mb-auto md:mb-8 md:mr-8">
                  <div className="">
                    <p>Made with</p>
                  </div>
                  <p>in beautiful, sunny San Diego. ©2021</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="flex  gap-4">
                  <p className="text-deeporange">Privacy</p>
                  <p className="text-deeporange">Photo credit</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
  )
}

export default Footer;
