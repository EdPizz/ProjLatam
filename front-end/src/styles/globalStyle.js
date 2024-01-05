import { Center, SliderFilledTrack, flexbox } from "@chakra-ui/react"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
}

body {
    width: 100vw;
    height: 100vw;
    display: flexbox;
    justify-content: Center;
    background-color: #f2f2f2;
};
`
export default GlobalStyle;
