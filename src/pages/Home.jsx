import { useState } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';

const Home = () => {
  const [colorSelected, setColorSelected] = useState('');

  const listColors = [
    { id: 1, color: '#00ff00' },
    { id: 2, color: '#ff0000' },
    { id: 3, color: '#0000ff' },
    { id: 4, color: '#ffffff' },
    { id: 5, color: '#000000' },
    { id: 6, color: '#008800' }
  ];

  const listNails = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 }
  ];

  return (
    <main>
      <article className='body-home'>
        <section className='info-section'>
          <img src='' alt='photo' />
          <h3>Nina Nails</h3>
        </section>
        <section className='list-links'>
          <div>
            <img src='https://cdn.icon-icons.com/icons2/1709/PNG/512/link_112472.png' alt='' />
            <a href=''>Facebook</a>
          </div>
          <div>
            <img src='https://cdn.icon-icons.com/icons2/1709/PNG/512/link_112472.png' alt='' />
            <a href=''>Instagram</a>
          </div>
          <div>
            <img src='https://cdn.icon-icons.com/icons2/1709/PNG/512/link_112472.png' alt='' />
            <a href=''>WhatsApp</a>
          </div>
        </section>
        <section className='color-section'>
          <ul className='list-colors' style={{ borderBottom: `1px solid ${colorSelected}`, boxShadow: `0 10px 10px${colorSelected}50` }}>
            {listColors.map(item => (
              <li key={item.id} style={{ backgroundColor: item.color }} className='item-color' onClick={() => setColorSelected(item.color)}><span style={{backgroundColor: `${item.color}`}}></span></li>
            ))}
          </ul>
        </section>
        <section className='nails-section'>
          <ul className='list-nails'>
            {listNails.map(item => (
              <li key={item.id} className='item-nail'>
                <img src={item.img} alt="img" />
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Home;
