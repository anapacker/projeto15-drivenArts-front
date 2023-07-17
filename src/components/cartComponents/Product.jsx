import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Product(props){

    const navigate = useNavigate();

    return <ProductInfo>
                <div className="productId">
                    <img title="Ver produto" src={props.image} alt="Imagem do produto"></img>
                    <h3>{props.name}</h3>
                </div>                
                <p>R$ {props.price.toString().replace(".", ",")}</p>
                <p>{props.numItens.toString().replace(".", ",")}</p>
                <p>R$ {(props.numItens * props.price).toFixed(2).toString().replace(".", ",")}</p>
           </ProductInfo>
}

const ProductInfo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin-top: 10px;

    .productId {
        display: flex;
        align-items: center;
    }

    .productId > img {
        width: 40px;
        max-height: 70px;
        margin-right: 10px;
    }

    @media (max-width: 1000px) {
        width: 90%;
    }
`