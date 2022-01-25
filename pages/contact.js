import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bgColor={"grey.900"}
          color="white"
          borderSize={"1px"}
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4} 
          >
            <Wrap  spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box >
                  <Heading color={useColorModeValue("black", "grey.200")}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue("black", "grey.200")}>
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack justify="flex-start" pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        justifyContent={"flex-start"}
                        width="full"
                        variant="ghost"
                        color={useColorModeValue("black", "grey.200")}
                        _hover={{ border: '2px solid ' }}
                        leftIcon={<MdPhone size="20px" />}>
                          309-546-3213
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="full"
                        justifyContent={"flex-start"}
                        variant="ghost"
                        color={useColorModeValue("black", "grey.200")}
                        _hover={{ border: '2px solid ' }}
                        leftIcon={<MdEmail size="20px" />}>
                        joe@mcmahontrucking.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="full"
                        variant="ghost"
                        color={useColorModeValue("black", "grey.200")}
                        justifyContent={"flex-start"}
                        _hover={{ border: '2px solid' }}
                        leftIcon={<MdLocationOn size="20px" />}>
                        Huntley, IL, United States, Illinois
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      color={useColorModeValue("black", "white")}
                      isRound={true}
                      _hover={{  }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      color={useColorModeValue("black", "white")}
                      size="lg"
                      isRound={true}
                      _hover={{  }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      color={useColorModeValue("black", "white")}
                      isRound={true}
                      _hover={{ }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          color={"black"}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          color={useColorModeValue("black", "white")}
                          bgColor={useColorModeValue("white.500", "gray.800")}
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
