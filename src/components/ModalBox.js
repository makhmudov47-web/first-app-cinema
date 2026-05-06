import React from 'react';
import "../../src/styles/mainStyles//ModalBox.css"

const ModalBox = ({setModalBox , children}) => {

    return (
        <>
            <div className='echo' onClick={() => setModalBox('')}>

            </div>
            <div className='ModalBox'>
                {children}
            </div>
        </>

    )

}

export default ModalBox;
