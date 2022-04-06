import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../Schema';
import '../CSS/AddItem.css';

import axiosWithAuth from '../Helpers/AxiosWithAuth';


const initialFormValues = {
    name: '',
    location: '',
    description: '',
    price: '',
    URL: '',
    category: '',
    user_id: ''
}

const initialFormErrors = {
    name: '',
    location: '',
    price: '',
}

const initialDisabled = true


export default function AddItem() {

    const { push } = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewItem = newItem => {
        axiosWithAuth().post('https://lbs-african-marketplace.herokuapp.com/items/additem', newItem)
            .then(response => {
                console.log(response);
                push('/products');
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
            price: formValues.price,
            URL: formValues.URL,
            category: formValues.category,
            user_id: formValues.user_id
        }
        postNewItem(newItem)
    }

    const onSubmit = event => {
        event.preventDefault()
        submitItem()
    }

    const onChange = event => {
        validate(event.target.name, event.target.value);
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form className='add-listing-form' onSubmit={onSubmit}>
            <div className='form-inputs'>
                
                <h2>Add an item to the marketplace below!</h2>
                <div className='inputs'>
                <label className='label'>Location:
                    <select className='location-dropdown' 
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
    
                <label className='label'>Item Name:
                    <input
                        className='item-name'
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='Enter item name'
                    />
                </label>

                <label className='label'>Description:
                    <input
                        className='item-description'
                        value={formValues.description}
                        onChange={onChange}
                        name='description'
                        type='textarea'
                    />
                </label>

                <label className='label'>Price:
                    <input
                        className='item-price'
                        value={formValues.price}
                        onChange={onChange}
                        name='price'
                        type='text'
                        inputmode='decimal'
                        placeholder='Please enter a number'
                    />
                </label>
                <label className='label'>Category:
                    <input
                        className='item-price'
                        value={formValues.category}
                        onChange={onChange}
                        name='category'
                        type='text'
                        inputmode='decimal'
                        placeholder='Please enter the category of the item'
                    />
                </label>
                <label className='label'>Image:
                    <input
                        className='item-price'
                        value={formValues.URL}
                        onChange={onChange}
                        name='URL'
                        type='text'
                        inputmode='decimal'
                        placeholder='Please enter an image url'
                    />
                </label>
                <label className='label'>User-ID:
                    <input
                        className='item-price'
                        value={formValues.user_id}
                        onChange={onChange}
                        name='user_id'
                        type='number'
                        inputmode='decimal'
                        placeholder='Please enter your id'
                    />
                </label>
                </div>
            </div>
            <div className='form-submit'>
                <button id='add-button'>Post Item!</button>
                <div className='errors'>
                    <div>{formErrors.location}</div>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.price}</div>
                </div>
            </div>
            
        </form>
    )
}

