import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Recommendation(props) {
    const [show, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);  

    const {title, excerpt, bodycontent} = props.recommendation;


    return (
        <>
        <a onClick={modalShow} className='streched-link text-dark' style={{textDecoration:"none"}}>
            <div className="card shadow h-100">
                <div className="card-body">
                    
                    <h5 className="card-text">
                        {title.slice(0,35)}
                    </h5>
                    <p className="card-text text-secondary mb-0">
                        {excerpt}
                    </p>
                    <p className="card-text text-secondary">
                        {bodycontent}                
                    </p>
                </div>
            </div>
        </a>

        <Modal show={show} onHide={modalClose}>
            <Modal.Header closeButton noBorder>
                <Modal.Title>    
                </Modal.Title> 
            </Modal.Header>
                <h5 className="text-center pt-2 my-2">{title}</h5>
                <p className="text-center text-secondary mb-0">
                    {excerpt}
                </p>
                <p className="text-center text-secondary pb-2">
                    {bodycontent}                
                </p>
        </Modal>
        </>
        
    )
  }

export default Recommendation;