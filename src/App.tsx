import './styles/app.scss'
import { Background } from './components'
import { Layout } from './layout'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Background />
      <Layout />
      <Footer />
    </div>
  )
}

export default App
