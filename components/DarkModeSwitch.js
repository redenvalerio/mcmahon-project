import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<IconButton 
			aria-label="Toggle Dark Switch"
			bg={colorMode === 'dark' ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}
			icon={colorMode === 'dark' ? <MoonIcon/> : <SunIcon/>}
			onClick={toggleColorMode}
		/>	
	)
}
	
export default DarkModeSwitch