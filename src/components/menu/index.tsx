interface Props {
  openMenu: boolean;
}
function Menu({ openMenu }: Props) {
  return (
    <>
      <div className="relative">
        <div
          className={`h-[85vh] overflow-hidden -top-1  absolute bg-white w-full  z-10 animate-fadeIn ${!openMenu ? 'animate-fadeOut' : ''} `}
        >
          <div className="flex justify-center text-center">
            <ul className="pt-16">
              <li className="font-poppins uppercase font-semibold text-xl tracking-[0.75rem] mb-8 cursor-pointer">
                Management
              </li>
              <li className="font-poppins uppercase font-semibold text-xl tracking-[0.75rem] mb-8 cursor-pointer">
                Production
              </li>
              <li className="font-poppins uppercase font-semibold text-xl tracking-[0.75rem] mb-8 cursor-pointer">
                Press
              </li>
              <li className="font-poppins uppercase text-xl font-semibold tracking-[0.75rem] mb-8 cursor-pointer">
                About
              </li>
              <li className="font-poppins uppercase text-xl font-semibold tracking-[0.75rem] mb-8 cursor-pointer">
                Contact
              </li>
              <li className="font-poppins uppercase text-xl font-semibold tracking-[0.75rem] mb-8 cursor-pointer">
                IMDB
              </li>
              <li className="font-poppins uppercase text-xl font-semibold tracking-[0.75rem] mb-8 cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>

          <div className="absolute bottom-0 flex-col xl:flex-row py-4 w-full flex items-center text-center justify-center gap-x-5 font-poppins text-xs font-medium tracking-[0.3em]">
            <span className="">© PEACH HOUSE LTD 2024</span>
            <span className="uppercase">Terms and Conditions</span>
            <span className="uppercase">Privacy Policy</span>
            <span className="uppercase">Design and Brand: Yalmaz Chaudhry</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
