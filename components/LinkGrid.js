import { Box, Link, SimpleGrid, Stack,Center } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Center>
      <Box minW="130px">
        <FooterHeading mb="4">Product</FooterHeading>
        <Stack>
          <Link>How it works</Link>
          <Link>Pricing</Link>
          <Link>Use Cases</Link>
        </Stack>
      </Box>
    </Center>
    <Center>
      <Box minW="130px">
        <FooterHeading mb="4">Legal</FooterHeading>
        <Stack>
          <Link>Privacy</Link>
          <Link>Terms</Link>
          <Link>License</Link>
        </Stack>
      </Box>
    </Center>
  </SimpleGrid>
)