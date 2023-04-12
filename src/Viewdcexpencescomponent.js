import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
const Viewdcexpencescomponent = () => {
    const {state} = useLocation();
    const {type} = state;
    console.log("srrae", state)
    const [arr , setArr]=useState([])
    useEffect(()=>{
        if(type==='cc'|| type==='dc')
        setArr(JSON.parse(localStorage.getItem(type)))
        if(type==='total'){
        let arr1=JSON.parse(localStorage.getItem('dc'))
        let arr2=JSON.parse(localStorage.getItem('cc'))
        let totalarr=[...arr1,...arr2]
        setArr(totalarr)
        }
    },[])
    return (
        <div style={{ width: '600px', border: '2px solid black', margin: 'auto', marginTop: '20px', height: '95vh', overflow: 'auto' }}>
            {
                arr?.map((e, i) => {
                    return (
                        <div style={{ border: '1px solid black', margin: '5px', padding: '0 15px' }} key={i+1}>
                            <h3>{e?.details}</h3>
                            <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-between' }}>
                                <p>{e?.date}</p>
                                <p>{e?.amount}</p>
                            </div>
                        </div>
                    )
                }) || <div> No Data </div>

            }
        </div>
    )
}
export default Viewdcexpencescomponent