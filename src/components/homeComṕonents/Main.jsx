
import styled from "styled-components";

export default function Main(){

    return <>

                <Banner>  
                    
                </Banner>

                <Products>
                
                </Products>

        </>
}

const Banner = styled.div `
    background: linear-gradient(to left, #f0a9d1, #fb9a61);  background: linear-gradient(to left, #f0a9d1, #fb9a61);
    height: 100vh;
`
const Products = styled.div `
    background: white;
    flex-wrap: wrap;
    padding: 20px;
    height: 100vh;
`