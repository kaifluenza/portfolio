import { background, extendTheme } from "@chakra-ui/react";

const styles = {
    bgGradient: "linear(red.100 0%, orange.100 25%, yellow.100 50%)"
}

const theme = extendTheme({styles});

export default theme;