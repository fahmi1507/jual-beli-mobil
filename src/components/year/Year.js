import React from 'react'
import './year.styles.css'

const Year = ({ handleFilterChange }) => {
    const yearsOption = [
        {id: '1', value: 0 ,title: 'Kapan Saja'},
        {id: '2', value: 5 ,title: 'Di Bawah 5 Tahun'},
        {id: '3', value: 10 ,title: '5 - 10 Tahun'},
        {id: '4', value: 20 ,title: 'Lebih dari 10 Tahun'},
    ]

    return (
        <div>
            <h3>TAHUN</h3>
            <form >

                {
                    yearsOption.map(item => {
                        return (
                            <div className='year-input-container' key={item.id}>
                                <input className='radio-button' type="radio" id={item.title} name="year" value={item.value} onChange={(e) => handleFilterChange(+e.target.value, 'YEAR')} />
                                <label htmlFor="year">{item.title}</label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export default Year;