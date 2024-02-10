import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import searchIcon from "../assets/search.svg";
import { CustomCard } from "../components/Card";
import { CheckListWithTitle } from "../components/CheckListWithTitle";
import { Layout } from "../shared/layout";
import { listWithTitleData } from "../utils/data/listWithTitleData";
import { CustomCardData } from "../utils/data/CustomCardData";

export const ToolkitScreen = () => {
  return (
    <Layout>
      <Center mt="95px" mb="66px">
        <Box textAlign="center" maxWidth="835px">
          <Heading fontWeight="700" fontSize="52px" color="title" mb="23px">
            Toolkit
          </Heading>
          <Text maxW="605px">
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
            vitae congue
          </Text>
          <InputGroup bg="white" mt="51px">
            <InputLeftElement pointerEvents="none" height="100%" left="30px">
              <Image
                src={searchIcon}
                width="26px"
                boxSize="26px"
                objectFit="cover"
              />
            </InputLeftElement>
            <Input
              h="59px"
              pl="71px !important"
              type="tel"
              placeholder="Search by title or keyword"
            />
          </InputGroup>
        </Box>
      </Center>
      <Center mt="95px" mb="66px" bg="white" py="53px">
        <Flex gap="58px">
          <Box w="271px">
            <Heading fontSize="16px" fontWeight="700" mx="21px" color="#3F3F3F">
              Filters
            </Heading>
            <Divider color="#E0E0E0" orientation="horizontal" mt="21.67px" />
            <Flex direction="column" gap="33px" p="18.5px 19px">
              {listWithTitleData.map((data, i) => {
                return <CheckListWithTitle {...data} key={i} />;
              })}
            </Flex>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="37px">
            {CustomCardData.map(({ id, ...data }) => (
              <CustomCard {...data} key={id} />
            ))}
          </Grid>
        </Flex>
      </Center>
    </Layout>
  );
};
