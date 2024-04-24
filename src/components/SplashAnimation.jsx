// Tutorial from
// https://chakra-ui.com/getting-started/with-framer
import { keyframes, Image, Spinner, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "../assets/Logogram.png";

const animationKeyframes = keyframes`
  0% { transform: scale(0.5); }
  50% { transform: scale(0.75); }
  100% { transform: scale(0.5); }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function SplashAnimation() {
    return (
        <Flex
            h="100vh"
            alignItems="center"
            justifyContent="center"
            flexDirection={"column"}>
            <Image src={Logo} animation={animation} boxSize={"20vh"} />
            <Spinner color="primary.50" emptyColor="primary.10" />
        </Flex>
    );
}
