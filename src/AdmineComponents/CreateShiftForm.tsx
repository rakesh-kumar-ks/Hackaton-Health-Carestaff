import React, { useState } from 'react';
import { createShift } from '../api';

export default function CreateShiftForm() {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createShift({ date, type, capacity });
      alert('Shift created ✅');
      setDate('');
      setType('');
      setCapacity('');
    } catch (err) {
      console.error(err);
      alert('Error creating shift');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Type</label>
        <input
          type="text"
          placeholder="e.g. Morning"
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Capacity</label>
        <input
          type="number"
          value={capacity}
          onChange={e => setCapacity(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Shift
      </button>
    </form>
  );
}