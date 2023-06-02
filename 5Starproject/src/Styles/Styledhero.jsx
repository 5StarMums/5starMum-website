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
            padding-left: 15px;
            h1 {
                width: 94vw;
                font-size: 30px;
            }
            .sub-topic {
                width: 90vw;
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
                width: 100vw;
            }
        }
    }
    }
`
export default StyledHero