import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Soon from './component/Soon'
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Soon />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
