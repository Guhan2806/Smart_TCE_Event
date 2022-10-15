import React, { useState } from 'react'
import axios from 'axios'
const Admin = () => {
    const [name,setname]=useState('')
    const [date,setdate]=useState('')
    const [summary,setsummary]=useState('')
    function Submit(){
        axios.post('http://localhost:5000/admin/add',{name,date,summary}).then(()=>{
          alert('submited')})
    }
  return (
    <div>
        <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder='Enter Event Name '/>
        <input type="date"  onChange={(e)=>{setdate(e.target.value)}} placeholder='Enter Event Date '/>
        <input type="text"  onChange={(e)=>{setsummary(e.target.value)}}placeholder='Enter Event Summary'/>
        <button type='submit'  onClick={Submit}>Submit</button>
    </div>
  )
}

export default Admin
