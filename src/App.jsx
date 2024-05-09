import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <RevenueCard title="Title" orderCount= "10" amount = "5,32,555.51"/>
    </>
  )
}

export default App