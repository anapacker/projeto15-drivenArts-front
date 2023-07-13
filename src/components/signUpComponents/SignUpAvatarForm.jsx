import { styled } from "styled-components";
import ControllerButtons from "./ControllerButtons";
import { useNavigate } from "react-router-dom";

export default function SignUpAvatarForm(props){

    const navigate = useNavigate();
    const {setPagina, setItens, controle, confirmarlink,resetarlink} = props.valores;
    const {pagina,nome,email,foto,senha,telefone,confirmfoto} = controle;

    function verificarLinkImagem(url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = function() {
            resolve(true);
          };
          img.onerror = function() {
            resolve(false);
          };
          img.src = url;
        });
      }

    async function handleImagem(e){
        e.preventDefault(); 
        const url = foto;
        try {
            const resultado = await verificarLinkImagem(url);
            if (resultado) {
                confirmarlink();
            } else {
                alert('O link para a imagem de perfil que foi informado é inválido.');
            }
        } catch (error) {
                console.log('Ocorreu um erro ao verificar o link da imagem:', error);
        }

    }


    function cadastrar(){
        const obj = {nome, email, foto, senha,telefone};
        console.log("enviar cadastro para o servidor !");
        console.log(obj);
        alert('cadastro efetuado!');
        navigate("/");
    }

    return(
        <>
            {!confirmfoto &&
                <form onSubmit={handleImagem}>
                    <ControllerButtons setPagina={setPagina} pagina={pagina} confirmfoto={confirmfoto} controle={controle}/>
                    <input
                        name="foto" 
                        placeholder="link da foto de perfil" 
                        type="text"
                        value={foto}
                        onChange={resetarlink}

                    />
                    <button type="submit" onClick={handleImagem}>Testar link...</button>
                </form>  
            }  
            {confirmfoto  &&
                <form onSubmit={handleImagem}>
                    <ControllerButtons setPagina={setPagina} pagina={pagina} confirmfoto={confirmfoto} controle={controle}/>
                    <QuadroAvatar >
                        <img src={foto} alt="avatar" />
                    </QuadroAvatar>
                    <button type="submit" onClick={resetarlink}>Trocar imagem</button>
                    <button type="submit" onClick={cadastrar}>Cadastrar!</button>
            </form>
            }
        </>
    )
}

const QuadroAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
        img{
            max-height: 200px;
            object-fit: cover;
        }
`