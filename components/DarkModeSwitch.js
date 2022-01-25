import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<IconButton 
			aria-label="Toggle Dark Switch"
			bg={colorMode === 'dark' ? "gray.800" : "white"}
			icon={useColorModeValue(<SunIcon/>,<MoonIcon/>)}
			size="lg"
			onClick={toggleColorMode}
		/>	
	)
}
	
export default DarkModeSwitch