import { Box, Button, Card, CardBody, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  price: string;
  id: string;
  img: StaticImageData;
};

export default function Productcard({ name, price, img, id }: Props) {
  return (
    <Card
      bg="primary.200"
      boxShadow="md"
      cursor="pointer"
      margin="auto"
      _hover={{
        boxShadow: "xl",
      }}
      transition="ease-in-out 0.2s"
    >
      <CardBody>
        <Box position="relative" mb="10px">
          <Image src={img} alt="produto" />
        </Box>
        <Box
          display="flex"
          mt={6}
          gap={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text color="primary.500" lineHeight="1" maxW="200px">
            {name}
          </Text>
          <Text fontWeight="bold" fontSize="xl" color="primary.800">
            R${price}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}
