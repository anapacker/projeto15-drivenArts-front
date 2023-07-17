
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiProducts from "../../services/apiProducts"; 


/*
function fillProductList (numberItens){
    const prod = [];
    for (let i=0; i<numberItens; i++){
        prod.push({image: "https://bahguri.rs/home/wp-content/uploads/2020/02/Pe%C3%A7as-da-s%C3%A9rie-Fam%C3%ADlia-de-Marcos-Vaandrade-cr%C3%A9dito-divulga%C3%A7%C3%A3o-683x1024.png",
        name: "Irmandade", 
        price: 2800.99});
    }   return prod;
}
*/

function addProductToCart(){

}

function buyProduct(){

}


const apiURL = import.meta.env.VITE_API_URL;

export default function Main(){

    const token = localStorage.getItem("token");
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${apiURL}/produtos/todos`, config)
                        .then(res => {
                            setProducts(res.data);
                            console.log(products)
                        })
                        .catch(error => {
                            alert(error.response.data)
                        }) 
    }, []);  
    
    return <MainSection>

        <Banner> </Banner >

        <Products id="products">

            <div className="products">  
            
                {products.map((product, index) => (
                    <ProductCard key={index} image={product.foto} name={product.nome} price={product.preco} 
                                 addToCart={addProductToCart} buyIt={buyProduct}/>
                ))}     

            </div>

        </Products>
    </MainSection>
}

const MainSection = styled.div`
    position: relative;
`

const Banner = styled.div `
    background: linear-gradient(to left, #f0a9d1, #fb9a61);  
    height: 75vh;
    margin-top: 12vh;
    margin-bottom: 5px;
`
const Products = styled.div `
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;    
    background: white;
    margin-bottom: 13vh;

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;
        margin: 10px;
    }

    @media (max-width: 530px) {

        padding-top: 10px; 

        .products {
            width: 95%;
        }
    }
`