import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openAddItemForm } from "../Redux/globalVarSlice";
import { openLimitForm } from "../Redux/limitSlice";
import { BsPlus } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";

function Hero() {
    const dispatch = useDispatch();
    const totalLimit = useSelector((state) => state.limit.totalLimit);
    const reamaningDaysLimit = useSelector((state) => state.limit.remainingDays)
    const expendituresData = useSelector((state) => state.expenditures.expData);
    const getTotalSpentSum = expendituresData.map(el => el.spent).reduce((a, b) => Number(a) + Number(b), 0);
    

    return (
        <div className='hero-wrapper'>
            <div className='hero-container'>

                {/* =========== Logo & Add expense button =========== */}
                <nav>
                    <p className='logo' onClick={() => console.log(getTotalSpentSum)}>quko</p>
                    <button onClick={() => dispatch(openAddItemForm())}><BsPlus className='btn-icon' />Add</button>
                </nav>

                {/* =========== Total limit display and change button =========== */}
                <div className='hero-group'>

                    <div className='hero-text'>
                        <p className='user-greet'>Hello, Obi-Wan Kenobi</p>
                        <h1><span>Total Spent:</span> $ {getTotalSpentSum.toLocaleString('en')}</h1>
                        <h4>Your Desired Spending Limit: $ {totalLimit}</h4>
                        <h5>{isNaN(reamaningDaysLimit) ? 'No Time Limit Selected' : `${reamaningDaysLimit} Days Left`} </h5>
                        <button onClick={() => dispatch(openLimitForm())}><CgArrowsExchangeAlt className='btn-icon'/>Change</button>
                    </div>

                    <img src='static/images/finance.svg' alt="Save money." />
                </div>

            </div>
        </div>
    )
}

export default Hero;