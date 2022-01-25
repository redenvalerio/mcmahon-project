import { Heading, Text, Flex } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex p="8" wrap="wrap" align="center" direction="column">
      <Heading>
        Using Chakra UI with NextJS
      </Heading>
      <Text>
        Test Index Page
      </Text>
    </Flex>
  )
}
