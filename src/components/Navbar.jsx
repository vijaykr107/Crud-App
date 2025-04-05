import React from 'react';

const Navbar = ({ firstName, setFirstName, lastName, setLastName, age, setAge, city,setCity,saveEmployee, addEmployee }) => {

    const handleSave = () => {
        saveEmployee(); 
    };

    const handleClear = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setCity('')
    };

    const handleAdd = () => {
        addEmployee(); 
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
            <div>
                <label>First Name:
                    <input type='text' placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </label>
            </div>
            <div>
                <label>Last Name:
                    <input type='text' placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </label>
            </div>
            <div>
                <label>Age:
                    <input type='text' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} value={age} />
                </label>
            </div>
            <div>
                <label>city:
                    <input type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)} value={city} />
                </label>
            </div>
            <div>
                <button className='btn btn-primary' onClick={handleSave}>Save</button>
                <button className='btn btn-danger' onClick={handleClear}>Clear</button>
                <button style={{display:'flex', marginTop:'10px'}}
                className='btn btn-success' onClick={handleAdd}>Add New Employee</button> 
            </div>
        </div>
    );
};

export default Navbar;
