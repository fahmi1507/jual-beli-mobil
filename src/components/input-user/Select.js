import React from 'react'
import './select.styles.css'

const Select = ({ title, options, value, handleChange, name }) => {
    
    return (
        <div className='select-container'>
            <p className='title-jual-mobil'>* {title}</p>
            <form >
                <select onChange={handleChange} className='select-jual-mobil' name={name} id={title} value={value}>
                <option value=''></option>
                {
                    options && options.map(item => {
                        const stuff = item.group_model || item.brand || item.model;

                        return (
                            <option key={item.id} value={stuff || item}>{stuff || item}</option>
                        )
                    })
                }
                </select>
            </form>
        </div>
    )
}

export default Select