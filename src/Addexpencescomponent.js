import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

const Addexpencescomponent = (props) => {
    const {state} = useLocation();
    const {type} = state;
    let arr = type === 'cc' ? (JSON.parse(localStorage.getItem('cc')) || []) : (JSON.parse(localStorage.getItem('dc')) || [])
    const [details, setDetails] = useState('');
    const [amount, setAmount] = useState('');
    const handlechangedetails = ({target})=>{
        setDetails(target.value);
    }
    const handlechangeamount = ({target})=>{
        setAmount(target.value);
    }
    const d = new Date();
   const addItem = () => {
    arr.push({
        details,
        amount,
        date : d.getDate()+'/'+d.getMonth()+1+'/'+d.getFullYear()+'  '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
         
    })
    localStorage.setItem(type, JSON.stringify(arr))
    setDetails('')
    setAmount('')
    alert(`${type} expenses added!`)
   }
   
   
   
    return (
        <div>
            <div className='header-container'>
                <h1>Add Expences</h1>
            </div>
            <div>
                <textarea className='addingdetails' value={details} placeholder='Description' onChange={handlechangedetails} >
                </textarea>
            </div>
            <div>
                <input className='addamount' value={amount} placeholder='Amount' onChange={handlechangeamount} >
                </input>
            </div>
            <button className='addbtn' onClick={addItem} style={{ backgroundColor: 'dodgerblue', width: '100px', height: '30px', borderRadius: '10px', color: 'white' }}><b>Add</b></button>
        
            
        </div>
    )
}
export default Addexpencescomponent