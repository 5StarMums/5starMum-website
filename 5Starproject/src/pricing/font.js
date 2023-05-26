import { createGlobalStyle } from "styled-components";
import BromnyBold from './BromnyBold.ttf';

const GlobalFont = createGlobalStyle `
    @font-face {
        font-family: 'BromnyBold';
        src: local('Font Name'), local('FontName'),
        url(${BromnyBold}) format('ttf');
    }
`
export default GlobalFont