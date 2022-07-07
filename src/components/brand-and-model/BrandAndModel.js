import React from 'react'
import ChekboxList from '../checkbox-list/ChekboxList';
import './brand-model.styles.css'

const BrandAndModel = ({ title, options, handleFilterChange }) => {    
    const handleOnChange = (selected, title) => {
        handleFilterChange(selected, title)
    }

    return (
        <div className='brand-container'>
            <h4 className='brand-title'>SEMUA {title}</h4>
            {
                options && options.map((item, index) => (
                    <ChekboxList
                        key={item.id}
                        name={item.group_model || item.brand}
                        handleOnChange={handleOnChange}
                        index={index}
                        type='brands'
                        checked={item.select}
                        options={options}
                        id={item.id}
                        title={title}
                    />
                ))
            }
        </div>
    )
}

export default BrandAndModel;