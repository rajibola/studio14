import {
  Center,
  Flex,
  Image,
  Link,
  Spacer,
  chakra,
  Switch,
  Text,
  FormLabel,
  FormControl,
  Box,
  Select,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavList = [
  {
    route: "/dashboard",
    name: "Dashboard",
  },
  {
    route: "/",
    name: "Resources",
  },
  {
    route: "/toolkit",
    name: "Toolkit",
  },
];

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      w="100%"
      bg="white"
      h="76px"
      boxShadow="0px 4px 20px 0px #0000000F"
      px="70px"
    >
      <Center>
        <Image src={logo} mr="47px" />
        {NavList.map(({ name, route }) => {
          return (
            <Center h="100%" w="127px" pos="relative" key={name}>
              <Link
                _activeLink={{ fontWeight: "bold", color: "blue" }}
                as={RouterLink}
                to={route}
              >
                {name}
              </Link>
              {pathname === route && (
                <ChakraBox
                  pos="absolute"
                  bottom="-1"
                  left="0"
                  right="0"
                  h="4px"
                  bg="blue"
                  layoutId="underline"
                />
              )}
            </Center>
          );
        })}
      </Center>
      <Spacer />
      <Center>
        <Flex alignItems="center" gap="28px">
          <FormControl display="flex" alignItems="center" gap="14px">
            <Switch
              sx={{
                "span.chakra-switch__track": {
                  backgroundColor: "blue",
                },
              }}
              id="isChecked"
              colorScheme="black"
            />
            <FormLabel htmlFor="isChecked" m="0">
              <Text as="b" fontSize="14px">
                Switch to Employee
              </Text>
            </FormLabel>
          </FormControl>
          <Box h="24px" w="2px" bg="border" />
          <Flex flexShrink={0} alignItems="center">
            <Box
              w="33px"
              h="33px"
              borderRadius="33px"
              bg="green"
              alignItems="center"
              display="grid"
              placeItems="center"
            >
              <Text fontSize="12px" fontWeight="800">
                JA
              </Text>
            </Box>
            <Box ml="3">
              <Select
                variant="unstyled"
                fontWeight="bold"
                placeholder="Jonathan"
              />
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Flex>
  );
};
