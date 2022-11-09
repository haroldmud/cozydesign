function Header() {
  return(
    <header className="absolute z-20 w-full bg-blue flex justify-center py-6 pb-4 top-0 font-palanquina text-2xl">
      <div className="flex lg:justify-between w-fit gap-8 lg:w-11/12">
          <div>
            <img className="w-10d" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f86150178cfb414cd74bce4_Cozy_logo_canvas.svg"/>
          </div>
          <nav className="hidden text-2xl text-kaki mt-4 lg:flex gap-12">
            <a href="#">Get Cozy</a>
            <a href="#">What we do</a>
            <a href="#">Our  work</a>
            <a href="#">The blog</a>
            <a href="#">Say hi</a>
          </nav>
          <div className="lg:hidden">
            <img className="block lg:hidden w-8 mt-4" src="/icons/menu.jpg"/>
          </div>
      </div>
    </header>
  )
}

export default Header;
