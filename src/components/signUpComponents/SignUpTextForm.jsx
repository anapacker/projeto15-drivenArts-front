import { IMaskInput } from "react-imask";

import ControllerButtons from "./ControllerButtons";
import { useState } from "react";

export default function SignUpTextForm(props) {
    const {setPagina, setItens, controle} = props.valores;
    const {pagina,nome,email,foto,senha,telefone,confirmpassword,confirmfoto} = controle;
    const IndexPagina = 1;

    function handleForm(e){
        e.preventDefault();
        if(senha === confirmpassword && telefone !== ""){
            setPagina(2);
        } else{
            if(telefone === ""){
                alert("Por favor preencher o campo telefone.")
            } else{
                alert("Senha de confirmação incorreta.")
            }
        }
    }


    return (
        <form onSubmit={handleForm}>
            <ControllerButtons setPagina={setPagina} pagina={IndexPagina} confirmfoto={confirmfoto} controle={controle}/>

            <input
                name ="nome" 
                placeholder="nome" 
                type="text"
                required
                value={nome}
                onChange={setItens} 
            />

            <input 
                name = "email"
                placeholder="email" 
                type="email"
                required
                value={email}
                onChange={setItens} 
            />

            <IMaskInput 
                name="telefone"
                mask="(00)00000-0000" 
                placeholder="telefone"
                required
                value={telefone}
                onChange={setItens}
            />

            <input
                name="senha" 
                placeholder="senha" 
                type="password"
                required
                value={senha}
                onChange={setItens} 
            />
            <input
                name="confirmpassword"  
                placeholder="confirmar senha" 
                type="password"
                required
                value = {confirmpassword}
                onChange={setItens} 
            />

            <button type="submit">Próximo</button>
        </form> 
    )
}

