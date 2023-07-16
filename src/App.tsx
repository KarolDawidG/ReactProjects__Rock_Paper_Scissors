import './style.css';
import { Routes, Route} from 'react-router-dom';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { SinglePlayer } from './components/views/menu-views/SinglePlayer';
import { NotFoundView } from './components/views/menu-views/NotFoundView';
import { MultiPlayer } from './components/views/menu-views/MultiPlayer';
import { Menu } from './components/views/menu-views/Menu';

export const App = () => {
  return (
    <>  
        <Header/>
        <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/single" element={<SinglePlayer/>} />
            <Route path="/multi" element={<MultiPlayer/>} />
            <Route path="*" element={<NotFoundView/>} />
        </Routes>
        <Footer/>
    </>

  );
}