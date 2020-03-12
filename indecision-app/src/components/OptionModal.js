import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option" onRequestClose={props.clearSelectedOption}>
            <h2>Selected Option</h2>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearSelectedOption}>Okay</button>
        </Modal>
    );
};

export default OptionModal;