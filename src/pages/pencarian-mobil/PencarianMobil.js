import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/side-menu/SideMenu'
import './pencarian-mobil.styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCars, setCars, applyFilter, } from '../../features/cars/carSlice'
import { availableCars, brandsList, modelsList } from '../../data'

const PencarianMobil = () => {
    const cars = useSelector(selectCars)
    const dispatch = useDispatch()
     
    const [filters, setFilters] = useState({
        merek: brandsList,
        model: modelsList,
        year: null
    })
    
    useEffect(() => {
        dispatch(setCars(availableCars))
        dispatch(applyFilter(filters))
    }, [dispatch, filters])

    const handleFilterChange = (selected, title) => {
        const name = title.toLowerCase()
        setFilters({
            ...filters,
            [name]: selected,
        })
    }

    return (
        <div className='pencarian-container'>
            <SideMenu
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <div className='cars-container'>

                {
                    cars && cars.map(item => (
                        <div className='cars-image-container' key={item.id}>
                            <div className='card'>
                                <img src={item.img} alt="cars"  />
                                <div className='cars-info-container'>
                                    <h4 className='cars-text'>{item.brand} {item.group_model}</h4>
                                    <p className='cars-text'>{item.model}</p>
                                    <p>{item.year}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default PencarianMobil