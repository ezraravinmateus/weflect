import {
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Image,
    useToast,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Icon,
} from "@chakra-ui/react";

import { QuestionCard } from "../components/QuestionCard";
import {
    ArrowBackIcon,
    ArrowForwardIcon,
    ChevronDownIcon,
} from "@chakra-ui/icons";

import { TbWorld } from "react-icons/tb";

import { useEffect, useState } from "preact/hooks";
import { stack_ID, stack_EN } from "../function/GetRandomQuestion";
import Logo from "../assets/Logogram.png";
import { Dialog } from "../components/Dialog";
import SplashScreen from "../components/SplashScreen";

function Home() {
    const [language, setLanguage] = useState("EN");
    const [stack, setStack] = useState(stack_EN);

    const limitCounterCard = stack.length;
    const [counterCard, setCounterCard] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        if (language == "ID") {
            setStack(stack_ID);
        } else {
            setStack(stack_EN);
        }
    }, [language]);

    return (
        <Flex
            bgColor={"primary.0"}
            flexDirection={"column"}
            height={"100vh"}
            width={"100vw"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={{ base: "12px", md: "48px" }}
            textColor={"primary.50"}
            paddingTop={{ base: "0vh", md: "5vh" }}>
            <Image src={Logo} width={{ base: "100px", md: "120px" }} />
            <Menu>
                <MenuButton
                    color={"primary.0"}
                    bgColor={"primary.50"}
                    variant={"unstyled"}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    fontSize={"20px"}
                    px={"10px"}
                    borderRadius={"full"}>
                    <Icon
                        as={TbWorld}
                        fontSize={"24px"}
                        paddingTop={"4px"}></Icon>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setLanguage("EN")}>EN</MenuItem>
                    <MenuItem onClick={() => setLanguage("ID")}>ID</MenuItem>
                </MenuList>
            </Menu>
            <VStack spacing={"10px"}>
                <Heading display={counterCard >= 10 ? "block" : "block"}>
                    {counterCard}/{limitCounterCard}
                </Heading>
                <Text
                    fontWeight={"bold"}
                    display={counterCard >= 10 ? "block" : "block"}>
                    Question Cards Reached
                </Text>
            </VStack>
            <Flex
                marginTop={{ base: "24px", md: "0px" }}
                width={"100vw"}
                justifyContent={{ base: "center", md: "space-around" }}
                alignItems={"center"}
                flexDirection={{ base: "column", md: "row" }}>
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
                    }}>
                    <ArrowBackIcon />
                </Button>
                <QuestionCard question={stack[counterCard - 1]}></QuestionCard>
                <Flex
                    className="mobile-buttons"
                    marginTop={"72px"}
                    display={{ base: "", md: "none" }}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"100px"}
                    width={"fit-content"}>
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
                        }}>
                        <ArrowBackIcon />
                    </Button>
                    <Button
                        onClick={
                            counterCard >= stack.length
                                ? onOpen
                                : incrementCounterCard
                        }
                        marginLeft={"36px"}
                        width={"72px"}
                        height={"72px"}
                        borderColor={"primary.50"}
                        borderRadius={"100px"}
                        backgroundColor={"primary.50"}
                        textColor={"primary.0"}
                        variant={"unstyled"}
                        _hover={{
                            backgroundColor: "primary.40",
                        }}>
                        <ArrowForwardIcon />
                    </Button>
                </Flex>
                <Button
                    display={{ base: "none", md: "block" }}
                    onClick={
                        counterCard >= stack.length
                            ? onOpen
                            : incrementCounterCard
                    }
                    borderColor={"primary.50"}
                    borderRadius={"100px"}
                    backgroundColor={"primary.50"}
                    textColor={"primary.0"}
                    variant={"unstyled"}
                    _hover={{
                        backgroundColor: "primary.40",
                    }}>
                    <ArrowForwardIcon />
                </Button>
                <Dialog
                    isOpen={isOpen}
                    onClose={onClose}
                    header={"Thank You!"}
                    content={
                        "Thank you for using this app! We hope that you like this app! If you want to support us further, please enter your email into a waiting list so that we can get you on an early access to our app! Hope to see you again someday!"
                    }
                    buttonOneText={"Close"}
                    buttonTwoText={"Sign Up"}
                    buttonTwoLink={"https://weflect-id.com#waitlist"}
                />
            </Flex>
        </Flex>
    );
}

export default SplashScreen(Home);
