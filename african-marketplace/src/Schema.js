import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    location: yup
        .string()
        .oneOf(['Eastern-Cape', 'Free-State', 'Gauteng', 'Limpopo', 'North-West'], 'Province is required'),
    description: yup
        .string(),
    price: yup
        .string()
        .required('Price is required'),
    category: yup
        .string(),
    URL: yup
        .string(),
    user_id: yup
        .string(),
})

export default formSchema;