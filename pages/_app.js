import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FloatingSwitch } from "../components/FloatingSwitch"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <FloatingSwitch/>
    </ChakraProvider>
  )
}

export default MyApp
