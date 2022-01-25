import { Text } from '@chakra-ui/react'
import * as React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} McMahon, Inc. All rights reserved.
  </Text>
)