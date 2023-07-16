
import styled from "styled-components"
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLogoWhatsapp} from 'react-icons/io';

export default function Footer(){
    return <>
            <FooterContainer>
                <div className="contactInfo"> 
                    Driven Arts  |  Telefone: +55 99 99999-9999  | E-mail: contato@drivenarts.com
                </div>
                <div className="socialMedias"> 
                    <IoLogoWhatsapp size={20} title="Whatsapp" color="gray"/>
                    <IoLogoInstagram size={20} title="Instagram" color="gray"/>
                    <IoLogoTwitter size={20} title="Twitter" color="gray"/>
                    <IoLogoYoutube size={20} title="Youtube" color="gray"/>
                </div>
            </FooterContainer>
        </>
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    background: linear-gradient(to bottom, #464646, #1d1d1d);  
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-align: center;
    color: white;
    height: 13vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .contactInfo {
        font-size: 0.8em;
    }

    & > .socialMedias {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        width: 100px;    
        margin-top: 5px;
    }
`

