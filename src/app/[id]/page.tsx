"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import ProductCarousel from "@/components/product-carousel";
import { products } from "@/utils/products";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import medidas from "@/assets/products/medidas.jpg";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function Product() {
  const [tabIndex, setTabIndex] = useState(0);

  const description = [
    {
      topic: "TECIDO DRY FIT",
      description:
        "O tecido Dry Fit é a tecnologia perfeita para treinos na academia, crossfit e outros esportes. Ele proporciona conforto e segurança, ajudando a manter a temperatura corporal ideal durante suas atividades físicas.",
    },
    {
      topic: "MODELAGEM",
      description:
        "Eleve seu estilo com as camisetas da nova coleção Rust'. Essas camisetas oferecem o máximo conforto e liberdade de movimento, sendo ideais para esportes e atividades físicas. A coleção 'Rust' combina elegância moderna com leveza, capturando uma vibe sofisticada e sutil para o seu guarda-roupa. Escolha sua camiseta e mergulhe nessa atmosfera única!",
    },
    {
      topic: "TECNOLOGIA",
      description:
        "O tecido Dry Fit é altamente respirável, permitindo que o ar circule livremente através da roupa. Isso ajuda a regular a temperatura corporal, evitando o superaquecimento e mantendo o corpo fresco.",
    },
    {
      topic: "IDEAL PARA SUA PERFORMANCE",
      description:
        "Independentemente da sua atividade, esta camiseta foi projetada para aumentar sua performance em treinos de alta e baixa intensidade. Prepare-se para um treino como nunca viu antes.",
    },
  ];

  const { id } = useParams();
  const product = products.filter((item) => item.id === id)[0];
  return (
    <Box as="main" minH="90vh" px={12}>
      <Box maxW="1380px" margin="auto">
        <Breadcrumb spacing="10px" my={10} separator={<BiChevronRight />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Catalogo</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" color="primary.400">
              {product.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <ProductCarousel img={product.img} />
          <Box display="flex" flexDir="column" gap={6}>
            <Heading color="secondary.100" lineHeight="1" fontSize="xx-large">
              {product.name}
            </Heading>
            <UnorderedList>
              <ListItem>
                <Text>Modelagem: Raglan</Text>
              </ListItem>
              <ListItem>
                <Text>Silk: New Tenacity</Text>
              </ListItem>
              <ListItem>
                <Text>Composição: 100% Poliéster</Text>
              </ListItem>
            </UnorderedList>
            <Text fontWeight="bold" fontSize="xl" color="teal">
              <span
                style={{
                  textDecoration: "line-through",
                  fontWeight: "normal",
                  color: "gray",
                }}
              >
                R$ 42.90
              </span>{" "}
              R$ {product.price}
            </Text>
            <ButtonGroup>
              <Button
                variant="cta"
                size={{ base: "sm", md: "lg" }}
                rightIcon={<FaWhatsapp size="24px" />}
              >
                <Link
                  href={`https://wa.me/5541995765201?text=Olá,%20tenho%20interesse%20na${encodeURIComponent(
                    product.name
                  )}.`}
                  target="_blank"
                >
                  Comprar
                </Link>
              </Button>
              {/* <Button
                variant="outline"
                colorScheme="gray"
                size={{ base: "sm", md: "lg" }}
                rightIcon={<CgAdd size="24px" />}
              >
                Adicionar na lista
              </Button> */}
            </ButtonGroup>
          </Box>
        </Flex>
        <Divider my={5} />
        <Flex direction="column" maxW="800px">
          {description.map((item, index) => (
            <Box key={`descricao-${index}`} mt={10}>
              <Heading fontSize="xl" color="primary.600" letterSpacing={6}>
                {item.topic}
              </Heading>
              <Text>{item.description}</Text>
            </Box>
          ))}
          <Box mt={16}>
            <Image src={medidas} alt="medidas" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
