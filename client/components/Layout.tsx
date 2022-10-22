import Footer from './Footer'
import Header from './Header'
// import Navbar from "./Navbar"

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
