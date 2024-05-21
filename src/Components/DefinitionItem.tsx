import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children?: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Text as="dt" fontSize="md" color="gray.600">
        {term}
      </Text>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
