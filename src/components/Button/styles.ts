import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface IButtonProps{
    variant?: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children: React.ReactNode,
    classname?: string
  }

interface IButtonVariants{
    button1: FlattenSimpleInterpolation,
    button2: FlattenSimpleInterpolation,
    button3: FlattenSimpleInterpolation,
    button4: FlattenSimpleInterpolation,
    button5: FlattenSimpleInterpolation,
    [key: string]: any
}

const buttonVariants: IButtonVariants = {
    button1: css`
        height: 48px;
        padding: 0 22px;
        border-radius: 4px;

        background-color: var(--color-primary);

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
    `,
    button2: css`
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
    `,
    button3: css`
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
    `,
    button4: css`

        font-weight: 500;
    
        background-color: transparent;
        color: var(--grey-1);

        @media (min-width: 762px){
            :hover{
                color: white;
                cursor: pointer;
                transition: .2s;
            }
        }
    `,
    button5: css`
    
    `
}

export const Container = styled.button<IButtonProps>`

    ${({variant}) => {return buttonVariants[variant || "button1"]}}
`