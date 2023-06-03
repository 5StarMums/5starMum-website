import Styled from 'styled-components';
import { colDisplay, rowDisplay } from '../pricing/StyledPricing';

const StyledHero = Styled.section `
    @media (max-width: 850px) {
        #hero {
        ${colDisplay};
        justify-content: center;
        margin-top: 50px;
        .left-content {
            ${colDisplay};
            p {
                font-weight: 700;
            }
            h1 {
                width: 90vw;
                font-size: 30px;
                margin-top: 8px;
                margin-bottom: 10px;
            }
            .sub-topic {
                text-align: left;
                width: 90vw;
                font-size: 14px;
                font-weight: 400;
            }
            .form {
                margin-top: 30px;
                justify-content: center;
                align-self: center;
                margin-bottom: 35px;
            }
        }
        .right-content {
            img {
                width: 290px;
                height: 456px;
                @media (max-width: 850px) and (min-width: 600px) {
                    width: 500px;
                }
            }
        }
    }
    }
    @media screen and (max-width: 1050px) and (min-width: 851px) {
    #hero {
        padding: 0;
        margin: 0;
        ${rowDisplay};
        justify-content: space-around;
        margin-top: 120px;
        .left-content {
            ${colDisplay};
            // padding-left: 15px;
            h1 {
                width: 300px;
                font-size: 25px;
            }
            .sub-topic {
                text-align: left;
                width: 350px;
                font-size: 16px;
            }
            .form {
                margin-top: 30px;
                justify-content: center;
                align-self: flex-start;
                margin-bottom: 35px;
                
            }
        }
        .right-content {
            img {
                width: 290px;
                height: 456px;
            }
        }
    }
}
`
export default StyledHero