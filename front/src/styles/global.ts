// styles/globalStyles.js
import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;

    }
    html, body {
        height: 100%;
    }

    .center {
        display: -webkit-flexbox;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        height: 80vh;
    }
    .container {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

    }
    .child{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        border-bottom: 1px solid gray;
        margin-bottom: 1rem;
    }
    .date{
        margin-left: 1rem;
        color: ${(props) => props.theme.color}

    }
    .dezenas-container{
        display: flex;
        flex-direction: row;
        
    }
    .dezenas{
        margin: 0.5rem;
        display: block;
        height: 3.75rem;
        width: 3.75rem;
        line-height: 3.75rem;

        -moz-border-radius: 50%; /* or 50% */
        border-radius: 50%; /* or 50% */

        background-color: ${(props) => props.theme.accent};
        color: white;
        text-align: center;
        font-size: 2em;
    }
    .resultado{
        color: ${(props) => props.theme.accent};
        font-size: 3rem;
        margin-right: 3rem;
    }
    .premio{
        font-size: 3rem;

    }
    p {
        color: ${(props) => props.theme.color}
    }
    h2 {
        color: ${(props) => props.theme.color};
        font-size: 1rem;
    }
    body {
        background: ${(props) => props.theme.background};
    }

    h1 {
        color: ${(props) => props.theme.color}
    }

    .accent {
        height: 30px;

    }
`