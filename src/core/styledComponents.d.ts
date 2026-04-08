import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledDefaultTheme {
        color: {
            forest: string;
            forestMid: string;
            forestLight: string;
            forestPale: string;
            cream: string;
            creamDark: string;
            charcoal: string;
            stone: string;
            stoneLight: string;
            white: string;
            accent: string;
        };
        breakPoint: {
            firstBP: number;
            secondBP: number;
            mobileBP: number;
        };
    }
}
