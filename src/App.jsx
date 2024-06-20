import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [crypto,setCrypto] = useState()
  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data)=>{
      setCrypto(data.data.data)
    })
    .catch(()=>{
      console.error("fail")
    })
  },[])

  if (!crypto) return <span>Loading...</span>



  return (
    <>
    <h1>crypto</h1>
    <ol>
      {crypto.map(({id,name,priceUsd}) => (
        <li key={id}>Name: {name} , Price: {priceUsd} </li>
      ))}
    </ol>
    
    
    </>
  )
}

export default App
