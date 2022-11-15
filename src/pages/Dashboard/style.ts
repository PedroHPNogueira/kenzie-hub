import styled from "styled-components";

export const DashMain = styled.div`

    position: relative;

    min-height: 100vh;
    background-color: var(--grey-4);

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 30px 0;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 5% 30px;

        border-bottom: 1px solid var(--grey-3);
    }

    .name{
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        
        padding: 0 5% 30px;

        border-bottom: 1px solid var(--grey-3);
    }

    .name .module {
        margin-left: 10px;
    }

    .techDiv{
        display: flex;
        flex-direction: column;
        border-bottom: none;
        
        padding: 0 5% 30px;
    }

    .techDiv > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .techDiv > div button {
        font-size: 20px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 4px;

        margin-top: 20px;
        padding: 20px 2%;
        background-color: var(--grey-3);

    }

    @media (min-width: 762px){
        .header{
            padding: 0 20% 30px;
        }

        .name {
            padding: 0 20% 30px;
        }

        .techDiv {
            padding: 0 20% 30px;
        }
    }
`