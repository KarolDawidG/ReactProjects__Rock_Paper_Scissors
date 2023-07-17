import '../../css/style.css';
import {MainLogic} from '../../logic/SingleLogic/MainLogic';
import { MainPageButton } from '../../utils/buttons/MainPageButton';


export const SinglePlayer = () => {
  return (
   <>
       <MainPageButton/>
        <div className="page-wrapper">
        <MainLogic />
    </div>
   </>
  );
};