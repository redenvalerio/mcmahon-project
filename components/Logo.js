import {useColorModeValue, Img} from "@chakra-ui/react"
import * as React from 'react'

export const Logo = (props) => {
  return (
    <Img 
      src={useColorModeValue("mcmahon-logo.png" , "mcmahon-logo-dark.png")}
    />
  )
}
