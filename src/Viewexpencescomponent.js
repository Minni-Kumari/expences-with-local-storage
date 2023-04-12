// import { useState } from "react"
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const Viewccexpencescomponent = () => {
    const [arr, setArr] = useState([])
    const {state} = useLocation();
    const {type} = state;
    useEffect(() => {
        let arr= setArr(JSON.parse(localStorage.getItem(type)));
    }, [])

    return (
        <div style={{ width: '600px', margin: 'auto', border: '2px solid black', marginTop: '20px', height: '95vh', overflow: 'auto' }}>
            {
                
                arr?.map((e, i) => {
                    return (
                        
                        <div style={{border: '1px solid black', margin: '5px',padding:'0px 15px'}} key={i+1} >
                            <h3>{e?.details}</h3>
                            <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-between' }}>
                                <p>{e?.date} </p>
                                <p>{e?.amount}</p>
                            </div>

                        </div>
                    )
                }
                ) || <div>No Data</div>
            }

        </div>
    )
}
export default Viewccexpencescomponent