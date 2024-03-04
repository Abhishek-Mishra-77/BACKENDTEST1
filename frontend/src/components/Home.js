import React, { useState } from 'react'
import Header from './Header'
import CreateTable from './CreateTable'
import Model from '../UI/Model';
import InsertRecords from './InsertRecords';
import RecordsList from './RecordsList';

const Home = () => {
    const [show, setShow] = useState(false);
    const [showRecords, setShowRecords] = useState(false);

    return (
        <div>
            <Header />
            <div className='main'>
                <div className='main__left'>
                    <div className='main__left__content'>
                        <h4> - Users</h4>
                    </div>
                    <button onClick={() => setShow(!show)}>Create New Table++</button>
                </div>
                <div className='main__right'>
                    <Model show={show} setShow={setShow} Title='CREATE TABLE'>
                        <h2>Table Name</h2>
                        <CreateTable show={show} setShow={setShow} />
                    </Model>
                    <Model show={showRecords} setShow={setShowRecords} Title='INSERT RECORDS'>
                        <h2>Add Record</h2>
                        <InsertRecords show={showRecords} setShowRecords={setShowRecords} />
                    </Model>
                    <button onClick={() => setShowRecords(!showRecords)} className='insert__record'>INSERT RECORDS</button>

                    <div className='record__list'>
                        <RecordsList />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Home