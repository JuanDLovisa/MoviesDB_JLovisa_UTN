import {Suspense} from 'react'
import { Container } from './components/Container'

function App() {

  return (
    <Suspense fallback={<div className="">Cargando...</div>} >
      <Container></Container>
    </Suspense>
    
  )
}

export default App
