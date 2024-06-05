import logo from '../../assets/logo.svg';
import { useState } from 'react';
interface Props {
  onSetShowMenu: (value: boolean) => void;
  onSetOpenMenu: (value: boolean) => void;
}
function Header({ onSetOpenMenu, onSetShowMenu }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleRotation = () => {
    setOpenMenu(!openMenu);
    onSetOpenMenu(!openMenu);
    if (showMenu) {
      setTimeout(() => {
        setShowMenu(!openMenu);
        onSetShowMenu(!openMenu);
      }, 500);
    } else {
      setShowMenu(!openMenu);
      onSetShowMenu(!openMenu);
    }
  };
  return (
    <>
      <div className="header flex justify-between items-center h-[15vh] px-6">
        <img src={logo} width={50} alt="" />
        <a
          href=""
          className="font-extrabold font-sans lg:text-7xl md:text-5xl text-2xl md:tracking-[1rem] lg:tracking-[2rem]"
        >
          Peach House
        </a>
        <div className="cursor-pointer relative" onClick={handleRotation}>
          <span
            className={`h-1 absolute -top-2 right-1 lg:right-6 w-10 bg-black transition-opacity duration-500 ${openMenu ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`h-1 absolute right-1 lg:right-6 w-10 bg-black transition-transform  duration-300 ${openMenu ? 'rotate-45' : ''}`}
          ></span>
          <span
            className={`h-1 absolute right-1 lg:right-6 w-10 bg-black transition-transform  duration-300 ${openMenu ? '-rotate-45' : ''}`}
          ></span>
          <span
            className={`h-1 absolute right-1 top-2 lg:right-6 w-10 bg-black transition-opacity duration-500 ${openMenu ? 'opacity-0' : ''}`}
          ></span>
        </div>
      </div>
    </>
  );
}

export default Header;
