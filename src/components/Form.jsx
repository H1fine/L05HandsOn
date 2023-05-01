import React, {useState} from 'react';

{
  formFields.map(fieldDetails =>
      <FormFieldInput
        key={fieldDetails.fieldName}
        handleFieldChange={handleFormValuesChange}
        {...fieldDetails}
      />
  )
}
import FormFieldInput from './FormFieldInput';

const Form = () => ({
  handleFormSubmit,
  formFields,
}) => {

  const [formValues, setFormValues] = useState({});

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if(handleFormSubmit) {
      handleFormSubmit(formValues);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
		// Form fields here
      <div className="control">
        <button className="button is-primary">Sign up</button>
      </div>
    </form>
  );
};

export default Form;