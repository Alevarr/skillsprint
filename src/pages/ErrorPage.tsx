import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Fonts from "../Fonts";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Fonts />
      <Header />
      <Box padding={5}>
        <Heading as="h1" size="md" fontFamily="Ubuntu">
          Oops!
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404 Page Not Found..."
            : "Something went wrong..."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
