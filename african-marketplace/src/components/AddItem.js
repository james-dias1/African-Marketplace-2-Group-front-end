import React from 'react'

export default function AddItem(props) {

    const {values, submit, change, disabled, errors} = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const {name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return(
        <form id='add-listing-form' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <h2>Add a listing!</h2>
                
                <label>Location
                    <select id='location-dropdown' 
                        onChange={onChange}
                        value={values.size}
                        name='location'>
                            <option value=''>-- Select a Province --</option>
                            <option value='eastern-cape'>Eastern Cape</option>
                            <option value='free-state'>Free State</option>
                            <option value='gauteng'>Gauteng</option>
                            <option value='limpopo'>Limpopo</option>
                            <option value='north-west'>North West</option>
                    </select>
                </label>

                <label>Item Name
                    <input
                        id='item-name'
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Description
                    <input
                        id='item-description'
                        value={values.description}
                        onChange={onChange}
                        name='description'
                        type='textarea'
                    />
                </label>

                <label>Price
                    <input
                        id='item-price'
                        value={values.price}
                        onChange={onChange}
                        name='price'
                        type='text'
                        inputmode='decimal'
                        placeholder='Please enter a number'
                    />
                </label>

            </div>

            <div className='form-submit'>
                <button id='add-button' disabled={disabled}>Post Item</button>
                <div className='errors'>
                    <div>{errors.location}</div>
                    <div>{errors.name}</div>
                    <div>{errors.price}</div>
                </div>
            </div>
        </form>
    )
}