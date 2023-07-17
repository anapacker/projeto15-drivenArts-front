
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useEffect, useState } from 'react';
import apiProducts from "../../services/apiProducts";


function addProductToCart() {

}

function buyProduct() {

}

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
    /*
    const [products, setProducts] = useState([]);

    try {
        let productsList = apiProducts.getProducts();
        console.log(productsList);
    }
    catch {
        console.log("Deu erro!");
    }
    */

    // productsList = fillProductList(20);

    return <>

        <Banner> </Banner >

        <Products id="products">

            <div className="products">

                {productsList.map((product) => (
                    <ProductCard key={product._id} image={product.foto} name={product.nome} price={product.preco}
                        addToCart={addProductToCart} buyIt={buyProduct} />
                ))}

            </div>

        </Products>
    </>
}

const Banner = styled.div`
    background: linear-gradient(to left, #f0a9d1, #fb9a61);  
    height: 100vh;
    margin-bottom: 15px;
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
    overflow-y: scroll;
    max-height: 70vh;
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