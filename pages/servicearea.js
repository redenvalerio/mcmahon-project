import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import ServiceArea from "../components/ServiceArea"

export default function Index() {
  return (
    <Flex p="8" wrap="wrap" align="center" direction="column">
      <Box h="100vh">
        <Heading>
          <ServiceArea/>
        </Heading>
      </Box>
    </Flex>
  )
}
