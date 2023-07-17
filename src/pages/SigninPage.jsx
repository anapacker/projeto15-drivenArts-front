import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import DrivenArtsLogo from "../components/DrivenArtsLogo"
import apiAuth from "../services/apiAuth";
import { useContext, useState } from "react";
import DataContextProvider from "../contexts/Usercontext";

export default function SigninPage() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [isDisable, setIsDisable] = useState("")
    const { setToken } = useContext(DataContextProvider)
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        setIsDisable(true)
        apiAuth.login({ email, senha })
            .then(res => {
                localStorage.setItem("token", res.data.token)
                setToken(res.data.token)
                navigate("/home")
            })
            .catch((res) => {
                console.log(res.data)
                alert(res.response.data);
            });
    }

    return (
        <SingInContainer>
            <DrivenArtsLogo />
            <form onSubmit={handleLogin}>
                <input
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isDisable}

                />
                <input
                    placeholder="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    disabled={isDisable}
                />

                <button type="submit" disabled={isDisable}>Entrar</button>
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