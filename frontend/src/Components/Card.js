import React, { useState } from 'react';
// ================== Redux.
import { useSelector, useDispatch } from 'react-redux';
import { startEdit } from "../Redux/editSlice";
import { deleteData } from "../Redux/expenditureSlice";
// ================== React icons.
import { MdOutlineEmojiTransportation, MdDelete } from "react-icons/md";
import { MdMiscellaneousServices, MdOutlineFastfood } from 'react-icons/md';
import { BiHomeSmile } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';



function Card(props) {
    const dispatch = useDispatch();
    const filterBy = useSelector((state) => state.globalVar.filterBy);
    const [confirmDelete, setConfirmDelete] = useState(false);

    
    const typeSymbol = {
        'HM': <BiHomeSmile />,
        'MC': <MdMiscellaneousServices />,
        'TR': <MdOutlineEmojiTransportation />,
        'FD': <MdOutlineFastfood />,
        'BL': <FaRegMoneyBillAlt />,
    };


    const expTypes = {
        "HM": "Home",
        "BL": "Bill",
        "FD": "Food",
        "TR": "Transport",
        "MC": "Miscellaneous",
    };


    // For editing. Could also pass {...el} in Content, could also do other things. Too lazy to change the JSX with this instead of props.etc .
    const elementData = {
        id: props.pk,
        name: props.name,
        desc: props.description,
        spent: props.spent,
        type: props.type,
        created_at: props.createdAt
    };


    const deleteItem = (pk) => {
        dispatch(deleteData({deleteId: pk}));
        setConfirmDelete(false);
    };

    
    return (
        <div className={filterBy === 'All' ? "card-wrapper" : filterBy === expTypes[props.type] ? "card-wrapper" : "card-wrapper-hide"}>
            <div className='card-container'>
                
                <span className={`type-logo type-logo-${props.type}`}>{typeSymbol[props.type]}</span>

                {/* =========== Card details, name, description, total spent & type =========== */}
                <div className='card-details'>
                    <h2 className='name'>{props.name}</h2>
                    <h2 className='spent'>$ {props.spent}</h2>
                    <h2 className='desc'>{props.description}</h2>
                </div>

                {/* =========== Card buttons, edit & delete =========== */}
                <div className='card-buttons'>
                    <button className='edit-btn' onClick={() => dispatch(startEdit({editItem: elementData}))}><span><FiEdit /></span> Edit</button>
                    <button className='delete-btn' onClick={() => setConfirmDelete(true)}><span><MdDelete /></span> Delete</button>
                </div>

            </div>

            <div className={confirmDelete ? "form-wrapper" : "form-wrapper form-wrapper-show"}>
                <div className='form-container'>
                <button onClick={() => deleteItem(props.pk)} className="confirm-btn">Confirm</button>
                <button onClick={() => setConfirmDelete(false)} className="close-form">Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default Card;