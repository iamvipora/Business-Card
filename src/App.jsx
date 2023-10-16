import './App.css'
import Info from './components/Info.jsx'
import Details from './components/Details.jsx'
import Footer from './components/Footer.jsx'
import data from './components/About_Interest.jsx'

function App() {
  const detailSection = data.map(item => {
    return (
        <Details
            {...item}
        />
    )
})  
  return (
    <>
      <div className='business-card'>
        <Info />
        {detailSection}
        <Footer />
      </div>
    </>
  )
}

export default App
