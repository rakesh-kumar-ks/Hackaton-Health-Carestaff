package com.hackthon.hcl.carestaff.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "attendance", schema = "carestaff")
@Getter
@Setter
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "staff_shift_mapping_id", referencedColumnName = "id")
    private StaffShiftMapping staffShiftMapping;

    @Column(name = "is_present")
    private Integer isPresent;

    private String createdBy;
    private String modifiedBy;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
}
