import { ButtonGroup, IconButton} from '@chakra-ui/react'
import * as React from 'react'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaFacebook fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
  </ButtonGroup>
)

