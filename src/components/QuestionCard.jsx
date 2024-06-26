import { Flex, Text, Heading } from "@chakra-ui/react";

const shadowColor = {
    white: "primary.10",
};

export const QuestionCard = ({ question }) => {
    return (
        <Flex>
            {/* Tutorial to create card stack
                https://codepen.io/fossheim/pen/MWwOBwx
             */}
            <Flex
                marginRight={"10px"}
                paddingX={{ base: "5vw", md: "10vw" }}
                paddingY={{ base: "5vh", md: "5vh" }}
                minWidth={"75vw"}
                maxWidth={{ base: "75vw", md: "75vw" }}
                minHeight={{ base: "35vh", md: "35vh" }}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                backgroundColor={"primary.10"}
                textColor={"primary.50"}
                borderRadius={"24px"}
                borderColor={"primary.50"}
                borderWidth={"2px"}
                boxShadow={
                    "8px -8px 0 -2px #F9EAEF, 8px -8px #73233B, 16px -16px 0 -2px #F9EAEF, 16px -16px #73233B"
                }>
                <Heading
                    fontSize={{ base: "16px", md: "24px" }}
                    letterSpacing={"0.05rem"}>
                    {question}
                </Heading>
            </Flex>
        </Flex>
    );
};
