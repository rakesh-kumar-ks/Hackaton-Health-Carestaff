package com.hackthon.hcl.carestaff.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
public class ShiftRequestDTO {

    private LocalDate shiftDate;

    private String type;

    private Integer capacity;
}

