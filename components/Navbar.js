import { useColorMode, HStack, Box, Text, Flex, Link, Spacer, Button, Img} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import DarkModeSwitch from "../components/DarkModeSwitch"

export default function Navbar() {
	const { colorMode } = useColorMode()
	const LightModeLogo = "mcmahon-logo.png"
	const DarkModeLogo = "mcmahon-logo-dark.png"
	return (
		<Flex p="5">
			<Img ml="10" w="20%" src={colorMode === 'dark' ? DarkModeLogo : LightModeLogo} />
			<Spacer/>
			<Flex mb="10">
				{/* Navbar links */}
				<HStack>
					<NextLink href="/">
						<Button>
							About Us
						</Button>
					</NextLink>

					<NextLink href="/">
						<Button>
							Service Area
						</Button>
					</NextLink>

					<NextLink href="/">
						<Button>
							Services Offered
						</Button>
					</NextLink>

					<NextLink href="/">
						<Button>
							Contact Us
						</Button>
					</NextLink>

					<NextLink href="/">
						<Button>
							Employment
						</Button>
					</NextLink>

				<DarkModeSwitch/>
				</HStack>
			</Flex>

		</Flex>
	)
}