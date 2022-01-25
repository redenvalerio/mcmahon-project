import { Box, Stack, StackDivider,Center,useColorMode } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { SubscribeForm } from './SubscribeForm'

const Footer = () => {

    const { colorMode } = useColorMode()

	return (
        <Box as="footer" bg={colorMode === 'dark' ? "var(--chakra-colors-gray-900)" : "rgba(240,240,240)"} role="contentinfo" mx="auto"  py="12" px={{ base: '4', md: '8' }}>
            <Center>
                <Stack spacing="10" divider={<StackDivider />}>
                <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
                    <Box ml="5%" width={["100px", "100px", "200px", "200px"]}>
                        <Logo />
                    </Box>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '10', md: '20' }}>
                    <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
                    <SubscribeForm width={{ base: 'full', md: 'sm' }} />
                    </Stack>
                </Stack>
                <Stack
                    direction={{ base: 'column-reverse', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Copyright />
                    <SocialMediaLinks />
                </Stack>
                </Stack>
            </Center>
        </Box>
	)
}

export default Footer