import React from "react";
import Link from "next/link";

import { Box, Button, Text } from "@chakra-ui/react";
import { PiInstagramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      as="footer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgColor="secondary.600"
      w="100%"
      mt={20}
      px={12}
      py={6}
    >
      <Link href="https://www.instagram.com/olivemountain3" target="_blank">
        <Box>
          <Button
            variant="untyled"
            color="primary.200"
            leftIcon={<FaWhatsapp size={28} />}
          >
            <Text color="primary.200">Olive Mountain</Text>
          </Button>
          <Button
            variant="untyled"
            color="primary.200"
            leftIcon={<PiInstagramLogo size={28} />}
          >
            <Text color="primary.200">olivemountain3</Text>
          </Button>
        </Box>
      </Link>
      <Text color="primary.200">
        &copy; Todos os direitos reservados | {year}
      </Text>
    </Box>
  );
}
