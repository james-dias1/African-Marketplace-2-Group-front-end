import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../Schema'


const initialFormValues = {
    name: '',
    location: '',
    description: '',
    price: ''
}

const initialFormErrors = {
    name: '',
    location: '',
    price: '',
}

const initialItem = []

const initialDisabled = true


export default function AddItem() {


    // const [item, setItem] = useState(initialItem)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewItem = newItem => {
        axios.post('https://pokeapi.co/', newItem)
            .then(response => {
                setFormValues([[response.data], ...formValues])
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() => setFormErrors({...formErrors, [name]: ''}))
          .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    const submitItem = () => {
        const newItem = {
            name: formValues.name, 
            location: formValues.location,
            description: formValues.description,
            price: formValues.price
        }
        postNewItem(newItem)
    }

    const onSubmit = event => {
        event.preventDefault()
        submitItem()
    }

    const onChange = event => {
        validate(event.target.name, event.target.value)
        setFormValues({
            [event.target.name]: event.target.value,
        })
    }

    return(
        <form id='add-listing-form' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <h2>Add a listing!</h2>
                
                <label>Location
                    <select id='location-dropdown' 
                        onChange={onChange}
                        value={formValues.location}
                        name='location'>
                            <option value=''>-- Select a Province --</option>
                            <option value='Eastern-Cape'>Eastern Cape</option>
                            <option value='Free-State'>Free State</option>
                            <option value='Gauteng'>Gauteng</option>
                            <option value='Limpopo'>Limpopo</option>
                            <option value='North-West'>North West</option>
                    </select>
                </label>

                <label>Item Name
                    <input
                        id='item-name'
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Description
                    <input
                        id='item-description'
                        value={formValues.description}
                        onChange={onChange}
                        name='description'
                        type='textarea'
                    />
                </label>

                <label>Price
                    <input
                        id='item-price'
                        value={formValues.price}
                        onChange={onChange}
                        name='price'
                        type='text'
                        inputmode='decimal'
                        placeholder='Please enter a number'
                    />
                </label>

            </div>

            <div className='form-submit'>
                <button id='add-button'>Post Item</button>
                <div className='errors'>
                    <div>{formErrors.location}</div>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.price}</div>
                </div>
            </div>
        </form>
    )
}

