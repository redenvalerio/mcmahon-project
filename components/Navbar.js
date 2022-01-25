import {
	Divider,
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
	useState,

} from "@chakra-ui/react"

import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';

import {motion} from "framer-motion"

import NextLink from "next/link"


export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const ArrowIcon = motion(Icon)
	const MotionBox = motion(Box)
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

			<Collapse in={isOpen} animateOpacity transitionDuration="200ms">
				<Flex onClick={onToggle} align="center" direction="column" display={{ base: "none", sm: "flex", md: "none", lg: "none" }} w="100vw" >

					<Stack scrollBehavior={"inside"} p={20} h="60vh" w="100%" justify={"flex-start"}  display={{ base: "none", sm: "flex", md: "none", lg: "none" }} direction="column">


						<MotionBox whileDrag={{x:10}} whileHover={{x:10}}>
							<NextLink href="/about" passHref>
								<Link fontSize={"lg"} fontWeight="semibold">About Us</Link>
							</NextLink>
						</MotionBox>


						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/serviceoffered" passHref>
								<Link fontSize={"lg"} fontWeight="semibold"  >Services Offered</Link>
							</NextLink>
						</MotionBox>

						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/contact" passHref>
								<Link fontSize={"lg"} fontWeight="semibold"  >Contact Us</Link>
							</NextLink>
						</MotionBox>

						<Divider />

						<MotionBox whileHover={{ x: 10 }}>
							<NextLink href="/employment" passHref>
								<Link fontSize={"lg"} fontWeight="semibold"  >Employment</Link>
							</NextLink>
						</MotionBox>



					</Stack>
					<Flex justify={"center"}>
						<ArrowIcon
							as={ChevronDownIcon}
							w={20}
							h={20}
							whileHover= {{scale:1.2}}
						/>
					</Flex>

				</Flex>
			</Collapse>
		</Box>
	)
}

const DropdownLink = ({href, text}) => {
	return (
		<NextLink href={href} passHref>
			<Link fontSize={"lg"} fontWeight="semibold">{text}</Link>
		</NextLink>
	)
}

const MobileNav = () => {
	const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack p={10} h="100vh" align={"center"} display={!isOpen ? {base:"none", sm:"flex", md:"none", lg:"none"} : "none"}>
		  <NextLink href="/about" passHref>
			  <Link fontSize={"lg"} fontWeight="semibold" onClick={ () => onToggle()} >About Us</Link>
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
