import { Container, Text, VStack, HStack, Box, IconButton, Image, Heading, Button } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to WebQuant
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop solution for web analytics and insights.
        </Text>

        <HStack spacing={4} justifyContent="center">
          <IconButton aria-label="Analytics" icon={<FaChartLine />} size="lg" />
          <IconButton aria-label="User Management" icon={<FaUser />} size="lg" />
          <IconButton aria-label="Contact" icon={<FaEnvelope />} size="lg" />
        </HStack>

        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzE3NzY3ODA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Analytics Dashboard" borderRadius="md" />
        </Box>

        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
