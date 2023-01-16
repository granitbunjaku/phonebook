import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/Form/BookForm";

const Edit = ({numbers, setNumbers}) => {
    const {id} = useParams('id');
    const navigate = useNavigate();
    
    const number = numbers.find((n) => n.id === id);
    
    const initialValues = {
        name: number.name,
        lastname: number.lastname,
        address: number.address,
        city: number.city,
        country: number.country,
        emails: number.emails,
        numbers: number.numbers
    }
    
    const onSubmit = data => {
        setNumbers(prevData => {
            let pData = prevData.filter(num => num.id !== number.id) 
            let nData = [...pData, {id:number.id, ...data}];
            localStorage.setItem('numbers', JSON.stringify(nData))
            return nData;
        })
        navigate('/');
    }

    return (
        <div className="edit">
            <BookForm initialValues={initialValues} onSubmit={onSubmit} />
        </div>
    )
}

export default Edit;