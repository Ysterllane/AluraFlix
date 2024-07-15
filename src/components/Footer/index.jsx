import styled from "styled-components"

const StyledFooter = styled.footer`
    display: none;
    @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 125px;
        background-color: var(--preto);
        border-top: var(--border);
        box-shadow: var(--boxShadow);
        >img{
            width: 168px;
        }
        > a {
            text-decoration: none;
            color: white;
            font-size: 14px;
        }
    }
`

const Footer = () => {
    return(
    <StyledFooter>
        <img src="/images/logo.png" alt="logo da AluraFlix" />
        <a href="https://www.linkedin.com/in/matheusnani/">Feito por Matheus Nani &copy;</a>
    </StyledFooter>    
    )
}

export default Footer