package com.hackthon.hcl.carestaff.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
public class StaffDTO {

    private String name;


    private String staffId;

    private String role;

    private BigInteger contact;


    private String shiftPreference;
}
