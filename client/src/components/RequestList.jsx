import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const RequestList = () => {
  const [requestsList, setRequestsList] = useState([])
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/requests")
        setRequestsList(response.data.requests)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchRequests();
  }, [])
  const handleEdit = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/requests/${id}`)
      setSuccess(response.data.message)
      setRequestsList([...RequestList, r])
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div className='flex flex-col'>
      {
        requestsList.map((req) => (
          <div key={req._id} className=''>
            <p>{req.title}</p>
            <p>{req.description}</p>
            <p>{req.priority}</p>
            <p>{req.resolved ? "solved" : "Not resolved"}</p>
            <button onClick={() => {
              handleEdit(req._id)
            }} className='bg-red-500' >Resolved</button>
          </div>
        ))
      }
    </div>
  )
}

export default RequestList
