import styled from "styled-components";

export const TechItemLi = styled.li`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    background-color: var(--grey-4);

    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    i {
        color: white;
        transition: 0.2s;
    }

    @media (min-width: 762px){
        :hover{
            background-color: var(--grey-2);
        }

        i:hover{
            cursor: pointer;
            color: var(--grey-1);
        }
    }
`