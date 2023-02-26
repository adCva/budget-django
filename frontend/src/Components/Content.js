import React, { useEffect, useState } from 'react';
import Card from "./Card";
import axios from 'axios';
// ================== Redux.
import { useSelector, useDispatch  } from 'react-redux';
import { loadData } from "../Redux/expenditureSlice";
import { changeFilter } from "../Redux/globalVarSlice";



function Content() {
  const dispatch = useDispatch();
  // Redux state.
  const expItems = useSelector((state) => state.expenditures.expData);


  useEffect(() => {
    const callAPI = async () => {
      axios.get("http://127.0.0.1:8000/api/get-data/")
            .then(response => dispatch(loadData({newElement: response.data})))
            .catch(error => console.log(error))
    };

    window.addEventListener("load", callAPI());
  }, []);



  return (
    <div className='content-wrapper'>
      <div className='content-container'>

        {/* =========== Filters Buttons =========== */}
        <div className='filters-container'>
          <button onClick={() => dispatch(changeFilter({newFilter: "All"}))}>All</button>
          <button onClick={() => dispatch(changeFilter({newFilter: "Home"}))}>Home</button>
          <button onClick={() => dispatch(changeFilter({newFilter: "Bill"}))}>Bills</button>
          <button onClick={() => dispatch(changeFilter({newFilter: "Food"}))}>Food</button>
          <button onClick={() => dispatch(changeFilter({newFilter: "Transport"}))}>Transport</button>
          <button onClick={() => dispatch(changeFilter({newFilter: "Miscellaneous"}))}>Miscellaneous</button>
        </div>

        {/* =========== Expenses container =========== */}
        <div className='expenses-container'>
          {expItems.map((el, i) => {
            return (
              <Card key={i} pk={el.id} type={el.type} name={el.name} description={el.desc} spent={el.spent} createdAt={el.created_at} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Content;