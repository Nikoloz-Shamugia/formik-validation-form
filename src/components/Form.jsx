import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormStyles from './FormStyles';

const Form = () =>{
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
              /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
              'Password must contain at least one uppercase letter, one number, and one symbol'
            )
            .required('Password is required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const {
        formStyle,
        inputStyle,
        submitButtonStyles,
        inputContainerStyle,
        iconStyles,
        errorMessageStyle,
      } = FormStyles;

    const getInputStyle = fieldName => {
    return formik.touched[fieldName] && formik.errors[fieldName]
        ? { ...inputStyle, border: '1px solid red' } 
        : inputStyle; 
    };

    return(
        <form onSubmit={formik.handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <input
              style={getInputStyle('firstName')}
              placeholder="First Name"
              id="firstName"
              type="text"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div style={errorMessageStyle}>
                {formik.errors.firstName}
                <img style={iconStyles} alt='warning-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0rEQBDGI4I2VmJnqVhYHeRmOLCIzuREuPoafQJ9An0BfQJ9An2DewAL+6sFy2tEhJhdQUFuJRcLsboks/F22Q+mDPP9dvbvJIqCgoKCgtqWTnGgGY1opDhoxbwZ7q5owkdxAMYnc7S9ah1AM15YMG/KKsC5VfPv1NvUDMoaAIMqclgD0IR39sxjGYS3Vszn+/GeYpzaBlCM0zztJqLmzXC4rAjH1keffyAIx0VOMYCcu2dVTfxV1e/zFE5FzGeHvXXN+NI2gCZ4zZN4ozGAJrypMw0aA/BsQV83M9+HjiL4+i8AVeTuQ6eWeRNFS5rwvu5CFKkAz6rwUHipDKAYTmonlQRgNCqF40rmn5NkTTFMFgaAYVJ4mn/0Ca+aJJQG0OV6uJzLfHYQbynCj8UDwM83hp05Rh9GTZPZANBlFUb+A2SuTyHnF7HUNioZquo2KnGQiQKkFQ8yiauEWFDNq4TzlzkvrtNePGicf1J68ah3vq3iRWPLi9ai881dL9rrzv/gCAoKCgqKfukbvIFZ86xmKoUAAAAASUVORK5CYII="></img>
              </div>
            ) : null}
          </div>
          <div style={inputContainerStyle}>
            <input 
              id="lastName" 
              type="text" 
              style={getInputStyle('lastName')}
              placeholder="Last Name"
              {...formik.getFieldProps('lastName')} />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={errorMessageStyle}>
                {formik.errors.lastName}
                <img style={iconStyles} alt='warning-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0rEQBDGI4I2VmJnqVhYHeRmOLCIzuREuPoafQJ9An0BfQJ9An2DewAL+6sFy2tEhJhdQUFuJRcLsboks/F22Q+mDPP9dvbvJIqCgoKCgtqWTnGgGY1opDhoxbwZ7q5owkdxAMYnc7S9ah1AM15YMG/KKsC5VfPv1NvUDMoaAIMqclgD0IR39sxjGYS3Vszn+/GeYpzaBlCM0zztJqLmzXC4rAjH1keffyAIx0VOMYCcu2dVTfxV1e/zFE5FzGeHvXXN+NI2gCZ4zZN4ozGAJrypMw0aA/BsQV83M9+HjiL4+i8AVeTuQ6eWeRNFS5rwvu5CFKkAz6rwUHipDKAYTmonlQRgNCqF40rmn5NkTTFMFgaAYVJ4mn/0Ca+aJJQG0OV6uJzLfHYQbynCj8UDwM83hp05Rh9GTZPZANBlFUb+A2SuTyHnF7HUNioZquo2KnGQiQKkFQ8yiauEWFDNq4TzlzkvrtNePGicf1J68ah3vq3iRWPLi9ai881dL9rrzv/gCAoKCgqKfukbvIFZ86xmKoUAAAAASUVORK5CYII="></img>
                </div>
            ) : null}
          </div>
          <div style={inputContainerStyle}>
            <input 
              id="email" 
              type="email" 
              style={getInputStyle('email')}
              placeholder="Email Address"
              {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div style={errorMessageStyle}>
                {formik.errors.email}
                <img style={iconStyles} alt='warning-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0rEQBDGI4I2VmJnqVhYHeRmOLCIzuREuPoafQJ9An0BfQJ9An2DewAL+6sFy2tEhJhdQUFuJRcLsboks/F22Q+mDPP9dvbvJIqCgoKCgtqWTnGgGY1opDhoxbwZ7q5owkdxAMYnc7S9ah1AM15YMG/KKsC5VfPv1NvUDMoaAIMqclgD0IR39sxjGYS3Vszn+/GeYpzaBlCM0zztJqLmzXC4rAjH1keffyAIx0VOMYCcu2dVTfxV1e/zFE5FzGeHvXXN+NI2gCZ4zZN4ozGAJrypMw0aA/BsQV83M9+HjiL4+i8AVeTuQ6eWeRNFS5rwvu5CFKkAz6rwUHipDKAYTmonlQRgNCqF40rmn5NkTTFMFgaAYVJ4mn/0Ca+aJJQG0OV6uJzLfHYQbynCj8UDwM83hp05Rh9GTZPZANBlFUb+A2SuTyHnF7HUNioZquo2KnGQiQKkFQ8yiauEWFDNq4TzlzkvrtNePGicf1J68ah3vq3iRWPLi9ai881dL9rrzv/gCAoKCgqKfukbvIFZ86xmKoUAAAAASUVORK5CYII="></img>
                </div>
            ) : null}
          </div>
          <div style={inputContainerStyle}>
            <input 
              id="password" 
              type="password" 
              style={getInputStyle('password')}
              placeholder="Password"
              {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password ? (
              <div style={errorMessageStyle}>
                {formik.errors.password}
                <img style={iconStyles} alt='warning-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0rEQBDGI4I2VmJnqVhYHeRmOLCIzuREuPoafQJ9An0BfQJ9An2DewAL+6sFy2tEhJhdQUFuJRcLsboks/F22Q+mDPP9dvbvJIqCgoKCgtqWTnGgGY1opDhoxbwZ7q5owkdxAMYnc7S9ah1AM15YMG/KKsC5VfPv1NvUDMoaAIMqclgD0IR39sxjGYS3Vszn+/GeYpzaBlCM0zztJqLmzXC4rAjH1keffyAIx0VOMYCcu2dVTfxV1e/zFE5FzGeHvXXN+NI2gCZ4zZN4ozGAJrypMw0aA/BsQV83M9+HjiL4+i8AVeTuQ6eWeRNFS5rwvu5CFKkAz6rwUHipDKAYTmonlQRgNCqF40rmn5NkTTFMFgaAYVJ4mn/0Ca+aJJQG0OV6uJzLfHYQbynCj8UDwM83hp05Rh9GTZPZANBlFUb+A2SuTyHnF7HUNioZquo2KnGQiQKkFQ8yiauEWFDNq4TzlzkvrtNePGicf1J68ah3vq3iRWPLi9ai881dL9rrzv/gCAoKCgqKfukbvIFZ86xmKoUAAAAASUVORK5CYII="></img>
              </div>
            ) : null}
          </div>
          <button type="submit" onClick={formik.handleSubmit} style={submitButtonStyles}>CLAIM YOUR FREE TRIAL</button>
        </form>
    )

}

export default Form