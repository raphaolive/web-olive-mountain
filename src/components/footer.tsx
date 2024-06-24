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
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      textAlign="center"
      alignItems="center"
      bgColor="secondary.600"
      w="100%"
      mt={20}
      px={12}
      py={6}
      gap={4}
    >
      <Link
        href="https://wa.me/5541995765201?text=Olá,%20tenho%20interesse%20nas%20camisetas%20dry%20fit."
        target="_blank"
      >
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
