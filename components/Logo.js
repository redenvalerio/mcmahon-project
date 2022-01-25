import { useToken } from '@chakra-ui/react'
import { useColorMode, IconButton } from "@chakra-ui/react";
import * as React from 'react'
import { Img } from '@chakra-ui/react'


export const Logo = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Img 
      src={colorMode === 'dark' ? "mcmahon-logo-dark.png" : "mcmahon-logo.png"}
    />
  )
}
