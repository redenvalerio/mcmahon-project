import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
