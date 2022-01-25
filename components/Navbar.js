import { useColorMode, Box, Flex, Link, Spacer, IconButton,} from "@chakra-ui/react"
import { useState } from "react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Logo } from "./Logo"
import { NavbarLinks } from "./NavbarLinks"

export default function Navbar() {
	const [display, changeDisplay] = useState('none')
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex as="navbar" pb="5" align="center">
			<Box ml="5%" width={["200px", "200px", "300px", "300px"]}>
				<Logo />
			</Box>
			<Spacer />
			<NavbarLinks mr="5%" flexDir="row" align="center"
				display={['none', 'none', 'flex', 'flex']}
			/>
			<IconButton
				aria-label="Open Menu"
				mr="5%"
				size="lg"
				icon={<HamburgerIcon />}
				display={['flex', 'flex', 'none', 'none']}
				onClick={() => { changeDisplay('flex')}}
			/>

			<Flex
				w="100vw"
				h="100vh"
				zIndex={20}
				bgColor={colorMode === 'dark' ? "gray.800" : "white"}
				pos="fixed"
				top="0"
				left="0"
				overflow="auto"
				flexDir="column"
				display={display}
			>
				<Flex justify="flex-end" mb="10%">
					<IconButton
						aria-label="Close Menu"
						mt="4%"
						mr="8%"
						size="lg"
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>

				</Flex>
				<NavbarLinks flexDir="column" align="center"/>
			</Flex>
		</Flex>
	)
}