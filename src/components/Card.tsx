import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import attachmentIcon from "../assets/attachment.svg";
import pdfIcon from "../assets/pdf.svg";
import videoIcon from "../assets/video.svg";
import VectorAnimation from "./VectorAnimation";

const icons: { [key: string]: string } = {
  pdf: pdfIcon,
  video: videoIcon,
  attachment: attachmentIcon,
};

export interface ICard {
  type: string;
  title: string;
  subtitle: string;
  tag: string;
  color: "red" | "green" | "orange" | "yellow" | "lightBlue";
}
export const CustomCard = ({ title, subtitle, tag, type, color }: ICard) => {
  return (
    <Box
      w="264px"
      h="275px"
      borderRadius="10px"
      border="1px solid #F2F2F2"
      boxShadow="#F2F2F2 0px 2px 8px 0px;"
      p="48px 21px 22.04px 33px"
      position="relative"
      overflow="hidden"
    >
      <VectorAnimation color={color} />
      <Box position="relative" zIndex="999">
        <Image src={icons[type]} />
        <Flex height="81px" alignItems="end">
          <Heading as="h3" fontSize="18px">
            {title}
          </Heading>
        </Flex>
        <Text fontSize="14px" my="13px">
          {subtitle}
        </Text>
        <Grid
          height="27px"
          placeItems="center"
          w="fit-content"
          p="5px 11px"
          bg="#F2F2F2"
          borderRadius="20px"
          ml="-4.44px"
        >
          <Text fontWeight="500" fontSize="12px" color="#222222">
            {tag}
          </Text>
        </Grid>
      </Box>
    </Box>
  );
};
