import React, { useState } from 'react';
export default function App() {
  const [form, setForm] = useState({ name: '', email: '', age: '', course: '', gender: '', terms: false });
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course || !form.gender) return setErr(true);
    setData(form);
    setForm({ name: '', email: '', age: '', course: '', gender: '', terms: false });
    setErr(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" value={form.name} onChange={update} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={update} /><br />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={update} /><br />
        
        <select name="course" value={form.course} onChange={update}>
          <option value="">Course</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select><br />

        <input type="radio" name="gender" value="Male" onChange={update} checked={form.gender === 'Male'} /> Male
        <input type="radio" name="gender" value="Female" onChange={update} checked={form.gender === 'Female'} /> Female<br />

        <input type="checkbox" name="terms" checked={form.terms} onChange={update} /> Terms<br />
        
        {err && <p style={{ color: 'red' }}>Fill all fields!</p>}
        <button disabled={!form.terms}>Submit</button>
      </form>

      {data && (
        <div style={{ border: '1px solid', marginTop: '10px', padding: '10px' }}>
          <p>Name: {data.name}</p>
          <p>Course: {data.course}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
    </div>
  );
}