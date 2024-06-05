import './App.scss';
import { useState } from 'react';
import ImageSlider from './components/image-slider';
import Footer from './components/footer';
import Header from './components/Header';
import Menu from './components/menu';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const IMAGES = [
    'https://www.peachhouse.co/wp-content/uploads/2021/10/Daisy-600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/09/aa72ac07-4f93-44a5-8cf9-6e72ea17a54e-600x800.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/10/new6-600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2021/10/Tan-Chat--600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/03/Sam-homepage--600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/02/IM-600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/09/attachment-600x855.png',
    'https://www.peachhouse.co/wp-content/uploads/2023/04/Laurie-600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/09/MV5BMDNhMzIyY2ItYWI0Zi00Y2EyLTk1MTEtMzNhMjVkNzk3YWU5XkEyXkFqcGdeQXVyMTEwMTIzNzk1._V1_FMjpg_UX1000_-600x889.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2021/04/Instagram_Squares16.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Homepage_Assets_2000px19-2-600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Homepage_Assets_2000px16-scaled-600x797.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Homepage_Assets_2000px10-scaled-600x938.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Homepage_Assets_2000px14-scaled-600x797.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2021/04/Instagram_Squares8.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Homepage_Assets_2000px15-scaled-600x797.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/09/MV5BZDk4Nzg5ZjQtZDNlMC00ZjIwLWE2NmItNjJhMmIzYTk0ZmNlXkEyXkFqcGdeQXVyOTEwNTkyNjE@._V1_-600x850.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/09/V1_PPposter_fringe_underwire_flare-600x337.png',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Management_2000px49-600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2022/03/Sam-homepage--600x600.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2021/04/Instagram_Squares28.jpg',
    'https://www.peachhouse.co/wp-content/uploads/2020/01/Homepage_Assets_2000px2-600x762.jpg',
  ];

  return (
    <>
      <Header onSetShowMenu={setShowMenu} onSetOpenMenu={setOpenMenu} />
      {showMenu && <Menu openMenu={openMenu} />}
      <div className="h-[70vh] overflow-hidden">
        <ImageSlider IMAGES={IMAGES} />
      </div>
      <Footer />
    </>
  );
}

export default App;
