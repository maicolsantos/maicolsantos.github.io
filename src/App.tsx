import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Uses } from './pages/Uses'

export const App = () => {

  return (
    <>
    <Routes>
      <Route index path='/' element={<Home />}/>
      <Route path="/uses" element={<Uses />} />
    </Routes>
    </>
  )
}
