package com.hackthon.hcl.carestaff.controller;

import com.hackthon.hcl.carestaff.dto.AssignShiftRequestDTO;
import com.hackthon.hcl.carestaff.dto.ShiftRequestDTO;
import com.hackthon.hcl.carestaff.service.ShiftService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shift")
@Slf4j
public class ShiftController {

    private final ShiftService shiftService;

    public ShiftController(ShiftService shiftService) {
        this.shiftService = shiftService;
    }

    @PostMapping("/add-shift")
    @Operation(summary = "API for Adding the Shift")
    public ResponseEntity<String> addShift( @RequestBody ShiftRequestDTO shiftRequestDTO) {
        return ResponseEntity.ok(shiftService.addShift(shiftRequestDTO));
    }

    @Operation(summary = "API to assign the shift")
    @PostMapping("/assign-shift")
    public ResponseEntity<String> assignShift(@RequestBody AssignShiftRequestDTO requestDTO) {
        shiftService.assignShift(requestDTO);
        return ResponseEntity.ok("Shift assigned successfully.");
    }
}
