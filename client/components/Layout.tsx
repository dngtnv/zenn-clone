import { AuthProvider } from '../context/AuthProvider'
import Footer from './Footer'
import Header from './Header'
// import Navbar from "./Navbar"

const Layout = ({ children }: any) => {
  return (
    <AuthProvider>
      <div>
        <Header />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default Layout
