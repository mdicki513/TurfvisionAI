
import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    turfType: 'Landscaping',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Quote submitted! We will contact you soon.');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 420 }}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <select name="turfType" onChange={handleChange} value={formData.turfType}>
        <option value="Landscaping">Landscaping ($8/sq ft)</option>
        <option value="Pet Turf">Pet Turf ($9/sq ft)</option>
        <option value="Putting Green">Putting Green ($12/sq ft)</option>
      </select>
      <button type="submit">Submit Quote</button>
    </form>
  );
}
