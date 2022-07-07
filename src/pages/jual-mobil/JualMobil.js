import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from '../../components/input-user/Select'
import { addCars } from '../../features/cars/carSlice'
import { generateArrayOfYears } from '../../helper/utils'
import './jual-mobil.styles.css'
import { v4 as uuidv4 } from 'uuid';
import { brandsList, modelsList, typesList } from '../../data'
const JualMobil = () => {
    const [listMerek] = useState(brandsList)
    const [listModel] = useState(modelsList)
    const [listTypes] = useState(typesList)
    const defaultValue = {
        year: 0,
        name: '',
        merek: '',
        status: '',
        type: '',
        img: 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
    }
    const [userInput, setUserInput] = useState(defaultValue)

    const dispatch = useDispatch()

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setUserInput({
                ...userInput,
                img: URL.createObjectURL(selectedImage)
            })
        } else {
            setUserInput({
                ...userInput,
                img: 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
            })
        }
    }, [selectedImage, userInput])


    const handleChange = (e) => {
        const { name, value } = e.target;


        setUserInput({
            ...userInput,
            [name]: value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCars({
            id: uuidv4(),
            ...userInput
        }))
        setUserInput(defaultValue)
    }


    const { year, name, merek, type } = userInput;

    return (
        <div className='jual-mobil-container'>
            <h1>PASANG IKLAN ANDA</h1>
            <div className='info-jual-container'>
                <h2>SERTAKAN BEBERAPA DETAIL</h2>

                <div className='input-jual-container'>
                    <Select
                        title='Merek'
                        name='merek'
                        options={listMerek}
                        value={merek}
                        handleChange={handleChange}
                    />
                    <Select
                        title='Model'
                        name='name'
                        options={listModel}
                        value={name}
                        handleChange={handleChange}
                    />
                    <Select
                        title='Tipe'
                        name='type'
                        options={listTypes}
                        value={type}
                        handleChange={handleChange}
                    />
                    <Select
                        title='Tahun'
                        name='year'
                        options={generateArrayOfYears()}
                        value={year}
                        handleChange={handleChange}
                    />

                    <div className='kondisi-kendaraan-radio-button' onChange={handleChange}>
                        <label htmlFor="year">* Tipe Kendaraan</label>
                        <div className='radio-options'>
                            <input className='radio-button' type="radio" id='baru' name="status" value='baru'  />
                            <p>Baru</p>
                        </div>
                        <div className="radio-options">
                            <input className='radio-button' type="radio" id='bekas' name="status" value='bekas' />
                            <p>Bekas</p>
                        </div>
                    </div>

                    {/* upload image */}
                    <p className='title-jual-mobil'>* Unggah Foto</p>
                    {selectedImage && (
                        <div>
                            <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                            <br />
                            <button onClick={()=>setSelectedImage(null)}>Remove</button>
                        </div>
                    )}

                    <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                        }}
                    />
                </div>
                    <button className="button-68"  onClick={handleSubmit}>Upload</button>


            </div>
        </div>
    )
}

export default JualMobil