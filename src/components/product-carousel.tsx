import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { arrowStyles } from "./carousel";

type Props = {
  img: StaticImageData[];
};

export default function ProductCarousel({ img }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = img?.length;

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
        <Flex
          h={{ base: "300px", md: "500px", xl: "700px" }}
          w="full"
          {...carouselStyle}
        >
          {img?.map((img, sid) => (
            <Box key={`img-${sid}`} boxSize="full" shadow="md" flex="none">
              <Box pos="absolute" w="100%" h="100%">
                <Image src={img} alt="carousel image" fill objectFit="cover" />
              </Box>
            </Box>
          ))}
        </Flex>
        <Text
          position="absolute"
          {...arrowStyles}
          left="0"
          onClick={prevSlide}
          color="primary.900"
          backgroundColor="primary.200"
          _hover={{
            backgroundColor: "primary.300",
          }}
        >
          &#10094;
        </Text>
        <Text
          position="absolute"
          {...arrowStyles}
          right="0"
          onClick={nextSlide}
          color="primary.900"
          backgroundColor="primary.200"
          _hover={{
            backgroundColor: "primary.300",
          }}
        >
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
}
