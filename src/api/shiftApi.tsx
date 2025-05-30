import axios from './axiosConfig';

export function createShift({ date, type, capacity }) {
  return axios.post('/core-service/create-shift', { date, type, capacity });
}

export function fetchShiftsByDate(date) {
  return axios.get(`/core-service/fetch-day?date=${date}`);
}

export function updateShift({ date, type, capacity }) {
  return axios.put('/core-service/update-shift', { date, type, capacity });
}

export function assignShift({ staffId, shiftId }) {
  return axios.post('/core-service/Assign-sift', { staffId, shiftId });
}

export function fetchAssignments({ startDate, endDate }) {
  return axios.get(
    `/core-service/assigned?statedate=${startDate}&enddate=${endDate}`
  );
}