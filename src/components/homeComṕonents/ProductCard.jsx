import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {

    const navigate = useNavigate();

    const product = {
        id: props.id,
        nome: props.name,
        preco: props.price,
        estoque: props.stock,
        categoria: props.type,
        foto: props.image
    }

    return <Product>
        <div className="productInfo"> 
                    <img title="Ver produto" src={props.image} alt="Imagem do produto"></img>
                    <h3>{props.name}</h3>
                    <p>R$ {props.price.toString().replace(".", ",")}</p>
                </div>
                
                <div className="btnPurchase">
                    <button title="Adicionar ao carrinho" onClick={() => props.addToCart(product)}>+</button>
                    <button title="Comprar" onClick={() => props.buyIt(product)}>
                        <FaShoppingCart size={13}/>
                    </button>
                </div>                
            </Product>

}

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 160px;
    height: 230px;
    margin: 15px;
    padding: 15px;
    background-color: #ABBF7EA0;
    font-size: 13px;
    font-weight: 300;
    font-family: Roboto, sans-serif;
    border-radius: 10px;
    line-height: 20px;

    &:hover {
        background-color:#ABBF7E;
    }

    .productInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80%;
    }

    & > .productInfo > img {
        max-width: 80px;
        max-height: 90px;
        margin-top: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }

    & > .productInfo > h3 {
        font-weight: 400;
        font-size: 15px;
        margin-top: 5px;
    }

    .btnPurchase {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-top: 10px;
        height: 10%;
        width: 80%;
    }

    .btnPurchase > button {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-family: Roboto, sans-serif;
        color: white;
        background-color: #92a074;
        border: none;
        margin-bottom: 0;
        padding: 0;
    }

    .btnPurchase > button:hover {
        text-decoration: none;
        background-color: #636955;
    }

    @media (max-width: 600px) {
        width: 130px;
        height: 190px;
        margin: 15px;
        font-size: 12px;

        & > .productInfo > img {
            max-width: 70px;
            max-height: 70px;
        }

        & > .productInfo > h3 {
            font-weight: 400;
            font-size: 13px;
        }

        .btnPurchase {
            margin-top: 10px;
            height: 10%;
            padding: 3px;
            width: 80%;
        }

        .btnPurchase > button {
            width: 25px;
            height: 25px;
            font-size: 15px;
        }
    }
`