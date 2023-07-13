import { styled } from "styled-components";

export default function ControllerButtons(props){
    const {setPagina, pagina,confirmfoto, controle} = props;
    
function validaEmail(valor){
    if(!valor.includes('@')) return false;
    const user = valor.substring(0, valor.indexOf("@"));
    const dominio = valor.substring(valor.indexOf("@")+ 1, valor.length);
    if(user && dominio) return true;
}


    const navegacao = function(pagina){
        const teste = validaEmail(controle.email);
        switch(pagina){
            case 1:
                setPagina(1);
                break;
            case 2:
                if(controle.nome && controle.email && controle.telefone && controle.senha && controle.confirmpassword && controle.senha === controle.confirmpassword && controle.senha.length > 2 && teste){
                    setPagina(2);
                } else{
                    alert("Todos os campos da primeira página de cadastro devem ser preenchidos corretamente para prosseguir!")
                }
                break;
            case 3:
                break;
        }
    }
    
    
    
    
    return (
        <ControllerDiv>
            
            {(pagina===1) && <ion-icon name="ellipse" ></ion-icon>}
            {(pagina===2 || pagina===3) && <ion-icon name="checkmark-circle-outline" onClick={()=> navegacao(1)}></ion-icon>}
            
            {(pagina===1 && !confirmfoto) && <ion-icon name="ellipse-outline" onClick={()=> navegacao(2)}></ion-icon>}
            {(pagina===1 && confirmfoto) && <ion-icon name="checkmark-circle-outline" onClick={()=> navegacao(2)}></ion-icon>}
            {(pagina===2) && <ion-icon name="ellipse" ></ion-icon>}
            {(pagina===3) && <ion-icon name="checkmark-circle-outline" onClick={()=> navegacao(2)}></ion-icon>}
            
            
        </ControllerDiv>
    );
}

const ControllerDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 20px;
    color: white;
    font-size: 17px;
    ion-icon:hover{
        font-size: 20px;
        cursor: pointer;
    }
`
