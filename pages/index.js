import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import Hero from "../components/Hero"
export default function Index() {
  return (
    <Flex p="8" wrap="wrap" align="center" direction="column">
      <Box>
        <Hero/>
      </Box>
    </Flex>
  )
}
