import { Box, Flex, Heading } from "@chakra-ui/react";
import { CustomCheck } from "../components/CustomCheck";

export const CheckListWithTitle = ({
  title,
  list,
}: {
  title: string;
  list: string[];
}) => {
  return (
    <Box>
      <Heading
        lineHeight="34.66px"
        mb="19.52px"
        fontWeight="700"
        fontSize="16px"
      >
        {title}
      </Heading>
      <Flex direction="column" gap="6px">
        {list.map((item) => {
          return <CustomCheck text={item} value={item} />;
        })}
      </Flex>
    </Box>
  );
};
