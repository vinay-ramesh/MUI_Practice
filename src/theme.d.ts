import { ThemeOptions } from "@mui/material/styles";
import { React } from 'react';

declare module "@mui/material/syles" {
    interface Theme {
        status :{
            danger:string;
        };
    }
    interface ThemeOptions{
        status:{
            danger:React.CSSProperties['color']
        }
    }
}