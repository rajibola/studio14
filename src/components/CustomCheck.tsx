import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";

export const CustomCheck = ({ text }: { text: string; value: string }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <Flex
      gap="12.12px"
      alignItems="center"
      onClick={() => setChecked(!isChecked)}
      cursor="pointer"
      w="fit-content"
    >
      <Grid
        w="17px"
        h="16px"
        border="1px solid #E0E0E0"
        borderRadius="1.65px"
        placeItems="center"
      >
        {isChecked ? (
          <Box w="13px" h="12px" borderRadius="1.65px" bg="#3F3F3F" />
        ) : null}
      </Grid>
      <Text fontSize="16px" lineHeight="26.08px" fontWeight="400">
        {text}
      </Text>
    </Flex>
  );
};
