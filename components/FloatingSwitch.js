import {Box,} from "@chakra-ui/react"
import DarkModeSwitch from "./DarkModeSwitch"

export const FloatingSwitch = () => 
{
	return (
		<Box position="fixed"
			bottom="1%"
			right="1%"
			mr="1%"
			mb="1%"
            zIndex={10}
		>
			<DarkModeSwitch/>
		</Box>
	)
}