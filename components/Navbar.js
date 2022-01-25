import {
	Text,
	Img,
	Flex,
	Collapse,
	Box,
	Link,
	Icon,
	Stack,
	Button,
	useColorModeValue,
	useBreakpointValue,
	IconButton,
	useDisclosure,

} from "@chakra-ui/react"

import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';

import NextLink from "next/link"


export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 10 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}>
				<Flex flex={{ base: 1 }} justify='start'>
					<Img p={1} maxH={"150px"} minW={"150px"}
						src={useColorModeValue('mcmahon-logo.png', 'mcmahon-logo-dark.png')} />
				</Flex>

				<Stack
					justify="flex-end"
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
					direction="row" 
					spacing={6}>

					<NextLink href="/about" passHref>
						<Link fontSize={{base:'30px', sm: '5px', md:'15px', lg:'23px'}} >About Us</Link>
					</NextLink>

					<NextLink href="/servicearea" passHref>
						<Link fontSize={{base:'30px', sm: '5px', md:'15px', lg:'23px'}} >Service Area</Link>
					</NextLink>

					<NextLink href="/serviceoffered" passHref>
						<Link fontSize={{base:'30px', sm: '5px', md:'15px', lg:'23px'}} >Services Offered</Link>
					</NextLink>

					<NextLink href="/contact" passHref>
						<Link fontSize={{base:'30px', sm: '5px', md:'15px', lg:'23px'}} >Contact Us</Link>
					</NextLink>

					<NextLink href="/employment" passHref>
						<Link fontSize={{base:'30px', sm: '5px', md:'15px', lg:'23px'}} >Employment</Link>
					</NextLink>

				</Stack>

				<Flex
					justify="flex-end"
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
			</Collapse>
		</Box>
	)
}