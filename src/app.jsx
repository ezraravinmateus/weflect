import { Home } from "./pages/Home";
import { Flex } from "@chakra-ui/react";
import SplashScreen from "./components/SplashScreen";
function App() {
    return (
        <Flex backgroundColor={"primary.0"}>
            <Home></Home>
        </Flex>
    );
}

export default SplashScreen(App);
