
import { FaShoppingCart } from 'react-icons/fa';
import styled from "styled-components";

export default function Header() {

    return <HeaderContainer>
        <Logo>
            <h1> DrivenArts </h1>
        </Logo>

        <nav className="menu">
            <ul>
                <li><button> Esculturas </button></li>
                <li><button> Ilustrações </button></li>
                <li><button> Quadros </button></li>
            </ul>
        </nav>

        <div className="cart-icon">
            <FaShoppingCart size={25} />
        </div>

        <div className="signup-signin">

            <button> Entrar </button>
            <button> Cadastrar </button>

        </div>
    </HeaderContainer>
}

const HeaderContainer = styled.header`
    background: #ffffff;
    height: 18vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;  
    position: fixed;
    top: 0;

    & > nav > ul {
        display: flex;
        justify-content: space-between;
        width: 30vw;
        padding-top: 10px;
    }

    & > nav > ul > li > button {
        background: none;
        border: none;
        font-weight: 400;
        font-size: 17px;
        color: black;
        font-family: 'Roboto', sans-serif;
    }

    & > nav > ul > li > button:hover {
        text-decoration: none;
        color: #ad668e;
        font-weight: bold;
        font-size: 20px;
    }

    & > div {
        display: flex;
    }

    & > div > button {
        background: none;
        border: none;
        color: black;
    }

    & > .cart-icon {
        cursor: pointer;
    }

    & > .cart-icon:hover {
        color:  #ad668e;
    }

    & > .signup-signin {
        padding-right: 20px;
    }

    & > .signup-signin > button{
        font-weight: 300;
        font-size: 17px;
        color: black;
        font-family: 'Roboto', sans-serif;
    }
    
`

const Logo = styled.div`

    padding-left: 20px;

    & > h1 {
        font-family: 'Pacifico', cursive;
        font-weight: 500;
        font-size: 40px;
        color: #000000;
    }
    
`