import { Box, Flex, Link} from '@chakra-ui/react'
import * as React from 'react'
import NextLink from "next/link"

export const NavbarLinks = (props) => (
	<Flex  {...props}>
		<Box p="3">
			<NextLink href="/" passHref>
				<Link fontSize="2xl">
					About Us
				</Link>
			</NextLink>
		</Box>

		<Box p="3">
			<NextLink href="/">
				<Link fontSize="2xl">
					Service Area
				</Link>
			</NextLink>
		</Box>

		<Box p="3">
			<NextLink href="/">
				<Link fontSize="2xl">
					Servies Offered
				</Link>
			</NextLink>
		</Box>

		<Box p="3">
			<NextLink href="/">
				<Link fontSize="2xl">
					Contact Us
				</Link>
			</NextLink>
		</Box>

		<Box p="3">
			<NextLink href="/">
				<Link fontSize="2xl">
					Employment
				</Link>
			</NextLink>
		</Box>

	</Flex>
)