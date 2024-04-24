import React, { Component } from "react";
import Logo from "../assets/Logogram.png";
import { Flex } from "@chakra-ui/react";
import SplashAnimation from "./SplashAnimation";

function SplashMessage() {
    return (
        <Flex
            width={"100vw"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            bgColor={"primary.0"}>
            <SplashAnimation></SplashAnimation>
        </Flex>
    );
}

export default function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 5000);
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}
