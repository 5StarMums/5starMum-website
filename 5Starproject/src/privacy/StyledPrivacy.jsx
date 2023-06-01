import Styled from 'styled-components';
import { rowDisplay, colDisplay } from '../pricing/StyledPricing';

const fontColor = '#1E1E1E'
const fontFamily = 'Light';
const fontPryColor = '#FFFFFF'
const fontWeight = 400

const Styledprivacy = Styled.section `
    .privacy-section {
        margin-top: 150px;
        ${colDisplay};
        justify-content: center;
        h1 {
            text-align: center;
            @media (max-width: 850px) {
                font-size: 14px;
            }
        }
        .each-policy {
            ${colDisplay};
            align-self: center;
            max-width: 100%;
            margin-top: 30px;
            p {
                font-size: 20px;
                color: ${fontColor};
                @media (max-width: 850px) {
                    font-size: 14px;
                }
            }
            .tex {
                @media (max-width: 850px) {
                    padding-left: 20px;
                }
            }
            ul {
                @media (max-width: 850px) {
                    font-size: 12px;
                    align-self: center;
                    width: 80vw; 
                }
            }
            .text-detail {
                width: 70vw;
                margin-top: 5px;
                @media (max-width: 850px) {
                    width: 80vw; 
                    align-self: center;                 
                }
            }
        }
    }
`
export default Styledprivacy