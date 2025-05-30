package com.hackthon.hcl.carestaff.service;

import com.hackthon.hcl.carestaff.dto.StaffDTO;

import java.util.List;

public interface StaffService {
    String addStaff(StaffDTO staffDTO);
    List<StaffDTO> getStaff(String query);
}
