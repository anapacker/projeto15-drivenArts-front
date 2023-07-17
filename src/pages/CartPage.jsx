import Header from "../components/homeComṕonents/Header";
import CartData from "../components/cartComponents/CartData";
import Footer from "../components/homeComṕonents/Footer";
import styled from "styled-components"
import DrivenArtsLogo from "../components/DrivenArtsLogo"
import apiAuth from "../services/apiAuth";
import { useContext, useState } from "react";
import DataContextProvider from "../contexts/Usercontext";


export default function CartPage(){
    return <>
        <Header />
        <CartData />
        <Footer /> 
    </>
}