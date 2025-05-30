package com.hackthon.hcl.carestaff.repositroy;

import com.hackthon.hcl.carestaff.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long> {
}
