import { Container, Text, VStack, Heading } from "@chakra-ui/react";
import ChatBox from "../components/ChatBox.jsx";

const QuantApp = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Quant App
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to the Quant App page.
        </Text>
        <ChatBox />
      </VStack>
    </Container>
  );
};

export default QuantApp;
