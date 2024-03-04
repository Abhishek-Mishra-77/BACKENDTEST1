import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Model({ show, setShow, children, Title }) {

    return (
        <Modal className='modal' show={show} onHide={setShow}>
            <Modal.Header className='modal__Title' closeButton>
                <Modal.Title>{Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default Model;