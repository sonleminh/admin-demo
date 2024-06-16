import { createTheme } from "@mui/material";

export const theme = ()=> createTheme({
    palette: {
        primary: {
            main: '#4566e1',
            light: '#fff'
        },
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&.MuiButton-contained': {
                        '&:hover': {
                        // backgroundColor: 'rgba(255,255,255,0.9)'
                        }
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    minHeight: 48,
                }
            }
        },
        // MuiFilledInput: {
        //     styleOverrides: {
        //         root: {
        //             minHeight: 48,
        //         }
        //     }
        // }
    }
   ,
    typography: {
        fontFamily: '"Inter"'
    }
    // components: {
    //       MuiMenuItem: {
    //         styleOverrides: {
    //           root: {
    //             background: 'transparent',
    //             transition: 'all .2s',
      
    //             '&:hover, &:active, &.active, &.Mui-selected': {
    //                 color: 'red',
    //                 background: 'green'
    //             },
    //             '&.Mui-selected:hover': {
    //                 background: 'green'
    //             }
    //           }
    //         }
    //       },
    //       MuiListItem: {
    //         styleOverrides: {
    //           root: {
    //             color: 'pink',
    //             '&.MuiButtonBase-root': {
    //                 color: '#fff',
      
    //               '&:hover': {
    //                 color: 'red',
    //                 background: 'green'
    //               }
    //             }
    //           }
    //         }
    //       },
    // }
    
})