
import styled from "styled-components";
import ProductCard from "./ProductCard";
import apiProducts from "../../services/apiProducts";
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import DataContextProvider from "../../contexts/Usercontext";


export default function Main({ categoriaSelecionada }) {

    const [productsList, setProductsList] = useState([])


    useEffect(() => {
        if (!categoriaSelecionada) {
            const promise = apiProducts.getProducts()
            promise.then((res) => {
                setProductsList(res.data)
            })
            return
        }
        const promise = apiProducts.getProductsByCategory(categoriaSelecionada)
        promise.then((res) => {
            setProductsList(res.data)
        })
    }, [categoriaSelecionada])


    let navigate = useNavigate();


    const [products, setProducts] = useState([]);
    let [cartList, setCartList] = useState([]);

    useEffect(() => {
        console.log(cartList);
        localStorage.setItem("shoppingList", JSON.stringify(cartList));
    }, [cartList]);

    function addProductToCart(product){
        setCartList([...cartList, product]);
    }

    function buyProducts(product){
        setCartList([product]);
    }

    // productsList = fillProductList(20);
    
    
    return <MainSection>
        <Banner> </Banner >

        <Products id="products">

            <div className="products">  
            
                {products.map((product, index) => (
                    <ProductCard key={index} image={product.foto} name={product.nome} price={product.preco} 
                                 id={product.id} stock={product.estoque} type={product.categor} addToCart={addProductToCart} buyIt={buyProducts}/>
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
const Products = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;    
    background: white;
    margin-bottom: 13vh;
    min-height: 75vh;

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