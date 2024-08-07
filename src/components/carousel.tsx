import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import CustomHeading from "./custom-heading";
type Slides = {
  img: StaticImageData;
  label: string;
  description: string;
};

type Props = {
  slides: Slides[];
};

export const arrowStyles = {
  cursor: "pointer",
  top: "50%",
  width: "auto",
  marginTop: "-22px",
  padding: "16px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
};

export default function Carousel({ slides }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides?.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="500px" w="full" {...carouselStyle}>
          {slides?.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Box pos="absolute" w="100%" h="500px">
                <Image
                  src={slide.img}
                  alt="carousel image"
                  fill
                  objectFit="cover"
                />
              </Box>
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bgGradient="linear(to-t, rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0))"
                zIndex="1"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
                zIndex="2"
              >
                <CustomHeading
                  bold={slide.label}
                  color="teal"
                  letterSpacing={{ base: 1, md: 20, lg: 30 }}
                  fontSize={{ base: "lg", md: "xl", lg: "xx-large" }}
                />
                <Text fontSize="lg" color="primary.200">
                  {slide.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text
          position="absolute"
          {...arrowStyles}
          left="0"
          onClick={prevSlide}
          zIndex="3"
        >
          &#10094;
        </Text>
        <Text
          position="absolute"
          {...arrowStyles}
          right="0"
          onClick={nextSlide}
          zIndex="3"
        >
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
}
