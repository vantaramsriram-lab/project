import React from 'react'
import RequestList from './components/RequestList'
import RequestForm from './components/RequestForm'
import { useState } from 'react'
const Home = () => {
  const [form, setForm] = useState(false);
  return (
    <div className='min-h-screen flex flex-col p-10 items-center'>
      <p className='text-5xl'>Feature Request Form</p>
      <button onClick={() => {
        setForm(true)
      }}>Add Request</button>
      {form && <RequestForm setForm={setForm} />}
      <RequestList />
    </div>
  )
}

export default Home
