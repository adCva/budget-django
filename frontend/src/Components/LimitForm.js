import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { changeLimit, closeForm } from "../Redux/limitSlice";


function LimitForm() {
    const dispatch = useDispatch();
    const isLimitFormStarted = useSelector((state) => state.limit.limitForm);
    const [limit, setLimit] = useState(0);
    const [timeLimit, setTimeLimit] = useState();
    const [timeLimitCheck, setTimeLimitCheck] = useState(false);


    const handleCheckboxChange = (event) => {
        setTimeLimitCheck(event.target.checked)
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        let present = new Date();
        let limitDate = new Date(timeLimit);
        let diff = limitDate.getTime() - present.getTime();
        let remaning = Math.ceil(diff / (1000 * 60 * 60 * 24));

        let limitObj = {
            id: 1,
            total: limit,
            dateLimit: isNaN(remaning) ? "" : remaning
        }

        try {
            const callAPI = await axios.put('http://127.0.0.1:8000/api/update-limit/', limitObj)
                                        .then(response => {
                                            dispatch(changeLimit({newLimit: limit, newDate: isNaN(remaning) ? "" : remaning}));
                                            dispatch(closeForm());
                                        })
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className={isLimitFormStarted ? "form-wrapper" : "form-wrapper form-wrapper-show"}>
            <div className='form-container'>

                <form onSubmit={handleSubmit} className="form">

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Limit</label>
                        <input type="number" onChange={(e) => setLimit(e.target.value)} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group form-group-check'>
                        <label>Set Time Limit</label>
                        <input type="checkbox" onChange={handleCheckboxChange} checked={timeLimitCheck} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className={timeLimitCheck ? "form group show-date-field" : "hide-date-field"}>
                        <label>Set Time Limit</label>
                        <input type="date" onChange={(e) => setTimeLimit(e.target.value)} />
                    </div>

                    <button type='submit' className='submit-btn'>Submit</button>
                </form>

                <button onClick={() => dispatch(closeForm())} className="close-form">Close form</button>
            </div>
        </div>
    )
}

export default LimitForm;