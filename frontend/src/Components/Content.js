import React, { useEffect } from 'react';
import Card from './Card';
// ================== React icons.
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
// ================== Redux.
import { useSelector, useDispatch  } from 'react-redux';
import { changeFilter, openAccordion } from "../Redux/globalVarSlice";
import { createData } from "../Redux/expenditureSlice";
import { loadDataCall } from "../Middleware/loadData";
import axios from 'axios';


function Content() {
  const dispatch = useDispatch();
  const accordion = useSelector((state) => state.globalVar.accordionOpened);
  const filterBy = useSelector((state) => state.globalVar.filterBy);
  const expendituresData = useSelector((state) => state.expenditures.expData);
  const expendituresDataReverse = [...expendituresData].reverse();
  const alwaysDisplay = expendituresDataReverse.slice(0, 3);
  const accordionDisplay = expendituresDataReverse.slice(3, expendituresData.length)

  
  const dispatchFilter = (value) => {
    dispatch(changeFilter({newFilter: value}));
  };


  const getPageData = async => {
    let url = "http://127.0.0.1:8000/api/get-data/";
    axios.get(url).then(response => dispatch(createData({newElement: response.data})))
                  .catch(error => console.log(error))
  }


  useEffect(() => {
    getPageData();
  }, []);


  return (
    <div className='content-wrapper'>
        <div className='content-container'>

            {/* =========== Filters container =========== */}
            <div className='filters-container'>
                <button onClick={() => dispatchFilter("All")}>All</button>
                <button onClick={() => dispatchFilter("Home")}>Home</button>
                <button onClick={() => dispatchFilter("Bill")}>Bills</button>
                <button onClick={() => dispatchFilter("Food")}>Food</button>
                <button onClick={() => dispatchFilter("Transport")}>Transport</button>
                <button onClick={() => dispatchFilter("Miscellaneous")}>Miscellaneous</button>
            </div>

            {/* =========== Expenses container =========== */}
            <div className='expenses-container'>
                {alwaysDisplay.map((el, i) => {
                  return (
                    <Card key={i} pk={el.id} type={el.type} name={el.name} description={el.desc} spent={el.spent} createdAt={el.created_at} />
                  )
                })}
            </div>

            {/* =========== Accordion wrapper =========== */}
            <div className='accordion-wrapper'>
              <button className={filterBy !== "All" ? "accorion-btn hide-accorion-btn" : "accorion-btn"} onClick={() => dispatch(openAccordion({accordion: !accordion}))}>View full list {accordion ? <FiChevronUp /> : <FiChevronDown />}</button>
              <div className={accordion ? "accordion-container" : "accordion-container accordion-hide"}>
                {accordionDisplay.map((el, i) => {
                  return (
                    <Card key={i} pk={el.id} type={el.type} name={el.name} description={el.desc} spent={el.spent} createdAt={el.created_at} />
                  )
                })}
              </div>
            </div>

        </div>
    </div>
  )
}

export default Content;