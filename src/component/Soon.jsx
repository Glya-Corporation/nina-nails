import wsicon from '../assets/wsicon.png';

const Soon = () => {
  const openUrl = () => window.open('https://wa.me/message/654FJEPM5II2J1?src=qr');

  return (
    <main className='soon'>
      <h2>
        <p>Sitio Web</p>
        ¡próximamente disponible!
      </h2>
      <img className='wsicon' src={wsicon} alt='' onClick={() => openUrl()} />
    </main>
  );
};

export default Soon;
