import '../../css/style.css';
import {Main} from '../../logic/MainLogic';
import { Button } from '../../utils/buttons/Button';


export const SinglePlayer = () => {
  return (
   <>
       <Button/>
    <div className="page-wrapper">
        <Main />
    </div>
   </>
  );
};