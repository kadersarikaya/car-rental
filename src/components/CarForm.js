// CarForm.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    price: Yup.number().required("Price is required"),
    image: Yup.string().url("Invalid image URL").required("Image URL is required"),
});

const CarForm = ({ initialValues, onSubmit }) => {
    const formik = useFormik({
        initialValues: initialValues || { title: "", price: "", image: "" },
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title && (
                    <Alert color="danger">{formik.errors.title}</Alert>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="price">Price</Label>
                <Input
                    type="number"
                    id="price"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price && (
                    <Alert color="danger">{formik.errors.price}</Alert>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="image">Image URL</Label>
                <Input
                    type="url"
                    id="image"
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image && (
                    <Alert color="danger">{formik.errors.image}</Alert>
                )}
            </FormGroup>
            <Button type="submit" color="primary">
                Submit
            </Button>
        </Form>
    );
};

export default CarForm;
