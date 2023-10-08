import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledDefaultTheme {
        color: {

        }
        breakPoint: {
            firstBP: number,
            secondBP: number,
            mobileBP: number,
            // secondBreakPoint: number,
            // mobileMax: number
        };
    }
}