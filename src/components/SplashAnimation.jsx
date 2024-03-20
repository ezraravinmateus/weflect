// Tutorial from
// https://chakra-ui.com/getting-started/with-framer
import {
    Box,
    Container,
    keyframes,
    Image,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "../assets/CircleFill.png";

const animationKeyframes = keyframes`
  0% { transform: scale(0.5); }
  50% { transform: scale(0.75); }
  100% { transform: scale(0.5); }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function SplashAnimation() {
    return (
        <Container
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={"column"}
        >
            <Image src={Logo} animation={animation} />
            <Spinner color="primary.50" emptyColor="primary.10" />
            {/* <Box
                as={motion.div}
                animation={animation}
                // not work: transition={{ ... }}
                padding="2"
                // @ts-ignore - "Does not exist" Type Error against Motion
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                width="12"
                height="12"
                display="flex"
            /> */}
        </Container>
    );
}
