import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { createTable } from '../HandlerApi'

const TableInput = ({ setShow, show }) => {

    const [colunsName, setColumsName] = useState([''])
    const [columnsType, setColumnsType] = useState([''])
    const [tableName, setTableName] = useState('')

    const addInputHandler = () => {
        setColumsName([...colunsName, ''])
        setColumnsType([...columnsType, ''])
    }

    const columnNameHanlder = (index, event) => {
        const newInputs = [...colunsName];
        newInputs[index] = event.target.value;
        setColumsName(newInputs);
    }

    const columTypeHandler = (index, event) => {
        const newSelectInput = [...columnsType];
        newSelectInput[index] = event.target.value;
        setColumnsType(newSelectInput);
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        createTable(colunsName, columnsType, tableName)
    }


    return (
        <div className='table__input'>
            <form className='table__form' onSubmit={onSubmitHandler}>
                <input
                    className='table__name'
                    type='text'
                    placeholder='Enter table Name...'
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                />
                <div className='table__form__left'>
                    <div className='input__field'>
                        {colunsName.map((input, index) =>
                            <input
                                type='text'
                                placeholder='Column Name....'
                                value={input}
                                onChange={(e) => columnNameHanlder(index, e)}
                            />
                        )}
                        <button onClick={addInputHandler} className='add__input_btn' type='button'>Add another field</button>
                    </div>
                    <div className='input__type__field'>
                        {columnsType.map((input, index) =>
                            <Form.Select onChange={(e) => columTypeHandler(index, e)} className='input__select'>
                                <option>Type</option>
                                <option value="STRING">STRING</option>
                                <option value="NUMBER">NUMBER</option>
                                <option value="DOUBLE">DOUBLE</option>
                            </Form.Select>
                        )}
                    </div>
                </div>
                <button onClick={() => setShow(!show)} type='submit'>CREATE TABLE</button>
            </form>
        </div>
    )
}

export default TableInput