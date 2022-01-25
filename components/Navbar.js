import {
	Divider,
	Img,
	Flex,
	Collapse,
	IconButton,
	Box,
	Link,
	Stack,
	useColorModeValue,
	useDisclosure,

} from "@chakra-ui/react"

import {
	HamburgerIcon,
	CloseIcon,
} from '@chakra-ui/icons';

import { motion } from "framer-motion"

import NextLink from "next/link"


export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const MotionBox = motion(Box)
	return (
		<Box>
			<Stack
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 10 }}
				direction={["column", "row", "column", "row"]}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}>

				<Flex minW="100px" maxW="200px" flex={{ base: 1 }} justify='start'>
					<Img p={1}
						src={useColorModeValue('mcmahon-logo.png', 'mcmahon-logo-dark.png')} />
				</Flex>

				<Stack
					justify="flex-end"
					flex={{ base: 1, md: 'auto' }}
					display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
					direction="row"
					align="center"
					spacing={6}>




					<NextLink href="/" passHref>
						<Link >Home</Link>
					</NextLink>

					<NextLink href="/about" passHref>
						<Link  >About Us</Link>
					</NextLink>

					<NextLink href="/servicearea" passHref>
						<Link   >Service Area</Link>
					</NextLink>

					<NextLink href="/serviceoffered" passHref>
						<Link   >Services Offered</Link>
					</NextLink>

					<NextLink href="/contact" passHref>
						<Link  >Contact Us</Link>
					</NextLink>

					<NextLink href="/employment" passHref>
						<Link  >Employment</Link>
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
			</Stack>



			<Flex onClick={onToggle} direction="column" align="center" w="100%">
				<Collapse in={isOpen} animateOpacity transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}>

					<Stack spacing={2} height="100vh"p={10} justify={"flex-start"} direction="column" display={["flex", "flex", "none"]} >

						<MotionBox  whileHover={{ x: 10 }} >
							<NextLink href="/" passHref>
								<Link fontSize={"md"} fontWeight="semibold">Home</Link>
							</NextLink>
						</MotionBox>


						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/about" passHref>
								<Link fontSize={"md"} fontWeight="semibold">About Us</Link>
							</NextLink>
						</MotionBox>


						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/serviceoffered" passHref>
								<Link fontSize={"md"} fontWeight="semibold"  >Services Offered</Link>
							</NextLink>
						</MotionBox>

						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/contact" passHref>
								<Link fontSize={"md"} fontWeight="semibold"  >Contact Us</Link>
							</NextLink>
						</MotionBox>

						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/employment" passHref>
								<Link fontSize={"md"} fontWeight="semibold"  >Employment</Link>
							</NextLink>
						</MotionBox>

					</Stack>

				</Collapse>



			</Flex>
		</Box>
	)
}

const MobileNav = () => {
	const { isOpen, onToggle } = useDisclosure()
	return (
		<Stack p={10} h="100vh" align={"center"} display={!isOpen ? { base: "none", sm: "flex", md: "none", lg: "none" } : "none"}>
			<NextLink href="/about" passHref>
				<Link fontSize={"lg"} fontWeight="semibold" onClick={() => onToggle()} >About Us</Link>
			</NextLink>

			<NextLink href="/serviceoffered" passHref>
				<Link fontSize={"lg"} fontWeight="semibold"  >Services Offered</Link>
			</NextLink>

			<NextLink href="/contact" passHref>
				<Link fontSize={"lg"} fontWeight="semibold"  >Contact Us</Link>
			</NextLink>

			<NextLink href="/employment" passHref>
				<Link fontSize={"lg"} fontWeight="semibold"  >Employment</Link>
			</NextLink>
		</Stack>
	);
};
