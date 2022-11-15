import styled from "styled-components";

export const RegisterMain = styled.main`

    height: fit-content;
    background-color: var(--grey-4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .logoDiv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;

        margin-top: 50px;
    }
    
    .formDiv {
        width: 90%;
        height: fit-content;
        padding: 42px 17px;

        background-color: var(--grey-3);
        gap: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-bottom: 50px;
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

    .formDiv > button{
        width: 100%;
    }

    label{
        font-size: 12px;
        font-weight: 400;

        color: var(--grey-0);
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0 16px;
        border-radius: 4px;

        background-color: var(--grey-3);

        color: var(--grey-0);
        font-size: 12px;
        line-height: 28px;
        font-weight: 600;

        cursor: pointer;
        transition: .2s;

        @media (min-width: 762px){

            :hover {
            filter: brightness(.9);
            }
        }
    }

    @media (min-width: 762px){

        .logoDiv {
            width: 369px;
            padding: 42px 17px;
        }

        .formDiv {
            width: 369px;
            padding: 42px 17px;
        }
    }
`