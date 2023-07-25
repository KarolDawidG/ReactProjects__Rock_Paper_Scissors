import '../../css/style.css';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';

export const NotFoundView = () => {
  return (
    <>
      <RedirectBtn to="/">Home</RedirectBtn>
      <h1>Page does not exist</h1>
    </>
  );
};

       