import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ProductMobile(props){

    const navigate = useNavigate();

    return <ProductInfo>
                <div className="productId">
                    <img title="Ver produto" src={props.image} alt="Imagem do produto"></img>
                    <h3>{props.name}</h3>
                </div>       
                <div className="productInfos"> 
                    <p>Preço: R$ {props.price.toString().replace(".", ",")}</p>
                    <p>Quantidade: {props.numItens.toString().replace(".", ",")}</p>
                    <p>Total: R$ {(props.numItens * props.price).toFixed(2).toString().replace(".", ",")}</p>
                </div>                         
           </ProductInfo>
}

const ProductInfo = styled.div`

    display: flex;
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    font-size: 0.8em;
    align-items: center;
    margin-top: 10px;
    padding: 15px;

    .productId {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .productId > img {
        width: 40px;
        max-height: 70px;
        margin-right: 10px;
    }

    .productInfos {
        margin-left: 35px;
        line-height: 25px;
    }

    @media (max-width: 1000px) {
        width: 90%;
    }
`