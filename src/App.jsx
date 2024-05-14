import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Soon from './component/Soon'
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
    <Soon />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
