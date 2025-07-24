
import { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    turfType: 'Landscaping',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Quote submitted! We will contact you soon.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <select name="turfType" onChange={handleChange}>
        <option>Landscaping</option>
        <option>Pet Turf</option>
        <option>Putting Green</option>
      </select>
      <button type="submit">Submit Quote</button>
    </form>
  );
};

export default LeadForm;
