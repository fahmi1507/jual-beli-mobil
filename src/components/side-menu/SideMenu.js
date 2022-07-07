import React  from 'react'
import BrandAndModel from '../brand-and-model/BrandAndModel'
import Year from '../year/Year'
import './side-menu.styles.css'

const SideMenu = ({ filters, handleFilterChange }) => {
    const { merek, model, year } = filters;

    return (
        <div className='side-menu-container'>
            <h3 className='brand-title'>MEREK DAN MODEL</h3>
            <BrandAndModel
                options={merek}
                title='MEREK'
                handleFilterChange={handleFilterChange}
            />
            <BrandAndModel
                options={model}
                title='MODEL'
                handleFilterChange={handleFilterChange}
            />
            <Year
                year={year}
                handleFilterChange={handleFilterChange}
            />          
        </div>
    )
}

export default SideMenu