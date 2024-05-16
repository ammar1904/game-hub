import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../entities/Platform";

interface Props {
  title: string;
  platforms: Platform[];
}

const GameAttribute = ({ title, platforms }: Props) => {
  return (
    <Box marginTop={5}>
      <Text color="gray" fontWeight="bold" size="xs">
        {title}
      </Text>
      <Stack direction="column" spacing={-1}>
        {platforms.map((platform) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Stack>
    </Box>
  );
};

export default GameAttribute;
