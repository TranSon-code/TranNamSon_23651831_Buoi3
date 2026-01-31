import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    

    setFormData((prevData) => ({
      ...prevData,      
      [name]: value     
    }));
  };

  return (
    <div className="user-form-container">
      <h2>Thông tin người dùng</h2>
      
      <div className="form-group">
        <label>Họ tên:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label>Tuổi:</label>
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
        />
      </div>

      
      <div className="result-preview">
        <h4>Xem trước dữ liệu:</h4>
        <p><strong>Tên:</strong> {formData.name || '...'}</p>
        <p><strong>Email:</strong> {formData.email || '...'}</p>
        <p><strong>Tuổi:</strong> {formData.age || '...'}</p>
      </div>
    </div>
  );
}

export default UserForm;