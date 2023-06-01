import Styled, { createGlobalStyle } from 'styled-components';
import GlobalFont from './font';


export const rowDisplay = `
    display: flex;
    flex-direction: row;
`

export const colDisplay = `
    display: flex;
    flex-direction: column;
`

const fontColor = '#1E1E1E'
const fontFamily = 'Light';
const fontPryColor = '#FFFFFF'
const fontWeight = 400
const centerValue = 'center';

const StyledPricing = Styled.section `
    .pricing-section {
        margin-top: 126px;
        ${colDisplay};
        align-items: center;
        justify-content: center;
        gap: 49px;
        padding-bottom: 120px;
        .price-text {
            ${colDisplay};
            align-items: center;
            justify-content: center;
            h1 {
                font: ${fontWeight} ${fontColor};
                font-size: 36px;
                text-align: center;
                margin-bottom: 5px;
            }
            p {
                text-align: center;
            }
        }
        .price-div-parent {
            ${rowDisplay};
            align-items: center;
            justify-content: center;
            gap: 40px;
            @media(max-width: 850px) and (min-width: 320px) {
                ${colDisplay};
            }
            .price-div-1 {
                width: 387px;
                height: 560px;
                border-radius: 24px;
                background-color: #EBEBEB;
                ${colDisplay};
                align-items: center;
               justify-content: space-around;
               @media(max-width: 850px) and (min-width: 320px) {
                    width: 90vw;
                }
                div {
                    gap: 10px;
                    .plans {
                        ${colDisplay};
                        align-items: center;
                        h4 {
                            font-size: 36px;
                            font-wieght: 400;
                            color: #1E1E1E; 
                            margin-bottom: -10px;      
                            ${({ theme }) => GlobalFont};
                            font-family: 'BromnyBold', sans-serif;        
                        }
                        p {
                            font-size: 18px;
                            font-wieght: 400;
                            font-family: ${fontFamily};
                            color: #374151; 
                        }
                    }
                    .plans2 {
                        margin-top: 20px;
                        ${colDisplay};
                        gap: 0px;
                        p {
                            font-size: 18px;
                            font-wieght: 400;
                            font-family: ${fontFamily};
                            color: #374151; 
                            margin-bottom: 5px;
                            ${rowDisplay};
                            align-items: center;
                            gap: 10px;
                        }
                        .icon {
                                display: none;
                        }
                    }
                }
                button {
                    background-color: #F6B993;
                    width: 323px;
                    height: 60px;
                    border-radius: 12px;
                    border: none;
                    font-size: 16px;
                    font-weight: 400;
                    color: ${fontPryColor};
                    @media(max-width: 850px) and (min-width: 320px) {
                        width: 280px;
                     }
                }
            }
            .price-div-2 {
                background-color: #437C90;
                width: 387px;
                height: 560px;
                border-radius: 24px;
                ${colDisplay};
                align-items: center;
               justify-content: space-around;
               @media(max-width: 850px) and (min-width: 320px) {
                    width: 90vw;
                }
                div {
                    gap: 10px;
                    .plans {
                        ${colDisplay};
                        align-items: center;
                        h4 {
                            font-size: 36px;
                            font-wieght: 400;
                            color: ${fontPryColor}; 
                            margin-bottom: -10px;      
                            ${({ theme }) => GlobalFont};
                            font-family: 'BromnyBold', sans-serif;        
                        }
                        p {
                            font-size: 18px;
                            font-wieght: 400;
                            font-family: ${fontFamily};
                            color: ${fontPryColor}; 
                        }
                    }
                    .plans2 {
                        margin-top: 20px;
                        ${colDisplay};
                        gap: 0px;
                        p {
                            font-size: 18px;
                            font-wieght: 400;
                            font-family: ${fontFamily};
                            color: ${fontPryColor}; 
                            margin-bottom: 5px;
                            ${rowDisplay};
                            align-items: center;
                            gap: 10px;
                        }
                    }
                }
                button {
                    background-color: #EF7528;
                    width: 323px;
                    height: 60px;
                    border-radius: 12px;
                    border: none;
                    font-size: 16px;
                    font-weight: 400;
                    color: ${fontPryColor};
                    @media(max-width: 850px) and (min-width: 320px) {
                    width: 280px;
                }
                }
            }
        }
    }
`
export default StyledPricing