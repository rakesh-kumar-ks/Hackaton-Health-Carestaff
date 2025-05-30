import React, { useState } from 'react';
import { addStaff } from '../api';

export default function AddStaffForm() {
  const [name, setName] = useState('');
  const [staffId, setStaffId] = useState('');
  const [role, setRole] = useState('');
  const [contact, setContact] = useState('');
  const [shiftPreference, setShiftPreference] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addStaff({ name, staffId, role, contact, shiftPreference });
      alert('Staff added ✅');
      setName('');
      setStaffId('');
      setRole('');
      setContact('');
      setShiftPreference('');
    } catch (err) {
      console.error(err);
      alert('Error adding staff');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Staff ID</label>
        <input
          type="text"
          value={staffId}
          onChange={e => setStaffId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Role</label>
        <input
          type="text"
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Contact</label>
        <input
          type="text"
          value={contact}
          onChange={e => setContact(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Shift Preference</label>
        <select
          value={shiftPreference}
          onChange={e => setShiftPreference(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="" disabled>
            Select a shift
          </option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Night">Night</option>
          
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add Staff
      </button>
    </form>
  );
}
