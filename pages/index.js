import { Heading, Text, Flex } from "@chakra-ui/react"
import DarkModeSwitch from "../components/DarkModeSwitch"
import Footer from "../components/Footer"

export default function Index() {
  return (
    <Flex p="8" wrap="wrap" align="center" direction="column">
      <DarkModeSwitch/>
      <Heading>
        Using Chakra UI with NextJS
      </Heading>
      <Text>
        Test Index Page
      </Text>
      <Footer/>
    </Flex>
  )
}
