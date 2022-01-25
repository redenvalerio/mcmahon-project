import { Heading, Text, Flex } from "@chakra-ui/react"
import Footer from "../components/Footer"

export default function Index() {
  return (
    <Flex p="8" wrap="wrap" align="center" direction="column">
      <Heading>
        Using Chakra UI with NextJS
      </Heading>
      <Text>
        Test Index Page
        Test Test
      </Text>
      <Footer/>
    </Flex>
  )
}
