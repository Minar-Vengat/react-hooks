import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from './features/formSlice';

function App() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.form);

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Redux Form Submit</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        /><br /><br />
        <input
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>

      <hr />
      <h3>Submitted Data from Redux:</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default App;
