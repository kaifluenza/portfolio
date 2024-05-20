import { background, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const styles = {
    global: {
        body: {
          bg: 'linear-gradient(to right, #e0f7fa, #f1f8e9, #ffe0b2, #ffccbc)',
          color:"gray.600",
        },
      },
}

const theme = extendTheme({styles});

export default theme;