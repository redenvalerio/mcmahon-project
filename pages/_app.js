import { ChakraProvider, Box} from "@chakra-ui/react"
import Footer from "../components/Footer"
import { FloatingSwitch } from "../components/FloatingSwitch"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <FloatingSwitch/>
    </ChakraProvider>
  )
}

export default MyApp
