import Styled from 'styled-components';
import { colDisplay, rowDisplay } from '../pricing/StyledPricing';

const Styledcontact = Styled.section `
    @media (max-width: 1050px) and (min-width: 850px) {
        #subscribe {
            padding: 0;
            margin: 0;
        }
        .envelope {
            .envelope-img {
                width: 400px;
                img {
                    width: 250px;
                }
            }
            .form-content {
                width: 400px;
                .input {
                    width: 300px;
                }
                .btn-primary {
                    width: 300px;
                }
            }
        }
    }
`
export default Styledcontact