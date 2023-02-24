import React, { useState } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createData } from "../Redux/expenditureSlice";
import { closeAddItemForm } from "../Redux/globalVarSlice";
import axios from 'axios';

function Form() {
    const dispatch = useDispatch();

    // ================== Redux state.
    const isAddStarted = useSelector((state) => state.globalVar.addFormOpened);
    const lastElementInState = useSelector((state) => state.expenditures.expData); // Get the id of the last element and add 1, used for when creating a new element.

    // ================== Local state.
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [spent, setSpent] = useState();
    const [type, setType] = useState("");


    // ================== Handle form submit.
    const handleSubmit = async (e) => {
        e.preventDefault();

        const date = new Date();
        let objectData = {
            name: name,
            desc: desc,
            spent: spent,
             type: type,
            created_at: `${date.getFullYear()}-${date.getDate()}-${date.getDay()}`
        }
        const url = "http://127.0.0.1:8000/api/exp-create/";

        try {
            const postRequest = await axios.post(url, objectData).then(response => {
                dispatch(createData({newElement: response.data}));
                dispatch(closeAddItemForm());
            });

            console.log("Resault: ", postRequest.data.id);
        } catch (error) {
            console.log(error)
        }
    }
    


    return (
        <div className={isAddStarted ? "form-wrapper" : "form-wrapper form-wrapper-show"}>
            <div className='form-container'>
                {/* ======================= Form ======================= */}
                <form onSubmit={handleSubmit} className="form">

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Total spent</label>
                        <input type="number" onChange={(e) => setSpent(e.target.value)} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Expenditure type</label>
                        <select onChange={(e) => setType(e.target.value)} >
                            <option value="HM">Home</option>
                            <option value="BL">Bill</option>
                            <option value="FD">Food</option>
                            <option value="TR">Transport</option>
                            <option value="MC">Miscellaneous</option>
                        </select>
                    </div>

                    <button type="submit" className='submit-btn'>Submit</button>
                </form>

                <button onClick={() => dispatch(closeAddItemForm())} className="close-form">Close</button>
            </div>
        </div>
    )
}

export default Form;