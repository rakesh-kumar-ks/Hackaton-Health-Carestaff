package com.hackthon.hcl.carestaff.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "staffshiftmapping", schema = "carestaff")
public class StaffShiftMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "staff", referencedColumnName = "id")
    private Staff staff;

    @ManyToOne(optional = false)
    @JoinColumn(name = "shift", referencedColumnName = "id")
    private Shift shift;

    @Column(name = "is_deleted")
    private Integer isDeleted;

    private String createdBy;
    private String modifiedBy;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
}
