import React, { useState } from 'react'

function Lang() {
    const lang=["en","it","de","ar"];
   const[colap,setColap]= useState(true);
  const [langIndex,setLangIndex]=useState(0);
  const onHeaderClick=()=>{
    setColap(!colap);
  }
  const onlangClick=(lindex)=>{
    setLangIndex(lindex)
    setColap(!colap);
  }
   return (
   <div className={colap? 'lang':'lang lang-none'}>
    <div className={colap? 'lang-header': 'lang-header lang-header-none'} onClick={()=>{onHeaderClick()}}>
        <div className={colap?'lang-title':'lang-title lang-title-none'}>{lang[langIndex]}</div>
        <div className={colap?'lang-icon':'lang-icon lang-icon-none'}> 
        {
            colap?<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.598461 5.13591C0.34218 4.87963 0.34218 4.46412 0.598461 4.20784L4.53596 0.270336C4.79224 0.0140553 5.20776 0.0140553 5.46404 0.270336L9.40154 4.20784C9.65782 4.46412 9.65782 4.87963 9.40154 5.13591C9.14526 5.3922 8.72974 5.3922 8.47346 5.13591L5.65625 2.3187L5.65625 9.26562C5.65625 9.62806 5.36244 9.92188 5 9.92188C4.63756 9.92188 4.34375 9.62806 4.34375 9.26562V2.3187L1.52654 5.13591C1.27026 5.3922 0.854743 5.3922 0.598461 5.13591Z" fill="#060606"/>
            </svg> 
            
            :
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.40154 4.86409C9.65782 5.12037 9.65782 5.53588 9.40154 5.79216L5.46404 9.72966C5.20776 9.98595 4.79224 9.98595 4.53596 9.72966L0.598462 5.79216C0.34218 5.53588 0.34218 5.12037 0.598462 4.86409C0.854742 4.6078 1.27026 4.6078 1.52654 4.86409L4.34375 7.6813L4.34375 0.734375C4.34375 0.371938 4.63756 0.078125 5 0.078125C5.36244 0.078125 5.65625 0.371938 5.65625 0.734375V7.6813L8.47346 4.86409C8.72974 4.6078 9.14526 4.6078 9.40154 4.86409Z" fill="white"/>
            </svg>
        }
</div>
    </div>
    <div className={colap?'lang-body' :'lang-body lang-body-none'}>
        {lang.map((ele,index)=>{
            return (<div onClick={()=>{onlangClick(index)}}><p>{ele}</p></div>);
        })}
    </div>
   </div>
  )
}

export default Lang