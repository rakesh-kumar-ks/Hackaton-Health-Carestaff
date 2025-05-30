package com.hackthon.hcl.carestaff.service.impl;

import com.hackthon.hcl.carestaff.dto.StaffDTO;
import com.hackthon.hcl.carestaff.entity.Staff;
import com.hackthon.hcl.carestaff.repositroy.StaffRepository;
import com.hackthon.hcl.carestaff.service.StaffService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class StaffServiceImpl implements StaffService {

    private final StaffRepository staffRepository;

    public StaffServiceImpl(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    @Override
    public String addStaff(StaffDTO staffDTO) {
        Staff staff = new Staff();
        staff.setName(staffDTO.getName());
        staff.setRole(staffDTO.getRole());
        staff.setStaffId(staffDTO.getStaffId());
        staff.setContactNo(staffDTO.getContact());
        staff.setShiftPreference(staffDTO.getShiftPreference());
        staff.setCreatedBy("Admin");
        staff.setCreatedDate(LocalDateTime.now());
        staff.setModifiedDate(LocalDateTime.now());
        staff.setModifiedBy("Admin");
        return staffRepository.save(staff).getId().toString();
    }

    @Override
    public List<StaffDTO> getStaff(String query) {
        List<StaffDTO> dtoList = new ArrayList<>();
        List<Staff> staffList = staffRepository.findByQuery(query);

        for (Staff staff : staffList) {
            StaffDTO dto = new StaffDTO();
            dto.setStaffId(staff.getStaffId());
            dto.setName(staff.getName());
            dto.setRole(staff.getRole());
            dto.setShiftPreference(staff.getShiftPreference());
            dto.setContact(staff.getContactNo());
            dtoList.add(dto);
        }
        return dtoList;
    }
}
