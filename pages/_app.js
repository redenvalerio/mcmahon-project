import { ChakraProvider, Box} from "@chakra-ui/react"
import Footer from "../components/Footer"
import { FloatingSwitch } from "../components/FloatingSwitch"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <FloatingSwitch/>
    </ChakraProvider>
  )
}

export default MyApp
