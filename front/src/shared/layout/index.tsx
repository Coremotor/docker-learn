import React, { FC, ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "src/shared/layout/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW="container.xl" w="100%" minHeight="100vh">
      <Header />
      <Box h="full">{children}</Box>
    </Container>
  );
};

export default Layout;
