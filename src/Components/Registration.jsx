import React, { useReducer, useState } from 'react';
const initialState = {
  users: [],
  editingUser: null,
};
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: Date.now() }],
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'SET_EDIT_USER':
      return {
        ...state,
        editingUser: action.payload,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        editingUser: null,
      };
    default:
      return state;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age) {
      alert('Please fill all fields');
      return;
    }
    if (state.editingUser) {  
      dispatch({
        type: 'UPDATE_USER',
        payload: { ...formData, id: state.editingUser.id },
      });
    } else {
      dispatch({ type: 'ADD_USER', payload: formData });
    }    
    setFormData({ name: '', email: '', age: '' });
  };
  const handleEdit = (user) => {
    dispatch({ type: 'SET_EDIT_USER', payload: user });
    setFormData({ name: user.name, email: user.email, age: user.age });
  };
  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };
  return (
    <center>
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Advanced Registration using <code>useReducer</code></h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />{' '}
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />{' '}
        <br /><br />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />{' '}
        <br /><br />
        <button type="submit">{state.editingUser ? 'Update' : 'Submit'}</button>
      </form>
      <h3>Show Details</h3>
      {state.users.length === 0 ? (
        <p>No users registered.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>{' '}
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </center>
  );
};
export default App;