import {Link, Flex} from '@chakra-ui/react'
import NextLink from "next/link"

export default function NavItem({href, text, fontSize }){
	return(
		<Flex>
			<NextLink href={href}>
				<Link fontSize={fontSize}>{text}</Link>
			</NextLink>
		</Flex>
	)
}