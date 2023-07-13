import { Link } from "react-router-dom"
import styled from "styled-components"
import DrivenArtsLogo from "../components/DrivenArtsLogo"

export default function SigninPage() {
    return (
        <SingInContainer>
            <DrivenArtsLogo />
            <form>
                <input placeholder="email" type="email" />
                <input placeholder="senha" type="password" />

                <button>Entrar</button>
            </form>

            <Link to="/cadastro">
                Primeira vez? Cadastre-se!
            </Link>
        </SingInContainer>
    )
}

const SingInContainer = styled.section`
  background: linear-gradient(to left, #f0a9d1, #fb9a61);  background: linear-gradient(to left, #f0a9d1, #fb9a61);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`