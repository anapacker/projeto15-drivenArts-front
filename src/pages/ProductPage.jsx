import { styled } from "styled-components"
import Header from "../components/homeComṕonents/Header"
import { useParams } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import apiProducts from "../services/apiProducts";
import DataContextProvider from "../contexts/Usercontext";

export default function ProductPage(){
    const {id} = useParams();
    const { token } = useContext(DataContextProvider);
    const [produto, setProduto] = useState({_id:'',
    nome:'',preco:0,estoque:0,categoria:'',foto:''});

    useEffect(()=>{
        apiProducts.getProduct(id, token)
        .then(res=>{
            setProduto(res.data);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err.response.data);
        })
    },[])
    
    if(produto === {}){
        return (<>
        <Header/>
        <ContainerTitulo>
                <ContainerDiv>
                    <h1>Carregando ...</h1>
                    <h2>{produto.categoria}</h2>
                </ContainerDiv>
                <ContainerDivPink>
                </ContainerDivPink>
            </ContainerTitulo>
        </>)
     
    }else{   
        return (
            <>
            <Header/>
            <ContainerTitulo>
                <ContainerDiv>
                    <h1>{produto.nome}</h1>
                    <h2>{produto.categoria}</h2>
                </ContainerDiv>
                <ContainerDivPink>
                </ContainerDivPink>
            </ContainerTitulo>
            <ContainerConteudo>
                <ContainerBordas>
                    <ContainerFigura>
                        <img src={produto.foto} alt={produto.nome} />
                    </ContainerFigura>
                    <ContainerHUB>
                        <COntainerTItulo>
                            <Titulo> {produto.nome}</Titulo>
                            <Estoque>{produto.estoque} em estoque</Estoque>
                        </COntainerTItulo>
                        <ContainerPreco>
                            <Preco>
                                R$ <span>{produto.preco.toFixed(2)}</span>
                            </Preco>
                        </ContainerPreco>
                        <ContainerButtons>
                            <button>Adicionar ao carrinho</button>
                            <button>Comprar Agora</button>
                        </ContainerButtons>
                        
                    </ContainerHUB>
                </ContainerBordas>
            </ContainerConteudo>
        </>
        )
    }

}

const ContainerTitulo = styled.div`
    padding-top: 12vh;
    height: 16vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ContainerDiv = styled.div`
    background: linear-gradient(to right, #F3D09A, #f9e4c5);
    width: 80vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        font-size: 64px;
        color: black;
        font-family: 'Garamond';
        margin-left: 80px;

    }
    h2:hover{
            cursor: pointer;
            color: #999;
            text-decoration: underline;
    }
    h2{
        font-size: 32px;
        color: #888;
        font-family: 'Garamond';
        margin-left: 80px;
    }
`
const ContainerDivPink = styled.div`
        background: linear-gradient(to right, #ceb1bb, #ceb0ba);
        width: 20vw;
        height: 20vh;
`

const ContainerConteudo = styled.div`
    height: 72vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
`
const ContainerBordas = styled.div`
    width: 80vw;
    height: 68vh;
    display: flex;
    flex-direction: row;
`

const ContainerFigura = styled.div`
    height: 66vh;
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: lightblue;
    img{
        height: 58vh;
        width: 35vw;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transition: all 1.5s ease;
    }
    img:hover{
        transform: scale(1.03);
        height: 60vh;
        width: 37vw;
        object-fit: cover;
    }
`

const ContainerHUB = styled.div`
    height: 62vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
`
const COntainerTItulo = styled.div`
    width: 40vw;
    height: 16vh;
    display: flex;
    padding: 1vh;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 1px solid #aaa;
    box-sizing: border-box;
`
const Estoque = styled.span`
    font-size: 24px;
    color: #777;
    font-family: 'Garamond';
`

const Titulo = styled.span`
    font-size: 42px;
    color: black;
    font-family: 'Garamond';
`
const ContainerPreco = styled.div`
    width: 40vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`
const Preco = styled.span`
    font-size: 42px;
    color: black ;
    font-family: 'Garamond';
    span{
        font-size: 70px; 
    }
`
const ContainerButtons = styled.div`
    width: 40vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: space-evenly;
    button{
        background: linear-gradient(to right, #adb96d, #869552);
        width: 18vw;
        font-family: 'Garamond';
        border: none;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    button:hover{
        text-decoration: none;
        background: linear-gradient(to right, #adb96d, #9daa62);
    }
    button:active{
        background: #869552;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 15px;
        transform: translateY(4px);
        border: dashed 1px white;
    }
`