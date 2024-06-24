import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import whatsAppBallon from "@/assets/whatsappBallon.svg";
import Link from "next/link";

export function WhatsappBallon() {
  return (
    <Box position="fixed" right="2" bottom="40" zIndex={1}>
      <Link
        href={
          "https://wa.me/5541995765201?text=Olá,%20tenho%20interesse%20nas%20camisetas%20dry%20fit."
        }
        target="_blank"
      >
        <Box
          position="relative"
          height={{
            base: "40px",
            lg: "50px",
          }}
          width={{
            base: "40px",
            lg: "50px",
          }}
        >
          <Image
            src={whatsAppBallon}
            layout="fill"
            objectFit="contain"
            alt="whats app icon"
          />
        </Box>
      </Link>
    </Box>
  );
}
