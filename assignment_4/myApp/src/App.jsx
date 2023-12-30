import './App.css'


import Navigation from "./Components/Navigation"
import Hero from "./Components/Hero"
import Three_Cards from "./Components/Three_Cards"
import Zigzag_sections from "./Components/Zigzag_sections"
import Three_Cards_footer from "./Components/Three_Cards_footer"
import FooterBanner from "./Components/FooterBanner"
import Footer from "./Components/Footer"


const App = () => {
    return (
        <>
            <Navigation/>
            <Hero/>
            <Three_Cards/>
            <Zigzag_sections/>
            <Three_Cards_footer/>
            <FooterBanner/>
            <Footer/>
        </>
    )
}
export default App;