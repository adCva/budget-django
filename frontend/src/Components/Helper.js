import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Helper() {
    const [data, setData] = useState('');

    useEffect(() => {
      const url = 'http://127.0.0.1:8000/api/expenditures/';
      axios.get(url).then((response) => setData(response))
    })


    return (
        <div>
            {data.length == 0 ? (
                <h1>Loading...</h1>
            ) : (
                <button onClick={() => console.log(data.data)}>Click Me!</button>
            )}
        </div>
    )
}

export default Helper;