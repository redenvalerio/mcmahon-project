import { Heading, Text, Flex } from "@chakra-ui/react"
import DarkModeSwitch from "../components/DarkModeSwitch"

export default function Index() {
  return (
    <Flex p="8" wrap="wrap" align="center" direction="column">
      <DarkModeSwitch/>
      <Heading>
        Using Chakra UI with NextJS
      </Heading>
      <Text>
        Test Index Page
        Test Test
      </Text>
    </Flex>
  )
}
