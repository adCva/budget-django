import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Helper() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [spent, setSpent] = useState();
    const [type, setType] = useState();
    const [created, setCreated] = useState();
    const [id, setID] = useState();
    const [editing, setEditing] = useState();


    const [imiBagPula, setSaImiBagPula] = useState([])


    
    useEffect(() => {
        window.addEventListener("load", getList())
    }, [])


    const getList = async () => {
        const url = 'http://127.0.0.1:8000/api/get-data/';
        axios.get(url).then(response => {
            setSaImiBagPula(response.data)
        }).catch(error => console.log(error))
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            desc: desc,
            spent: spent,
            type: "HM"
        }

        const url = 'http://127.0.0.1:8000/api/exp-create/';
        try {
            const postRequest = await axios.post(url, formData);
            window.location.reload()
          } catch (err) {
            console.log('some error');
          }
    }


    const openEditing = async (id) => {
        setEditing(true)
        setID(id);

        const url = `http://127.0.0.1:8000/api/get-detail/${id}`;
        try {
            const postRequest = await axios.get(url).then(response => {
                setName(response.data.name);
                setDesc(response.data.desc);
                setSpent(response.data.spent);
                setType(response.data.type)
                setCreated(response.data.created_at)
            });
        } catch (err) {
            console.log(err);
        }
    }


    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        const formData = {
            id: id,
            name: name,
            desc: desc,
            spent: spent,
            type: type,
            created_at: created
        }


        const updateUrl = `http://127.0.0.1:8000/api/exp-update/${id}/`;
        try {
            const response = await axios.put(updateUrl, formData).then(res => {
                const updatedItem = res.data;
                setSaImiBagPula(imiBagPula.map(el => el.id === updatedItem.id ? updatedItem : el))
                setEditing(false);
            });
        } catch (error) {
            console.log(error)
        }
    }


    const deleteItem = async (id) => {
        const url = `http://127.0.0.1:8000/api/exp-delete/${id}`;
        try {
            const postRequest = await axios.delete(url);
        } catch (err) {
            console.log('some error')
        }
    }


    return (
        <div>
            {imiBagPula.length == 0 ? (
                <button onClick={() => console.log(imiBagPula)}>Click Me!</button>
            ) : (
                <div>
                    {imiBagPula.map((el, i) => {
                        return (
                            <div key={i}>
                                <h1 onClick={() => openEditing(el.id)}>{el.name}</h1>
                                <p>{el.desc}</p>
                                <h3 onClick={() => console.log(imiBagPula)}>{el.spent}</h3>
                                <h3 onClick={() => deleteItem(el.id)}>{el.type}</h3>
                            </div>
                        )
                    })}

                </div>
            )}


        <form method="POST" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <input type="text" onChange={(e) => setDesc(e.target.value)} />
            <input type="number" onChange={(e) => setSpent(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>


        <form method="POST" onSubmit={handleSubmitEdit} className={editing ? "edit-form" : "hide-edit-form"}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type="number" value={spent} onChange={(e) => setSpent(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>



        
        </div>
    )
}

export default Helper;