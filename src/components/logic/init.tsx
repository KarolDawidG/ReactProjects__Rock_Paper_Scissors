import { render } from './render';

export const init = (punkty = 0, punktyPC = 0) => {
  render('index', { punkty, punktyPC });
};
