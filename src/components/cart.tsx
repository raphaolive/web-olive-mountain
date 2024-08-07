"use client";

import useCart from "@/hooks/useCart";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";

export const Cart = () => {
  const { desiredList } = useCart();

  return (
    <Link href="/checkout">
      <Box
        position="relative"
        bgColor="primary.900"
        color="primary.200"
        p="8px"
        rounded="full"
      >
        {desiredList.length > 0 && (
          <Box
            position="absolute"
            top={-2}
            right={0}
            w="20px"
            h="20px"
            rounded="full"
            bgColor="secondary.100"
            fontSize="xs"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <span>{desiredList.length}</span>
          </Box>
        )}
        <IoCartOutline size={26} />
      </Box>
    </Link>
  );
};
