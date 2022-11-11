import Button from "./button";

function Design() {
  return (
    <section className="design -mt-12 pt-12 lg:flex text-lightblue lg:pt-40">
        <div className="design__wrapper lg:pl-32 pl-6">
          <p className="text-2xl font-normal font-bold mt-12">🌴🐻US</p>
          <h2 className=" text-4r pt-20">Get Cozy</h2>
          <p className="design__title font-palanquini text-orange lg:w-35r- lg:pr-12 leading-3r mt-8 font-medium text-4xl">Design & digital marketing in San Diego, California</p>
          <p className="design__paragraph font-palanquini xl:w-40r lg:w-30r text-25s font-petit mt-12">We’re an award-winning design shop based in South Park, San Diego. We efficiently 
          combine the best parts of user experience (UX) with creative 
          design and execution to create effective collateral that connects with the human beings who interact with them. 🤯</p>
          <p className="design__paragraph font-palanquini xl:w-40r lg:w-30r text-25s font-petit mt-12">No epic quests for inspiration. Just pragmatic collaboration
           and efficient results from big-agency graduates with decades of experience.</p>
          
          <div className=" font-geomanist text-xl">
            <Button style={"design__button bg-deeporange lg:block hidden text-18s py-8 p-4  font-extrabold text-kaki rounded-xl px-12 mt-12"} children={"WHY WE DO WHAT WE DO"}/>
            <Button style={"design__mobile-button lg:hidden text-kaki px-12 leading-6 py-4 mt-12 rounded-xl"} children={"WHY WE DO WHAT WE DO"}/>
          </div>
        </div>
        <div className="flex justify-center xl:ml-12 lg:mr-8">
        <div className="design__partner flex tablet:flex-row justify-between tablet:w-23r  flex-col xl:gap-8 lg:mt-0 mt-20">
          <div className=" flex justify-center lg:align-center">
            <div className="h-fit w-fit  align-center mx-0 my-auto flex flex-col gap-6">
              <div>
                <img className="w-40 xl:w-8r" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021-p-500.webp" alt="clutch" />
              </div>
              <div>
                <img className="w-40 xl:w-8r" src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg" alt="clutch" />
              </div>
              <div>
                <img className="w-40 xl:w-8r" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6036c8b7748af86c183f3830_SuperbCompanies%20Leader%20Award%202021%20Digital%20Marketing.webp" alt="clutch" />
              </div>
              <div>
                <img className="w-40 xl:w-8r" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618ad12798295b3339e8074b_Best-Web-Design-Companies-Badge-2-300x300.webp" alt="clutch" />
              </div>
            </div>
          </div>

          <div className="design__left-partners flex justify-center lg:mt-0 mt-8 gap-6">
           <div className="flex flex-col gap-6 lg:gap-12 lg:mt-12 w-fit">
            <div>
                <img className="design__image xl:w-8r w-40" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg" alt="clutch" />
              </div>
              <div>
                <img className="design__image xl:w-8r w-40" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6298fa400120341cd677f5d7_Web-Design-Services-San-Diego-California.webp" alt="clutch" />
              </div>
              <div className="flex justify-center">
                <img className="design__image xl:w-8r w-40" src="https://agencyvista.com/verified-agency-vista-badge.png" alt="clutch" />
              </div>
              <div>
                <img className="design__images xl:w-8r w-40" src="https://upcity-marketplace.s3.amazonaws.com/badge/159/basic_full_color/2e05d2b13e9e2c5f0dc9bb7292a80844.png" alt="clutch" />
              </div>
              <div>
                <img className="design__image xl:w-8r w-40" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6050fa6b0a1f01353a1cbbcc_50.00-Design-Rush-Accredited-Badge.webp" alt="clutch" />
            </div>
           </div>
          </div>
          
        </div>
        </div>
      </section>
  )
}

export default Design;