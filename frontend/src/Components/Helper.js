import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Helper() {
    const [data, setData] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [spent, setSpent] = useState();
    const [type, setType] = useState();


    
        useEffect(() => {
            console.log('sending')
            getList();
        }, [])


    const getList = async () => {
        const url = 'http://127.0.0.1:8000/api/expenditures/';
        axios.get(url).then(response => {
            setData(response)
        }).catch(error => console.log(error))
    }
    

    const sendRequest = async () => {
        const url = 'http://127.0.0.1:8000/api/expenditures/';
        axios.get(url).then(response => {
            setData(response)
        }).catch(error => console.log(error))
    }

    const viewDetail = async (id)=> {
        const url = `http://127.0.0.1:8000/api/exp-detail/${id}/`;
        axios.get(url).then(response => {
            setName(response.data.name);
            setDesc(response.data.desc);
            setSpent(response.data.spent);

            console.log(response.data)
        }).catch(error => console.log(error))
        
    }


    const deleteExpens = async (id) => {
        const url = `http://127.0.0.1:8000/api/exp-delete/${id}/`;
        axios.delete(url).then(response => {
            if (response.status === 200) {
                getList()
            }
        }).catch(err => console.log(err)) 
    }



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
            {data.length == 0 ? (
                <button onClick={() => sendRequest()}>asdas dfsadf</button>
            ) : (
                <div>
                    {data.data.map((el, i) => {
                        return (
                            <div key={i}>
                                <h1 onClick={() => viewDetail(el.id)}>{el.name}</h1>
                                <p>{el.desc}</p>
                                <h3>{el.spent}</h3>
                                <h3 onClick={() => deleteExpens(el.id)}>{el.type}</h3>
                            </div>
                        )
                    })}

                </div>
            )}


        <form onSubmit={submitForm} method="POST">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type="number" value={spent} onChange={(e) => setSpent(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        
        </div>
    )
}

export default Helper;