import React, { useEffect, useState } from 'react';
import './Headcomponent.css';
import { AiFillPlusSquare , AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HeadComponent = () => {
    const navigate = useNavigate();
    const addexpences=()=>{
        navigate("/addexpencescompponent",{state:{type:'cc'}})
    }
    const addDc = () => {
        navigate("/addexpencescompponent",{state:{type:'dc'}})
    }
    const viewccexpenceslist=()=>{
        navigate("/Viewdcexpencescomponent",{state:{type:'cc'}})
    }
    const viewdcexpenceslist = ()=>{
        navigate("/Viewdcexpencescomponent",{state:{type:'dc'}})
    }
    const viewtotalexpenceslist =()=>{
        navigate("/Viewdcexpencescomponent",{state:{type:'total'}})
    }
    const [ccTotalAmount , setCcTotalAmount]=useState(0)
    const[dcTotalAmount,setDcTotalAmount]=useState(0)
    useEffect(()=>{
        let cctotal = 0
        let ccarr=JSON.parse(localStorage.getItem('cc'))
        ccarr?.forEach((e,i) => {
            cctotal= Number(e.amount)+cctotal
        });
        setCcTotalAmount(cctotal)
        let dctotal=0
        let dcarr=JSON.parse(localStorage.getItem('dc'))
        dcarr?.forEach((e,i)=>{
            dctotal=Number(e.amount)+dctotal
        });
        setDcTotalAmount(dctotal)
    },[])
    return (
        <div>
            <div className='header-container'>
                <h1>Expences Tracker</h1>
            </div>
            <div>
                <div className='Child'>
                    <p style={{}}>CC Expences</p>
                    <p>{ccTotalAmount}</p>
                    <div className='Content'> 
                    <span className='viewicon'>
                    <p><AiFillEye size={30} onClick={()=>viewccexpenceslist()} /></p>
                    </span>
                    <span className='addicon' >
                    <p>< AiFillPlusSquare size={30} onClick={()=>addexpences()}/></p>
                    </span>
                    </div>
                </div>
                <div className='Child'>
                    <p style={{}}>DC Expences</p>
                    <p>{dcTotalAmount}</p>
                    <div className='Content'>
                        <span className='viewicon'>
                    <p><AiFillEye size={30} onClick={()=>viewdcexpenceslist()}/></p>
                    </span>
                        <span className='addicon'>
                    <p><AiFillPlusSquare size={30} onClick={()=>addDc()}/></p>
                    </span>
                    </div>
                </div>
                <div className='Child'>
                    <p style={{}}>Total Expences</p>
                    <p>{ccTotalAmount+dcTotalAmount}</p>
                    <div className='Content'>
                    <span className='totalviewicon' ><p><AiFillEye size={30} onClick={()=>viewtotalexpenceslist()}/></p></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeadComponent