import React from "react";

import { Flex, Text, Divider, useColorMode, Box } from "@chakra-ui/react";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex h={20} p={5} justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">TODO_APP</Text>
        <Text fontWeight="normal" onClick={toggleColorMode} cursor="pointer">
          SWITCH THEME
        </Text>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Header;
