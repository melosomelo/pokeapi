import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* reset css */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Oxygen";
    }

    html {
        font-size: 62.5%;
    }



    /* actual styles */
    body {
        font-family: "Oxygen";
    }

    body.no-scroll{
        height: 100vh;
        overflow: hidden;
    }

    h1{
        font-size: 3rem;
        font-weight: normal;
    }
    h2{
        font-size: 2.5rem;
        font-weight: normal;
    }
    h3 {
        font-size: 2.3rem;
    }
    h4{
        font-size: 2.2rem;
    }

    p{
        font-size: 2rem;
    }
    a, 
    a:visited,
    a:focus {
        color: #ff3838;
    }

    label {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    input {
        width: 100%;

        border: none;

        font-size: 1.8rem;

        padding: 1.5rem 2rem;

        border-radius: 10px;
        border: 2px solid #b7b7b7;

        &:focus {
            border: 2px solid #ff3838;
        }

    }


`;

export default GlobalStyle;
