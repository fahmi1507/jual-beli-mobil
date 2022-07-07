import React from 'react'
import './checkbox-list.styles.css'

const ChekboxList = ({ name, handleOnChange, checked, options, id, title }) => {
    const onChangeHandler = (e) => {
        const selected = options.map(e => {
            if (e.id === id) {
                e.select = !e.select;
            }
            return e;
        })

        handleOnChange(selected, title)
    }
    return (
        <div>
            <label className="container">{name}
                <input className='brand-input' type="checkbox" value={name} onChange={onChangeHandler} name={name} checked={checked}  />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default ChekboxList