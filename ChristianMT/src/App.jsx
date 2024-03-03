import { Route, Routes } from 'react-router-dom'
import Accueil from './Pages/Accueil'
import Projects from './Pages/Projects'
import DetailProject from './Pages/DetailProject'

function App() {
  return (
    <>
    <div> Bonjour</div>
      <Routes>
      <Route path="/" element={<Accueil/>}></Route>
      <Route path='/projects' element={<Projects/>}>
        <Route path='/projects/:id' element={<DetailProject/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
