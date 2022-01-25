import { ChakraProvider, Box} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FloatingSwitch } from "../components/FloatingSwitch"
import NavbarImproved from "../components/NavbarImproved"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavbarImproved/>
      <Component {...pageProps} />
      <Footer/>
      <FloatingSwitch/>
    </ChakraProvider>
  )
}

export default MyApp
