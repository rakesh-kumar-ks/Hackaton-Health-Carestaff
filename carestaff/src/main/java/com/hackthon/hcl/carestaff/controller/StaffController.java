package com.hackthon.hcl.carestaff.controller;

import com.hackthon.hcl.carestaff.dto.StaffDTO;
import com.hackthon.hcl.carestaff.service.StaffService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/staff")
@Slf4j
public class StaffController {

    private final StaffService staffService;

    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }


    @PostMapping("/add-staff")
    @Operation(summary = "API for Adding the staff")
    public ResponseEntity<String> addStaff(@RequestBody StaffDTO staffDTO) {
        log.info("Inside StaffController.addStaff at : {}", System.currentTimeMillis());
        return ResponseEntity.ok(staffService.addStaff(staffDTO));
    }

    @GetMapping()
    @Operation(summary = "API for get the staff list")
    public ResponseEntity<List<StaffDTO>> getStaff(@RequestParam String query) {
        log.info("Inside StaffController.getStaff at : {}", System.currentTimeMillis());
        return ResponseEntity.ok(staffService.getStaff(query));
    }
}
