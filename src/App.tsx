import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import RoutePath from './routes/RoutePath'
import { ErrorBoundary } from './components/ErrorBoundary'

const App = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <RoutePath />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
