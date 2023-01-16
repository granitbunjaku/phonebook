import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import BookForm from '../components/Form/BookForm';

const AddContact = ({numbers, setNumbers}) => { 
    const navigate = useNavigate()

    const initialValues ={
        name: '',
        lastname: '',
        address: '',
        city: '',
        country: '',
        emails: [''],
        numbers: ['']
    }

    const onSubmit = (data) => {
        setNumbers(prevData => {
            let nData = [...prevData, {id: nanoid(), ...data}];
            localStorage.setItem('numbers', JSON.stringify(nData))
            return nData;
        });
        navigate('/');
    }

    return (
        <div className="addcontact">
            <BookForm initialValues={initialValues} onSubmit={onSubmit}/>
        </div>
    )
}

export default AddContact;