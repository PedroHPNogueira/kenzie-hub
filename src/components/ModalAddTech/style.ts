import styled, { css } from "styled-components";

export const Modal = styled.div`

    position: fixed;
    top: 0;
    min-height: 100vh;
    width: 100vw;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.2);

    > div{
        display: flex;
        flex-direction: column;

        width: 90%;
    }

    > div > div { 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        border-radius: 4px 4px 0 0;
        padding: 10px 5%;

        background-color: var(--grey-2);
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        
        gap: 20px;
        padding: 5%;
        border-radius: 0 0 4px 4px;

        background-color: var(--grey-3);
        
    }

    form > input {
        margin-bottom: 5px;
    }

    form > p {
        font-size: 12px;
        margin-top: -20px;

        color: var(--fail);
    }

    label{
        font-size: 12px;
        font-weight: 400;

        color: var(--grey-0);
    }


    @media (min-width: 762px){
        > div {
            width: 25%;
        }
    }
`