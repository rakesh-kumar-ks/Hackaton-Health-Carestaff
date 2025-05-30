package com.hackthon.hcl.carestaff.service.impl;

import com.hackthon.hcl.carestaff.dto.AssignShiftRequestDTO;
import com.hackthon.hcl.carestaff.dto.ShiftRequestDTO;
import com.hackthon.hcl.carestaff.entity.Shift;
import com.hackthon.hcl.carestaff.entity.Staff;
import com.hackthon.hcl.carestaff.entity.StaffShiftMapping;
import com.hackthon.hcl.carestaff.repositroy.ShiftRepository;
import com.hackthon.hcl.carestaff.repositroy.StaffRepository;
import com.hackthon.hcl.carestaff.repositroy.StaffShiftMappingRepository;
import com.hackthon.hcl.carestaff.service.ShiftService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ShiftServiceImpl implements ShiftService {

    private ShiftRepository shiftRepository;
    private StaffRepository staffRepository;
    private StaffShiftMappingRepository staffShiftMappinfRepository;

    public ShiftServiceImpl(ShiftRepository shiftRepository,
                            StaffRepository staffRepository,
                            StaffShiftMappingRepository staffShiftMappinfRepository) {
        this.shiftRepository = shiftRepository;
        this.staffRepository = staffRepository;
        this.staffShiftMappinfRepository = staffShiftMappinfRepository;
    }


    @Override
    public String addShift(ShiftRequestDTO shiftRequestDTO) {
        Shift shift = siftRequestDTOtoShiftEntity(shiftRequestDTO);
        return shiftRepository.save(shift).getId().toString();

    }

    @Override
    public void assignShift(AssignShiftRequestDTO dto) {
        Staff staff = staffRepository.findById(dto.getStaffId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid staff ID"));

        Shift shift = shiftRepository.findById(dto.getShiftId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid shift ID"));

        StaffShiftMapping mapping = new StaffShiftMapping();
        mapping.setStaff(staff);
        mapping.setShift(shift);
        mapping.setIsDeleted(0);
        mapping.setCreatedBy("SYSTEM");
        mapping.setCreatedDate(LocalDateTime.now());

        staffShiftMappinfRepository.save(mapping);
    }


    public static Shift siftRequestDTOtoShiftEntity(ShiftRequestDTO dto) {
        Shift shift = new Shift();
        shift.setShiftDate(dto.getShiftDate());
        shift.setType(dto.getType());
        shift.setTotalCapacity(dto.getCapacity());
        shift.setAvailableCapacity(dto.getCapacity());
        shift.setCreatedBy("Admin");
        shift.setCreatedDate(LocalDateTime.now());
        return shift;
    }
}
