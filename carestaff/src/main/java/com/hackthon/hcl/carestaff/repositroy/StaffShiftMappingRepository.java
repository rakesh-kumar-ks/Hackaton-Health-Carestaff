package com.hackthon.hcl.carestaff.repositroy;

import com.hackthon.hcl.carestaff.entity.StaffShiftMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface StaffShiftMappingRepository extends JpaRepository<StaffShiftMapping, Long> {
}
