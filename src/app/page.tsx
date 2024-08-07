"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import cover1 from "@/assets/banner/cover1.png";
import cover2 from "@/assets/banner/cover2.jpeg";
import cover3 from "@/assets/banner/cover3.jpeg";

import Productcard from "@/components/product-card";
import { products } from "@/utils/products";
import Link from "next/link";
import Carousel from "@/components/carousel";

export default function Home() {
  const slides = [
    {
      img: cover1,
      label: "CAMISETAS ALPHA CO",
      description:
        "Coleção de camistas dry fit de alta resistencia e conforto.",
    },
    {
      img: cover2,
      label: "TODOS OS TREINOS",
      description:
        "Ideal para treinos na academia, crossfit e outros esportes.",
    },
    {
      img: cover3,
      label: "CONFORTO E ESTILO",
      description:
        "As camisetas Raglan são projetadas para proporcionar um conforto máximo.",
    },
  ];

  return (
    <Box as="main" w="100vw" py={6} px={12}>
      <Carousel slides={slides} />
      <Box
        as="section"
        margin="auto"
        textAlign="center"
        color="primary.900"
      >
        <Text color="primary.900" fontWeight="bold" mt="10">
          Atendimento em São Francisco Do Sul
        </Text>
        <Text>
          Se você mora em outra cidade, no momento não podemos enviar seu
          pedido.
        </Text>
      </Box>

      <Box as="section" mt="10" margin="auto">
        <Heading color="primary.400" fontSize="x-large" my={12}>
          Camisetas Disponíveis
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={12}
          px={{ base: 10, md: 20 }}
        >
          {products.map((product) => (
            <GridItem key={product.id}>
              <Link href={`/${product.id}`}>
                <Productcard
                  name={product.name}
                  price={product.price}
                  img={product.img[0]}
                  id={product.id}
                />
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
