import styled, {css} from "styled-components";

interface ITextProps{
    kind: string
}

export const Text = styled.p<ITextProps>`

    ${({kind}) => { 

        if(kind === "tittle1"){

            return css`
                font-size: 18px;
                font-weight: 700;
                line-height: 28px;

                color: var(--white);
            `
        } else if(kind === "text1"){

            return css`
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;

                color: var(--white);
            `
        } else if(kind === "secondaryText1"){

            return css`
                font-size: 12px;
                font-weight: 600;
                line-height: 18px;

                color: var(--grey-1);
            `
        } else if(kind === "logo"){

            return css`
                font-size: 22px;
                font-weight: 600;
                line-height: 30px;

                color: var(--color-primary);
            `
        }
    }}
`