import {Suspense} from 'react'
import { Container } from './components/Container'

function App() {

  return (
    <div className="min-h-screen text-center bg-gray-900 text-white">
      <Suspense fallback={<div className="p-8 text-7xl">Cargando...</div>} >
        <Container />
      </Suspense>
    </div>
  )
}

export default App
