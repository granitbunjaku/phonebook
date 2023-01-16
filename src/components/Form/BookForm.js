import { Formik, FieldArray } from 'formik';
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
    name: yup.string().required().max(15),
    lastname: yup.string().required().max(15),
    address: yup.string().required().max(30),
    city: yup.string().required().max(15),
    country: yup.string().required().max(20),
    emails: yup.array().of(yup.string().email('Email Address is not valid').required('Email Address is a required field')),
    numbers: yup.array().of(yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is a required field'))
})

const BookForm = ({initialValues, onSubmit}) => {
    return (
        <div>
        <Formik 
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={initialValues}
            
            validationSchema={validationSchema}

            onSubmit={onSubmit}>
                {({values, handleChange, handleBlur, handleSubmit, errors}) => (
                    <form className="container" onSubmit={handleSubmit}>
                        <h3 className="mb-4 mt-4">Register new contact</h3>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && <span className='text-danger'>{errors.name}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Last Name:</label>
                            <input type="text" className="form-control" name="lastname" 
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input type="text" className="form-control" name="address" 
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.address && <span className='text-danger'>{errors.address}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City:</label>
                            <input type="text" className="form-control" name="city" 
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.city && <span className='text-danger'>{errors.city}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country:</label>
                            <input type="text" className="form-control" name="country" 
                                value={values.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.country && <span className='text-danger'>{errors.country}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <FieldArray name='emails'>
                                {(arrayHelpers) => (
                                    <div>
                                        {values.emails.map((email, index) => {
                                            const name = "emails."+index
                                            return (
                                                <div key={index}>
                                                    <input type="email" className="form-control mt-2" name={name} 
                                                        value={values.emails[index]}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.emails && <span className='text-danger'>{errors.emails[index]}</span>}
                                                </div>
                                            )
                                        })}
                                        <button className='btn btn-primary float-end mt-2' type='button' onClick={() => arrayHelpers.push('')}>Add</button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Number:</label>
                            <FieldArray name='numbers'>
                                {(arrayHelpers) => (
                                    <div>
                                        {values.numbers.map((number, index) => {
                                            const name = "numbers."+index
                                            return (
                                                <div key={index}>
                                                    <input type="tel" className="form-control mt-2" name={name} 
                                                        value={values.numbers[index]}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.numbers && <span className='text-danger'>{errors.numbers[index]}</span>}
                                                </div>
                                            )
                                        })}
                                        <button className='btn btn-primary float-end mt-2' type='button' onClick={() => arrayHelpers.push('')}>Add</button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )

}

export default BookForm;