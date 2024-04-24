import { render } from "preact";
import App from "./app.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const themeExtend = extendTheme({
    colors: {
        primary: {
            0: "#FFFAFC",
            10: "#F0CFD9",
            40: "#B1365B",
            50: "#73233B",
            100: "#200A10",
        },
    },
});

render(
    <ChakraProvider theme={themeExtend}>
        <App />
    </ChakraProvider>,
    document.getElementById("app")
);
