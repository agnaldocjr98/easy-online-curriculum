import { Button, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button: {
      defaultProps: {
        ...Button.defaultProps,
        size: "sm",
      },
    },
  },
});

export default theme;
