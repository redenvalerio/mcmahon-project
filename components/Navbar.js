import { useColorMode, HStack, VStack, Box, Text, Flex, Link, Spacer, Button, Img, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import DarkModeSwitch from "../components/DarkModeSwitch"
import { Logo } from "./Logo"

export default function Navbar() {
	const { colorMode } = useColorMode()
	const LightModeLogo = "mcmahon-logo.png"
	const DarkModeLogo = "mcmahon-logo-dark.png"
	const [display, changeDisplay] = useState('none')
	return (
		<Flex align="center" mt="2%">
			<Box ml="5%" width={["200px", "200px", "300px", "300px"]}>
				<Logo />
			</Box>

			<Spacer />

			<Flex
				mr="5%"
				mb="20px"
				display={['none', 'none', 'flex', 'flex']}
			>

				{/* Navbar links */}
				<Flex>
					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								About Us
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Service Area
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Servies Offered
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Contact Us
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Employment
							</Link>
						</NextLink>
					</Box>

				</Flex>

			</Flex>

			<IconButton
				aria-label="Open Menu"
				mt="5%"
				mr="5%"
				size="md"
				icon={<HamburgerIcon />}
				display={['flex', 'flex', 'none', 'none']}
				onClick={() => changeDisplay('flex')}
			/>

			<Flex
				w="100vw"
				h="100vh"
				zIndex={20}
				bgColor="gray.700"
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
						mt="5%"
						mr="5%"
						size="md"
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>

				</Flex>

				<Flex flexDir="column" align="center">
					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								About Us
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Service Area
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Servies Offered
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Contact Us
							</Link>
						</NextLink>
					</Box>

					<Box p="3">
						<NextLink href="/">
							<Link fontSize="xl">
								Employment
							</Link>
						</NextLink>
					</Box>


			</Flex>

			</Flex>

		</Flex>
	)
}