import { createGlobalStyle } from 'styled-components';

import GothamBlack from './Gotham-Black.otf';
import GothamBold from './Gotham-Bold.otf';
import GothamLight from './Gotham-Light.otf';
import GothamThin from './Gotham-Thin.otf';
import GothamBook from './Gotham-Book.ttf';
import GothamMedium from './Gotham-Medium.ttf';

export default createGlobalStyle`
  @font-face {
      font-family: 'Font Name';
      src: local('Gotham'),
      url(${GothamThin}) format('otf');
      font-weight: 200;
      font-style: normal;
  }
  @font-face {
      font-family: 'Font Name';
      src: local('Gotham'),
      url(${GothamLight}) format('otf');
      font-weight: 300;
      font-style: normal;
  }
  @font-face {
      font-family: 'Font Name';
      src: local('Gotham'),
      url(${GothamBook}) format('ttf');
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: 'Font Name';
      src: local('Gotham'),
      url(${GothamMedium}) format('otf');
      font-weight: 500;
      font-style: normal;
  }
  @font-face {
      font-family: 'Font Name';
      src: local('Gotham'),
      url(${GothamBold}) format('otf');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: 'Font Name';
      src: local('Gotham'),
      url(${GothamBlack}) format('otf');
      font-weight: 900;
      font-style: normal;
  }
`;
