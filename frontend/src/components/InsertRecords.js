import React, { useState } from 'react'

const InsertRecords = ({ setShowRecords, show }) => {
    const [inputItems, setInputItems] = useState([''])

    const onInputHandler = (index, event) => {
        const newInputs = [...inputItems];
        newInputs[index] = event.target.value;
        setInputItems(newInputs);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(inputItems)
    }

    return (
        <div className='table__input'>
            <form className='table__form' onSubmit={onSubmitHandler}>
                <div className='table__form__left'>
                    <div className='input__field'>
                        {inputItems.map((item, index) =>
                            <input
                                type='text'
                                placeholder='Enter Name....'
                                value={item}
                                onChange={(e) => onInputHandler(index, e)}
                            />
                        )}
                    </div>
                </div>
                <button onClick={() => setShowRecords(!show)} type='submit'>ADD RECORD</button>
            </form>
        </div>
    )
}

export default InsertRecords;