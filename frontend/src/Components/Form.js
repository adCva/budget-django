import axios from 'axios';
import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [spent, setSpent] = useState();
  const [type, setType] = useState();




  const submitForm = async (e) => {
    e.preventDefault();
    console.log("submit");
    const formData = {
      name: name,
      desc: desc,
      spent: spent,
      type: "HM"
    }
    const url = 'http://127.0.0.1:8000/api/exp-create/';

    try {
      const postRequest = await axios.post(url, formData);
      console.log('Resault: ', postRequest.data.id)
    } catch (err) {
      console.log('some error');
    }
    
  }

  return (
    <div>
        <form onSubmit={submitForm} method="POST">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type="number" value={spent} onChange={(e) => setSpent(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form