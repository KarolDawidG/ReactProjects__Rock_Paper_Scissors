import './components/css/style.css';
import { Routes, Route} from 'react-router-dom';
import {Header} from './components/views/page-views/Header';
import { Footer } from './components/views/page-views/Footer';
import { SinglePlayer } from './components/views/menu-views/SinglePlayer';
import { NotFoundView } from './components/views/menu-views/NotFoundView';
import { MultiPlayer } from './components/views/menu-views/MultiPlayer';
import { DrugiPlayer } from './components/logic/MultiLogic/DrugiPlayer';

import { Menu } from './components/views/page-views/Menu';

export const App = () => {
  return (
    <>  
        <Header/>
        <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/single" element={<SinglePlayer/>} />
            <Route path="/multi" element={<MultiPlayer/>} />
            <Route path="/player1/:graczOne" element={<DrugiPlayer/>} />
            <Route path="*" element={<NotFoundView/>} />
        </Routes>
        <Footer/>
    </>
  );
}