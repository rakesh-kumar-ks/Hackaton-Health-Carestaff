import axios from './axiosConfig';

export function addStaff({ name, staffId, role, contact, shiftPreference }) {
  return axios.post('/core-service/add-staff', {
    name, staffId, role, contact, shiftPreference
  });
}

export function searchStaff(query) {
  return axios.get(`/core-service/staff?query=${encodeURIComponent(query)}`);
}