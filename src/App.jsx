import { useState,useEffect } from 'react'
import Formulario from './components/Formulario'
import Respuesta from './components/Resultado'
import clienteAxios from './config/axios'

function App() {

  const [code, saveCode] = useState('')
  const [res, saveRes] = useState({})

  useEffect(() => {
    const consultarAPI = async () => {
      console.log(code)
      const resultado = await clienteAxios.post('/api/code',code);
      console.log(resultado);
      saveRes(resultado);
    }
    return () => {
      
    }
  }, [code])


  return (
    <>
      <Formulario 
      saveCode = {saveCode}
      />

      <Respuesta 
        res = {res}
      />
    </>
  )
}

export default App
