import Styled from 'styled-components';
import { colDisplay, rowDisplay } from '../pricing/StyledPricing';

const StyledService = Styled.section`
    @media (max-width: 850px) {
        .side-contents {
            ${colDisplay};
            align-items: center;
            margin-top: -150px;
            .bold-title {
                font-size: 20px;
                @media (max-width: 850px) and (min-width: 700px) {
                    font-size: 25px;
                }
            }
        .service-content {
            width: 95vw;
            align-self: center;
        }
        form {
            ${colDisplay};
            .input {
                width: 93vw;
                @media (max-width: 850px) and (min-width: 700px) {
                    width: 80vw;
                }
            }
        }
        a {
            text-decoration: none;
        }
        .btn-secondary {
            width: 50vw;
        }
        }
    }
    @media (max-width: 1050px) and (min-width: 850px) {
        .var {
            font-size: 25px;
        }
    }    
`
export default StyledService