import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from "../Redux/expenditureSlice";
import { closeEdit } from "../Redux/editSlice";

function EditForm() {
    const dispatch = useDispatch();
    const editItemData = useSelector((state) => state.edit.editExp);
    const isEditStarted = useSelector((state) => state.edit.editFormOpened);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState('');
    const [spent, setSpent] = useState();
    const [type, setType] = useState('');

    useEffect(() => {
        setName(editItemData.name);
        setDesc(editItemData.desc);
        setSpent(editItemData.spent);
        setType(editItemData.type);
    }, [isEditStarted])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const item = {
            id: editItemData.id,
            name: name,
            desc: desc,
            spent: spent,
            type: type,
            created_at: editItemData.created_at
        }
        try {
            const editRequest = await axios.put(`http://127.0.0.1:8000/api/exp-update/${item.id}/`, item)
                                            .then(response => {
                                                dispatch(updateData({updatedElelemnt: response.data}));
                                                dispatch(closeEdit());
                                            })
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <div className={isEditStarted ? "form-wrapper" : "form-wrapper form-wrapper-show"}>
            <div className='form-container'>
                {/* ======================= Form ======================= */}
                <form onSubmit={handleSubmit} className="form">

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea onChange={(e) => setDesc(e.target.value)} defaultValue={desc}></textarea>
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Total spent</label>
                        <input type="number" onChange={(e) => setSpent(e.target.value)} defaultValue={spent} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Expenditure type</label>
                        <select onChange={(e) => setType(e.target.value)} value={type}>
                            <option value="HM">Home</option>
                            <option value="BL">Bill</option>
                            <option value="FD">Food</option>
                            <option value="TR">Transport</option>
                            <option value="MC">Miscellaneous</option>
                        </select>
                    </div>

                    <button type="submit" className='update-btn' >Update</button>

                </form>

                <button onClick={() => dispatch(closeEdit())} className="close-form">Close form</button>
            </div>
        </div>
    )
}

export default EditForm;