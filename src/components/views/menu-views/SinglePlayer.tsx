import '../../css/style.css';
import {MainLogic} from '../../logic/SingleLogic/MainLogic';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';

export const SinglePlayer = () => {
  return (
   <>
        <RedirectBtn to="/">Strona Główna</RedirectBtn>
        <div className="page-wrapper">
        <MainLogic />
    </div>
   </>
  );
};