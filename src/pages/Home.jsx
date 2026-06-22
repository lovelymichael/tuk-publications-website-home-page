import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import BookSlider from '../components/BookSlider'
import SalientFeatures from '../components/SalientFeatures'
import PublishedBooks from '../components/PublishedBooks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <BookSlider />
      <SalientFeatures />
      <PublishedBooks />
      <Footer />
    </>
  )
}

export default Home