import { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'

function App() {
  const { register, handleSubmit } = useForm()
  const [message, setMessage] = useState("")

  const onSubmit = async(data) => {
    try {
      const response = await axios.post('http://localhost:3000/order', data)
      setMessage(response.data.message||"Order placed successfully");
    } catch (error) {
      setMessage(error.response?.data?.message || "Order failed");
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>Place Order</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{marginBottom: "10px"}}>
          <label>Product ID:</label>
          <input type='text' {...register("productId",{required: true})} />
        </div>
        <div style={{marginBottom: "10px"}}>
          <label>Quantity:</label>
          <input type="number" {...register("quantity",{required: true})} />
        </div>
        <button type="submit">Order</button>
      </form>
      {message && <p style={{marginTop:"10px", color:"green"}}>{message}</p>}
    </div>
  )
}

export default App
