import '../../css/style.css';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';

export const NotFoundView = () => {
  return (
    <>
      <RedirectBtn to="/">Strona Główna</RedirectBtn>
      <h1>Strona nie istnieje</h1>
    </>
  );
};