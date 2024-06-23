import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/assets/logo-no-name.png";
import { Cart } from "./cart";
import Link from "next/link";
import CustomHeading from "./custom-heading";

export default function Header() {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor="primary.800"
      w="100vw"
      py={4}
      px={12}
      gap={8}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          style={{ borderRadius: "10px" }}
        />
      </Link>
      <CustomHeading
        bold="OLIVE"
        thin="MOUNTAIN"
        color="primary.200"
        letterSpacing={{ base: 10, md: 20, lg: 30 }}
        fontSize={{ base: "sm", md: "md" }}
      />
      <Cart />
    </Box>
  );
}
