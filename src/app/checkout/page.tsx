"use client";

import BasicPage from "@/components/basic-page";
import useCart from "@/hooks/useCart";
import { Product } from "@/utils/products";
import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Checkout() {
  const { desiredList } = useCart();

  if (!desiredList.length) {
    return (
      <BasicPage title="Lista vazia">
        <Text>Sua lista de produtos está vazia. Adicione novos items.</Text>
      </BasicPage>
    );
  }

  return (
    <BasicPage title="Produtos selecionados">
      <HStack justifyContent="space-between">
        <Heading>Produtos selecionados</Heading>
        <Button
          variant="cta"
          size={{ base: "sm", md: "lg" }}
          rightIcon={<FaWhatsapp size="24px" />}
        >
          Enviar pedido
        </Button>
      </HStack>
      <Flex direction="column" mt={10} gap={4}>
        {desiredList.map((product) => {
          return (
            <>
              <HStack
                key={`checkout-item-${product.id}`}
                p="10"
                w="full"
                justifyContent="space-between"
              >
                <HStack gap={12}>
                  <Image
                    src={product.img[0]}
                    alt="Imagem do produto"
                    width={200}
                    height={200}
                  />
                  <Box>
                    <Text
                      fontSize="large"
                      fontWeight="bold"
                      color="primary.900"
                    >
                      {product.name}
                    </Text>
                    <Text fontSize="large" color="primary.900">
                      R$ {product.price}
                    </Text>
                  </Box>
                </HStack>
                <HStack>
                  <Text>Quantidade:</Text>
                  <span>4</span>
                </HStack>
              </HStack>
            </>
          );
        })}
      </Flex>
    </BasicPage>
  );
}
