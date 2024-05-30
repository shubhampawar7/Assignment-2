import React from 'react'
import './BreadCrumb.scss'
import Home from "../../assets/Images/Home.gif"

const BreadCrumb = () => {
    const staticData = [
        {
            arrow: "→",
            name: 'State'
        },
        {
            arrow: "→",
            name: 'City'
        },
        {
            arrow: "→",
            name: 'Pune'
        },
    ]
    return (
        <div className='breadcrumb'>
            <div>
                <img src={Home} alt='HomeIcon'></img>
            </div>
            {
                staticData.map((item) => (
                    <>
                        <div><span className='breadcrumb-arrow'>{item.arrow}</span></div>
                        <div><span className='breadcrumb-text'>{item.name}</span></div>
                    </>
                ))
            }




        </div>
    )
}

export default BreadCrumb
