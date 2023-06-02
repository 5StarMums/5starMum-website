import Styled from 'styled-components';
import { colDisplay, rowDisplay } from '../pricing/StyledPricing';

const Styledfooter = Styled.section `
    #footer {
        #footer-content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            padding: 0;
            margin: 0;
            .logo {
                order: 1;
                padding-left: 0.8rem;
            }
            .join {
                order: 2;
                padding-left: 10px;
                ${colDisplay};
                gap: 10px;
                padding-left: 1.5rem;
                margin-bottom: 20px;
                p {
                    margin-bottom: 20px;
                }
            }
            .footer-links {
                ${colDisplay};
                padding: 0;
                margin: 0;
                order: 3;
                width: 100vw;
                row-gap: 2rem;
                .link1 {
                   display: grid;
                   grid-template-columns: auto auto;
                   justify-content: space-between;
                   padding: 0;
                   margin: 0;
                   padding-right: 40px;
                    ul {
                        align-items: flex-start;
                    }
                }
            }
            .copyright {
                order: 4;
            }
        }
    }
`
export default Styledfooter