import { useColorMode, Box, Flex, Link, Spacer, IconButton, } from "@chakra-ui/react"
import { useState } from "react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Logo } from "./Logo"
import { NavbarLinks } from "./NavbarLinks"

export default function Navbar() {
	const [display, changeDisplay] = useState('none')
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex>

			<Flex as="navbar" pb="5" align="center" width="full">

				<Box ml="50px" width={["200px", "200px", "300px", "300px"]}>
					<Logo />
				</Box>
				
				<Spacer />

				<NavbarLinks mr="5%" flexDir="row" align="center"
					display={['none', 'none', 'flex', 'flex']}
				/>
				<IconButton
					aria-label="Open Menu"
					mt="10px"
					mr="20px"
					size="lg"
					icon={<HamburgerIcon />}
					display={['flex', 'flex', 'none', 'none']}
					onClick={() => { changeDisplay('flex') }}
				/>
			</Flex>

			<Flex
				w="100vw"
				h="200vh"
				p="5"
				zIndex={20}
				bgColor={colorMode === 'dark' ? "gray.800" : "white"}
				pos="fixed"
				flexDir="column"
				display={display} 
			>
				<Flex justify="flex-end">

					<IconButton
						aria-label="Close Menu"
						mt="7px"
						mr="18px"
						size="lg"
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>

				</Flex>

				<NavbarLinks flexDir="column" align="center" />

			</Flex>

		</Flex>
	)
}