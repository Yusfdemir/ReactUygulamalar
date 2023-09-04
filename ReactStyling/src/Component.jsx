// styled component kullanımı
import styled, {css} from "styled-components"

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  ${props=>props.theme=='dark' && css`
    background:#000;
    color:#fff;
    &:hover{
        background:red;
    }
  `}
`;