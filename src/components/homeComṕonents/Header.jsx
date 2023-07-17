
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosMenu, IoIosArrowDown, IoMdClose } from 'react-icons/io';
import styled from "styled-components";
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import DataContextProvider from '../../contexts/Usercontext';
import apiAuth from '../../services/apiAuth';



export default function Header({ categoriaSelecionada, setCategoriaSelecionada }) {


    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const {token} = useContext(DataContextProvider);

    function changeMenu() {
        setIsMenuOpen(!isMenuOpen);
    }


    function changeCategory(categoria) {
        setCategoriaSelecionada(categoria)
    }

    function logout(){
        apiAuth.signout(token)
        .then(res=>{
            console.log(res.data);
            navigate('/');
        }
        )
        .catch(err=>{
            alert(err.response.data);
        })
    }

    return <HeaderContainer>
        <Logo onClick={() => navigate("/home")}>
            <h1> DrivenArts </h1>
        </Logo>

        <nav>
            <Menu>
                <li> <Link className="btnMenu" to="products" offset={-(window.innerHeight * 0.12)} smooth={true} duration={500} onClick={() => changeCategory('escultura')}> Esculturas </Link> </li>
                <li> <Link className="btnMenu" to="products" offset={-(window.innerHeight * 0.12)} smooth={true} duration={500} onClick={() => changeCategory('ilustracao')}> Ilustrações </Link> </li>
                <li> <Link className="btnMenu" to="products" offset={-(window.innerHeight * 0.12)} smooth={true} duration={500} onClick={() => changeCategory('quadro')}> Quadros </Link> </li>
            </Menu>
        </nav>

        <UserData>
            <div className="cart-icon">
                <FaShoppingCart size={25} title="Ver carrinho de compras" onClick={() => navigate("/carrinho")} />
            </div>
            <div className="signup-signin" onClick={() => navigate("/")} >
                <button title="Fazer logout"> Sair </button>
            </div>
        </UserData>

        <MobileMenu>

            {isMenuOpen ? < IoIosArrowDown size={40} title="Abrir menu" onClick={changeMenu} /> : < IoIosMenu size={40} title="Abrir menu" onClick={changeMenu} />}

            {isMenuOpen &&
                <Options isOpen={isMenuOpen} >
                    <ul>
                        <li> <Link className="btnMenu" to="products" offset={-(window.innerHeight * 0.12)} smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}> Esculturas </Link> </li>
                        <li> <Link className="btnMenu" to="products" offset={-(window.innerHeight * 0.12)} smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}> Ilustrações </Link> </li>
                        <li> <Link className="btnMenu" to="products" offset={-(window.innerHeight * 0.12)} smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}> Quadros </Link> </li>
                    </ul>

                    <div className='userOptions'>

                        <div className='btnMenu' onClick={() => navigate("/carrinho")}>
                            <FaShoppingCart size={20} title="Ver carrinho de compras"/>
                            <p> Carrinho  </p>
                        </div>

                        <div className='btnMenu' onClick={() => navigate("/")} >
                            <IoMdClose size={20} title="Fazer logout" />
                            <p> Sair  </p>
                        </div>
            
                    </div> 
                </Options>
            }

        </MobileMenu>
    </HeaderContainer>
}

const Logo = styled.div`
    padding-left: 20px;
    cursor: pointer;
    user-select: none;
    
    & > h1 {
        font-family: 'Pacifico', cursive;
        font-weight: 500;
        font-size: 2em;
        color: #000000;
    }
    
`

const HeaderContainer = styled.header`
    background: #ffffff;
    height: 12vh;
    min-height: 90px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;  
    position: fixed;
    border-bottom: 1px solid gray;
    z-index: 1;   
    top: 0; 
`

const Menu = styled.ul`
    
    display: flex;
    justify-content: space-between;
    width: 40vw;

    & .btnMenu {
        color: black;
        font-weight: 300;
        font-size: 1em;
        user-select: none;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }

    & .btnMenu:hover {
        text-decoration: none;
        color: #F6A197;
        font-weight: bold;
        font-size: 1.25em;
    }

    @media (max-width: 650px) {
        display: none;
    }

`

const UserData = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > .cart-icon {
        cursor: pointer;
        padding-right: 15px;
    }

    & > .cart-icon:hover {
        color: #F3A5B2;
    }

    & > .signup-signin {
        padding-top: 10px;
        padding-left: 10px;
    }

    & > .signup-signin > button{
        font-weight: 300;
        font-size: 1em;
        color: black;
        font-family: 'Roboto', sans-serif;
        background: none;
        width: 50px;
        border: none;
    }

    & > .signup-signin > button:hover{
        font-size: 1.25em;
        color: #F2A7BF;
        font-weight: bold;
        text-decoration: none;
    }

    @media (max-width: 650px) {
        display: none;
    }

`

const MobileMenu = styled.div`

    cursor: pointer;
    display: none;

    @media (max-width: 650px) {
        display: inline;
    }

`

const Options = styled.div`
    
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    right: 0;
    top: 100%;
    margin-right: 0;
    padding-right: 0;
    width: 50vw;
    height: 35vh;
    background-color: white;
    color: black;
    border-top: 1px solid gray;

    & .btnMenu {
        color: black;
        font-weight: 300;
        margin-left: 15px;
        font-size: 0.85em;
        line-height: 40px;
        font-family: 'Roboto', sans-serif;
        user-select: none;
        cursor: pointer;
    }

    & .btnMenu:hover {
        text-decoration: none;
        color: #F6A197;
        font-weight: bold;
        font-size: 1.1em;
    }

    .userOptions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 5px;
        height: 40%;
        width: 70%;
    }

    .userOptions > .btnMenu {
        margin-top: 5px;
    }

    .userOptions > button {
        background: none;
        border: none;
        width: 60px;
        height: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0;
    }

    .userOptions > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0;
        padding-top: 0;
        width: 130px;
        height: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .userOptions > div > p{
        margin-left: 10px;
    }

    .userOptions > div > button{
        margin-left: 10px;
        border: none;
        background: blue;
        width: 60px;
        height: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
    }
`