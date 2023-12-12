// CarModal.js

import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import CarForm from "./CarForm";

const CarModal = ({ isOpen, toggle, car, onSubmit }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                {car ? "Edit Car" : "Add Car"}
            </ModalHeader>
            <ModalBody>
                <CarForm initialValues={car} onSubmit={onSubmit} />
            </ModalBody>
        </Modal>
    );
};

export default CarModal;
