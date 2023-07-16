import Header from "../components/homeComṕonents/Header";
import Main from "../components/homeComṕonents/Main";
import Footer from "../components/homeComṕonents/Footer";
import styled from "styled-components"
import DrivenArtsLogo from "../components/DrivenArtsLogo"
import apiAuth from "../services/apiAuth";
import { useContext, useState } from "react";
import DataContextProvider from "../contexts/Usercontext";



export default function HomePage(){    

       return <>
            <Header />
            <Main />
            <Footer />
           </>
}