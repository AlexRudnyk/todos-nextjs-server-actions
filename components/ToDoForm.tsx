"use client";

import { addTodo } from "@/actions";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ToDoForm = () => {
  const initialValues = {
    title: "",
  };

  const handleFormSubmit = (
    { title }: { title: string },
    { resetForm }: { resetForm: any }
  ) => {
    addTodo(title);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <Form className="flex items-center mb-8 pr-3 w-96 justify-between">
        <div className="relative mr-10">
          <Field
            type="text"
            name="title"
            placeholder="Enter your todo..."
            className="p-2 border-b-2 border-gray-300 w-60"
          />
          <div className="absolute top-10 text-red-600">
            <ErrorMessage name="todo" />
          </div>
        </div>
        <div>
          <button type="submit" className="bg-gray-200 p-2 rounded-xl">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ToDoForm;
