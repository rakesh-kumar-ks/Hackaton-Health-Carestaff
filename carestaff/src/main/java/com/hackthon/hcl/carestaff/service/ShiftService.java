package com.hackthon.hcl.carestaff.service;

import com.hackthon.hcl.carestaff.dto.AssignShiftRequestDTO;
import com.hackthon.hcl.carestaff.dto.ShiftRequestDTO;

public interface ShiftService {
    String addShift(ShiftRequestDTO shiftRequestDTO);
    void assignShift(AssignShiftRequestDTO dto);
}
