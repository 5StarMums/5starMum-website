import Styled from 'styled-components';
import { colDisplay, rowDisplay } from '../pricing/StyledPricing';

const Styledmission = Styled.div`
    @media (max-width: 850px) {
        .about3 {
            ${colDisplay};
            justify-content: center;
            .mission-component {
            align-self: center;
            .mission {
                width: 94vw;
                @media (max-width: 850px) and (min-width: 600px) {
                    width: 550px;
                    height: 400px;
                }
            }     
        }
        }
    }
    @media (max-width: 1050px) and (min-width: 850px) {
        .about3 {
            ${colDisplay};
            justify-content: center;
            .mission-component {
            ${rowDisplay};
            justify-content: center;
                .mission {
                    width: 350px;
                    height: 450px;
                }
            }
        }
    }
`
export default Styledmission