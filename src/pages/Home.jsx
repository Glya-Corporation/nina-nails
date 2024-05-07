import { useState } from 'react';

const Home = () => {
  const [colorSelected, setColorSelected] = useState('');

  const listColors = [
    { id: 1, color: '#00ff00' },
    { id: 2, color: '#ff0000' },
    { id: 3, color: '#0000ff' },
    { id: 4, color: '#ffffff' },
    { id: 4, color: '#000000' },
    { id: 4, color: '#008800' }
  ];

  const listNails = [
    { id: 1, img: '' },
    { id: 2, img: '' },
    { id: 3, img: '' },
    { id: 4, img: '' },
    { id: 4, img: '' }
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
              <li key={item.id} style={{ backgroundColor: item.color }} className='item-color' onClick={() => setColorSelected(item.color)}></li>
            ))}
          </ul>
        </section>
        <section className='nails-section'>
          <ul className='list-nails'>
            {listNails.map(item => (
              <li key={item.id} className='item-nail'>
                {item.id}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Home;
