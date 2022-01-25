import { HStack, Box, Text, Flex, Link, Spacer, Button } from "@chakra-ui/react"
import NextLink from "next/link"
import DarkModeSwitch from "../components/DarkModeSwitch"
import Logo from "../public/mcmahon-logo.png"

export default function Navbar() {
	return (
		<Flex p="5">
			<Box>LOGO</Box>
			<Spacer/>
			<Flex>
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