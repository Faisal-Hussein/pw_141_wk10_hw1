
import Landing from "./components/Landing"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Films from "./components/Films"

export default function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Landing />
      <Films />
      <Footer />
    </div>
  )
}

