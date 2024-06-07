import { Box, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
      <VStack spacing={4} align="stretch">
        <Box height="200px" overflowY="scroll" borderWidth="1px" borderRadius="md" p={2}>
          {messages.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </Box>
        <HStack>
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <Button onClick={handleSend} colorScheme="teal">
            Send
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatBox;
