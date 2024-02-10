import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../components/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box bg="background" minHeight="100vh">
      <Header />
      {children}
    </Box>
  );
};
