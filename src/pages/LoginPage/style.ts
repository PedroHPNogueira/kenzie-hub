import styled from "styled-components";

export const LoginMain = styled.main`

    height: 100vh;
    background-color: var(--grey-4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    div {
        width: 90%;
        height: fit-content;
        padding: 42px 17px;

        background-color: var(--grey-3);
        gap: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        
        gap: 15px;
    }

    form > input {
        margin-bottom: 5px;
    }

    form > p {
        font-size: 12px;
        margin-top: -14px;

        color: var(--fail);
    }

    div > button{
        width: 100%;
    }

    label{
        font-size: 12px;
        font-weight: 400;

        color: var(--grey-0);
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 48px;
        padding: 0 22px;
        border-radius: 4px;

        background-color: var(--grey-1);

        color: var(--white);
        font-size: 16px;
        line-height: 26px;
        font-weight: 500;

        cursor: pointer;
        transition: .2s;

        @media (min-width: 762px){

            :hover {
            filter: brightness(.9);
            }
        }
    }

    @media (min-width: 762px){

        div {
            width: 369px;
            padding: 42px 17px;
        }
    }
`