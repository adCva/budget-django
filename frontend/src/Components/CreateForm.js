import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createData } from "../Redux/expenditureSlice";
import { closeAddItemForm } from "../Redux/globalVarSlice";



function CreateForm() {
    const dispatch = useDispatch();
    const isFormOpened = useSelector((state) => state.globalVar.addFormOpened);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [spent, setSpent] = useState();
    const [type, setType] = useState("HM");


    const resetFields = () => {

    } 


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            name: name,
            desc: desc,
            spent: spent,
            type: type
        };

        try {
            const postRequest = await axios.post("http://127.0.0.1:8000/api/exp-create/", newItem)
                                            .then(response => {
                                                dispatch(createData({newElement: response.data}));
                                                dispatch(closeAddItemForm());
                                                // window.location.reload();
                                            });
        } catch (error) {
            console.log(error)
        }

        setName("");
        setDesc("");
        setSpent();
        setType("HM");
    };

    return (
        <div className={isFormOpened ? "form-wrapper" : "form-wrapper form-wrapper-show"}>
            <div className='form-container'>
                {/* ======================= Form ======================= */}
                <form onSubmit={handleSubmit} className="form">
                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" value={name} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea onChange={(e) => setDesc(e.target.value)} placeholder="Description" value={desc}></textarea>
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Total spent</label>
                        <input type="number" onChange={(e) => setSpent(e.target.value)} placeholder="0" value={spent} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Expenditure type</label>
                        <select onChange={(e) => setType(e.target.value)} value={type}>
                            <option value="HM" selected>Home</option>
                            <option value="BL">Bill</option>
                            <option value="FD">Food</option>
                            <option value="TR">Transport</option>
                            <option value="MC">Miscellaneous</option>
                        </select>
                    </div>

                    <button type="submit" className='submit-btn'>Submit</button>
                </form>

                {/* ======================= Close with no action ======================= */}
                <button onClick={() => dispatch(closeAddItemForm())} className="close-form">Close</button>
            </div>
        </div>
    )
}

export default CreateForm;