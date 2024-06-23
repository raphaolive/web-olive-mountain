import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    highligh: "teal",
    primary: {
      100: "#fff",
      200: "#E8E8E8",
      300: "#B9C2C4",
      400: "#6D6D6D",
      600: "#3D3D3D",
      700: "#2A2E30",
      800: "#292929",
      900: "#000",
    },
    secondary: {
      100: "#5E7279",
      200: "#506369",
      300: "#415157",
      400: "#334247",
      500: "#29373B",
      600: "#253439",
    },
    error: "#FF3131",
    sucess: "#4C9471",
  },

  components: {
    Text: {
      baseStyle: {
        color: "#6D6D6D",
      },
    },
    Button: {
      variants: {
        cta: {
          bgColor: "primary.800",
          color: "primary.200",
          _hover: { backgroundColor: "#3D3D3D" },
        },
      },
    },
  },

  styles: {
    global: {
      body: {
        overflowX: "hidden",
      },
      "&::-webkit-scrollbar": {
        width: "1vh",
        background: "primary.700",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "secondary.100",
        borderRadius: "30px",
      },
    },
  },
});

export default theme;
