import { Flex, Heading, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { QuestionCard } from "../components/QuestionCard";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "preact/hooks";
import { stack } from "../function/GetRandomQuestion";

export const Home = () => {
    // Array containing the questions
    const [counterCard, setCounterCard] = useState(1);
    const limitCounterCard = 10;

    const incrementCounterCard = () => {
        if (counterCard >= limitCounterCard) {
        } else {
            setCounterCard(counterCard + 1);
        }
    };

    const decrementCounterCard = () => {
        if (counterCard <= 1) {
        } else {
            setCounterCard(counterCard - 1);
        }
    };

    useEffect(() => {
        console.log(stack);
    }, []);

    return (
        <Flex
            flexDirection={"column"}
            height={"90vh"}
            width={"100vw"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ base: "36px", md: "48px" }}
            textColor={"primary.50"}
        >
            <VStack spacing={"10px"}>
                <Heading display={counterCard >= 10 ? "none" : "block"}>
                    {counterCard}/{limitCounterCard}
                </Heading>
                <Text
                    fontWeight={"bold"}
                    display={counterCard >= 10 ? "none" : "block"}
                >
                    Question Cards Reached
                </Text>
            </VStack>
            <Flex
                width={"100vw"}
                justifyContent={{ base: "center", md: "space-around" }}
                alignItems={"center"}
                flexDirection={{ base: "column", md: "row" }}
            >
                <Button
                    display={{ base: "none", md: "block" }}
                    onClick={decrementCounterCard}
                    borderColor={"primary.50"}
                    borderRadius={"100px"}
                    backgroundColor={"primary.50"}
                    textColor={"primary.0"}
                    variant={"unstyled"}
                    _hover={{
                        backgroundColor: "primary.40",
                    }}
                >
                    <ArrowBackIcon />
                </Button>
                <QuestionCard question={stack[counterCard - 1]}></QuestionCard>
                <Flex
                    className="mobile-buttons"
                    marginTop={"12px"}
                    display={{ base: "", md: "none" }}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"100px"}
                    width={"fit-content"}
                >
                    <Button
                        onClick={decrementCounterCard}
                        width={"72px"}
                        height={"72px"}
                        borderColor={"primary.50"}
                        borderRadius={"100px"}
                        backgroundColor={"primary.50"}
                        textColor={"primary.0"}
                        variant={"unstyled"}
                        _hover={{
                            backgroundColor: "primary.40",
                        }}
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Button
                        onClick={incrementCounterCard}
                        marginLeft={"12px"}
                        width={"72px"}
                        height={"72px"}
                        borderColor={"primary.50"}
                        borderRadius={"100px"}
                        backgroundColor={"primary.50"}
                        textColor={"primary.0"}
                        variant={"unstyled"}
                        _hover={{
                            backgroundColor: "primary.40",
                        }}
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Flex>
                <Button
                    display={{ base: "none", md: "block" }}
                    onClick={incrementCounterCard}
                    borderColor={"primary.50"}
                    borderRadius={"100px"}
                    backgroundColor={"primary.50"}
                    textColor={"primary.0"}
                    variant={"unstyled"}
                    _hover={{
                        backgroundColor: "primary.40",
                    }}
                >
                    <ArrowForwardIcon />
                </Button>
            </Flex>
        </Flex>
    );
};
