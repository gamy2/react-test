import React, { useState } from 'react'

function Question() {
    const [colap , setColap]=useState(true);
  const  changecolap=()=>{
        setColap(!colap);
    }
  return (
    <div className='question' onClick={()=>{changecolap()}}>
        <div className={colap?"question-head":"question-head question-head-none"}>
            <div className='question-title'>quest</div>
            <div className={colap?'question-icon':'question-icon question-icon-none '}>
                {
                    colap?<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.454505 9.233C0.015165 8.79366 0.015165 8.08134 0.454505 7.642L7.2045 0.892006C7.64384 0.452665 8.35616 0.452665 8.7955 0.892006L15.5455 7.642C15.9848 8.08134 15.9848 8.79366 15.5455 9.233C15.1062 9.67233 14.3938 9.67233 13.9545 9.233L9.125 4.40349V16.3125C9.125 16.9338 8.62132 17.4375 8 17.4375C7.37868 17.4375 6.875 16.9338 6.875 16.3125L6.875 4.40349L2.0455 9.233C1.60616 9.67233 0.893845 9.67233 0.454505 9.233Z" fill="#060606"/>
                    </svg>
                    
                    :<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5455 8.767C15.9848 9.20634 15.9848 9.91866 15.5455 10.358L8.7955 17.108C8.35616 17.5473 7.64384 17.5473 7.2045 17.108L0.454506 10.358C0.0151653 9.91866 0.0151653 9.20634 0.454506 8.767C0.893845 8.32767 1.60616 8.32767 2.04549 8.767L6.875 13.5965V1.6875C6.875 1.06618 7.37868 0.5625 8 0.5625C8.62132 0.5625 9.125 1.06618 9.125 1.6875V13.5965L13.9545 8.767C14.3938 8.32767 15.1062 8.32767 15.5455 8.767Z" fill="white"/>
                    </svg>
                    
                    

                }
            </div>
        </div>
        <div className={colap?"question-body":"question-body question-body-none"}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
</p>
        </div>
    </div>
  )
}

export default Question