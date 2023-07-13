import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        border: dashed 1px white;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.2);
        //background: linear-gradient(to right, #8b9a7c, #232e17);
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
        width: 80%;
        padding: 12px;
        margin-bottom: 10px;
    }
    button:hover{
        font-size: 21px;
        text-decoration: underline;
    }

    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    input {
        font-size: 20px;
        width: calc(100% - 100px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        text-decoration: none;
        padding-top: 30px;
    }
    a:hover{
        text-decoration: underline;
    }
`

export default GlobalStyle