import React from 'react'
import BreadCrumb from '../../pages/BreadCrumb/BreadCrumb'
import './MainPage.scss'
import MainPageContent from '../MainPageContent/MainPageContent'


const MainPage = () => {
  return (
    <div className='main-page-content'>
      <div className='mpc-app-header'>
        <BreadCrumb/>
      </div>
      <div className='main-body'>
        <MainPageContent/>
      </div>

    </div>
  )
}

export default MainPage
