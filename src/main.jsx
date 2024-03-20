import { render } from "preact";
import App from "./app.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const themeExtend = extendTheme({
    colors: {
        primary: {
            0: "#FDFBFB",
            10: "#F3EAEB",
            40: "#B47E86",
            50: "#9C5B64",
            100: "#4A2B30",
        },
    },
});

render(
    <ChakraProvider theme={themeExtend}>
        <App />
    </ChakraProvider>,
    document.getElementById("app")
);
