// GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  * {
        box-sizing: border-box;
        font-size: 100%;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        a, a:hover{
            text-decoration: none;
        }
        li{
            list-style-type: none;
        }
   }
`;
