import React, { useEffect, useState } from 'react';
import { EmployeeData } from './EmployeeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('')
  const [id, setId] = useState(0);

  useEffect(() => {
    setData(EmployeeData);
  }, []);


  const handleEdit = (id) => {
    const dt = data.find(item => item.id === id);
    if (dt) {
      setId(id); 
      setFirstName(dt.firstName); 
      setLastName(dt.lastName);
      setAge(dt.age);
      setCity(dt.city)
    }
  };

  
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        const dt = data.filter(item => item.id !== id);
        setData(dt);
      }
    }
  };

  
  const saveEmployee = () => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, firstName, lastName, age ,city}; 
      }
      return item;
    });
    setData(updatedData); 
  };

  
  const addEmployee = () => {
    const newEmployee = {
      id: data.length + 1,
      firstName,
      lastName,
      age,
      city
    };
    setData([...data, newEmployee]); 
    setFirstName(''); 
    setLastName('');
    setAge(0);
    setCity('')
  };

  return (
    <div className='App'>
      <Navbar 
        firstName={firstName} 
        setFirstName={setFirstName} 
        lastName={lastName} 
        setLastName={setLastName} 
        age={age} 
        setAge={setAge} 
        city={city}
        setCity={setCity}
        
        saveEmployee={saveEmployee}  
        addEmployee={addEmployee}   
      />
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>City</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
