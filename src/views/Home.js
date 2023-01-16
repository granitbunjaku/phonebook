import { Link } from "react-router-dom";

const Home = ({numbers, setNumbers}) => {

  const deleteFunc = (id) => {
    let arrOfNumbers = numbers.filter(number => number['id'] != id);
    setNumbers(arrOfNumbers);
    localStorage.setItem('numbers', JSON.stringify(arrOfNumbers));
  }

  const showNumbers = () => {
    return (
        numbers.map(number => (
            <tr key={number.id}>
              <td>{number.name}</td>
              <td>{number.lastname}</td>
              <td>{number.address}</td>
              <td>{number.city}</td>
              <td>{number.country}</td>
              <td>{number.emails.map(email => (
                <p key={email}>{email}</p>
              ))}</td>
              <td>{number.numbers.map(number => (
                <p key={number}>{number}</p>
              ))}</td>
              <td><Link to={`/edit/${number.id}`}><button className='btn btn-success'>Edit</button></Link></td>
              <td><button className='btn btn-danger' onClick={() => deleteFunc(number.id)}>Delete</button></td>
            </tr>
        ))
    )
  }

  return (
    <div className="home">
      <div className="container">
        <div className="d-flex justify-content-between mb-5 mt-5">
          <h3 className="">Contacts</h3>
          <Link to="/addcontact"><button className="btn btn-primary" type="submit">Add Contact</button></Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {showNumbers()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;