import styled from "styled-components";
import Product from "./Product";
import ProductMobile from "./ProductMobile";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function fillProductList (numberItens){
    const prod = [];
    for (let i=0; i<numberItens; i++){
        prod.push({image: "https://bahguri.rs/home/wp-content/uploads/2020/02/Pe%C3%A7as-da-s%C3%A9rie-Fam%C3%ADlia-de-Marcos-Vaandrade-cr%C3%A9dito-divulga%C3%A7%C3%A3o-683x1024.png",
                   name: "Irmandade", 
                   price: 2800.99,
                   numItens: 5})
    }   
    return prod;
}

export default function CartData(props){

    let navigate = useNavigate();

    const user = {
        image: "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C.jpg",
        name: "Nome do Usuário",
        email: "email@gmail.com",
        phone: "(99) 99999-9999"
    }

    let productsList = localStorage.getItem('shoppingList');
    const lista = JSON.parse(productsList);
    
    let soma = 0;

    lista.forEach((produto) => 
        soma += produto.preco)


    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log(total);
    }, [total]);


    return <CartContainer>

                <UserProfile>   
                    <div className="userImage">   
                        <img src= {user.image} alt="Imagem de perfil do Usuário" />
                    </div>
                    <div className="userInfo">
                        <h2> {user.name} </h2>
                        <p>E-mail: {user.email} </p>
                        <p>Telefone: {user.phone} </p>
                    </div>                    
                </UserProfile>

                <ProductsHeader> 
                    <div className="titles">
                        <h2> Produto </h2>
                        <h2> Preço </h2>
                        <h2> Quantidade </h2>
                        <h2> Total </h2>
                    </div>                    
                </ProductsHeader>
                
                <ProductsList>
                    {lista.map((product, index) => (
                        <Product key={index} image={product.foto} name={product.nome} price={product.preco} numItens={1} />
                    ))}     
                </ProductsList>
                    
                <ProductsListMobile>
                    <h2> Itens selecionados: </h2>
                    {lista.map((product, index) => (
                        <ProductMobile key={index} image={product.foto} name={product.nome} price={product.preco} numItens={1} />
                    ))}   
                </ProductsListMobile>

                <div className="deliveryInfo">
                    <h2> Total: R$ {soma} </h2>
                    <div>
                        <button className="finalBtn" title="Finalizar compra" onClick={() => navigate("/home")}>Continuar Comprando</button>
                        <button title="Continuar comprando" > Finalizar Compra</button>
                    </div>
                    
                </div>
    </CartContainer>
}

const CartContainer = styled.div`
    margin-top: 12vh;
    margin-bottom: 13vh;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 40px;

    @media (max-width: 600px) {
        .deliveryInfo {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .deliveryInfo {
        margin-top: 20px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 210px;
    }

    .deliveryInfo > h2 {
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 1.2em;
    }

    .deliveryInfo > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .deliveryInfo > div > button {
        background-color: #575757;
        border: none;
        color: white;
        width: 100px;
        height: 50px;   
        padding-top: 10px;
        
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
    }

    .finalBtn {
        background-color: #ABBF7E;
    }

    .deliveryInfo > div > button:hover {
        text-decoration: none;
        background-color: #222222;
    }

`
const UserProfile = styled.div`

    width: 83%;
    display: flex;
    align-items: flex-start;
    font-weight: 300;
    font-size: 0.95em;
    line-height: 25px;
    padding-top: 35px;

    .userImage > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 20px;
    }    

    @media (max-width: 600px) {
        font-size: 0.85em;
        line-height: 25px;
        justify-content: center;
        padding-bottom: 15px;
        border-bottom: 1px solid gray;
        margin-bottom: 20px;

        .userImage > img {
            width: 70px;
            height: 70px;
        }
    }
`

const ProductsHeader = styled.div`
    margin-top: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    width: 73%;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    .titles {
        display: flex;
        justify-content: space-around;
        width: 60%;
    }

    .titles > h2 {
        font-size: 1em;
    }

    @media (max-width: 1000px) {
        .titles {
            width: 90%;
        }
    }

    @media (max-width: 600px) {
        display: none;
    }
`

const ProductsList = styled.div`
    width: 73%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        display: none;
    }
`

const ProductsListMobile = styled.div `
    display: none;
    width: 90%;

    & > h2 {
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`