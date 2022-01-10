import { Formik } from 'formik'
import * as yup from "yup"
import Button from "./Button"
import FormField from './FormField'
import Menu from './Menu'
import { useContext, useCallback } from "react"
import AppContext from "./AppContext"

export default function Home() {
  const {
    state: { data, totalIn, totalOut},
    addEntry
  } = useContext(AppContext);

  const initialValues = {
    amount: '',
    description: '',
    type: 'in'
  };

  const validationSchema = yup.object().shape({
    amount: yup.number().notOneOf([0]).positive().required().label("Amount"),
    description: yup.string().required().label("Description"),
    type: yup.string().required().label("Entry Type")
  });

  const handleFormSubmit = useCallback(
    async (values, { setErrors, setFieldError }) => {      
      addEntry(values);
      return true;
    },
    []
  );

return (
<div>
  <Menu />
  <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isValid, isSubmitting, errors }) =>
        (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <div className="mt-4">
              <span className="text-gray-700">Entry Type</span>
              <div className="mt-2">
                <FormField type="radio" className="form-radio" name="type" value="in">INCOMING</FormField>
                <FormField type="radio" className="form-radio" name="type" value="out">OUTGOING</FormField>              
              </div>
            </div>
            <FormField
              name="amount"
              placeholder="Enter amount..."
            >
              Amount
            </FormField>
            <FormField
              name="description"
              placeholder="Enter description..."
            >
              Description
            </FormField>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Add Entry
            </Button>       
          </form>
        )
      }
    </Formik>    
  </div>
  )
}
