import Styled from 'styled-components';
import { colDisplay, rowDisplay } from '../pricing/StyledPricing';

const Styledfundraise = Styled.section `
    @media (max-width: 850px) {
        #fundraising {
            ${colDisplay};
            gap: 60px;
            .left-content {
                gap: 20px;
                .service-content {
                    margin-bottom: 40px;
                }
            }
            .right-content {
                img {
                    @media (max-width: 850px) and (min-width: 700px) {
                        width: 600px;
                        height: 500px;
                    }               
                }
            }
        }
    }
    @media (max-width: 1050px) and (min-width: 850px) {
        #fundraising {
            padding: 0;
            margin: 0;
            margin-top: 50px;
            margin-bottom: 130px;
        }        
       .left-content {
        padding-left: 25px;
            .bold-title {
                font-size: 35px;
                width: 400px;
            }
            .service-content {
                margin-bottom: 40px;
            }
       }
       .right-content {
        padding-right: 25px;
        img {
            width: 400px;
        }
       }
    }
`
export default Styledfundraise