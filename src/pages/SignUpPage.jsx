import { Link } from "react-router-dom";
import styled from "styled-components";
import DrivenArtsLogo from "../components/DrivenArtsLogo";
import SignUpTextForm from "../components/signUpComponents/SignUpTextForm";
import SignUpAvatarForm from "../components/signUpComponents/SignUpAvatarForm";
import { useState } from "react";

export default function SignUpPage(){
const [controle, setControle] = useState({pagina:1,nome:"",email:"",foto:"",senha:"",telefone:"",confirmpassword:"",confirmfoto:false});
    
    const setPagina = function (pagina){
        const obj = {...controle};
        obj.pagina = pagina;
        setControle(obj);
    };

    const setItens = function (e){
        const ParamName = e.target.name;
        const obj = {...controle};
        obj[ParamName] = e.target.value;
        setControle(obj);
    }

    const confirmarlink = function(){
        const obj = {...controle};
        obj.confirmfoto = true;
        setControle(obj);
    } 

    const resetarlink = function(e){
        const obj = {...controle};
        obj.confirmfoto = false;
        obj.foto = e.target.value;
        setControle(obj);
    } 

    return (
    <SingInContainer>
        <DrivenArtsLogo />
            {(controle.pagina===1)? <SignUpTextForm valores={{setPagina,controle, setItens}}/> : <SignUpAvatarForm valores={{setPagina,controle, setItens, confirmarlink,resetarlink}}/>}
            <Link to="/">
            Já tem uma conta? Entre agora!
            </Link>
    </SingInContainer>
    )
}

const SingInContainer = styled.section`
  background: linear-gradient(to left, #f0a9d1, #fb9a61); 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

