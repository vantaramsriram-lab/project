import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const RequestForm = ({ setForm }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    // const { title, description, priority } = formData
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/requests", formData)
    setForm(false)
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col border p-5 bg-gray-400'>
      <div className='flex justify-between'>
        <h2>Create Request</h2>
        <button onClick={() => {
          setForm(false)
        }}>x</button>
      </div>

      <label>Title *</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter request title"
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter description"
      />

      <label>Priority</label>
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit">Create Request</button>
    </form>
  )
}

export default RequestForm
