package com.hackthon.hcl.carestaff.repositroy;

import com.hackthon.hcl.carestaff.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StaffRepository extends JpaRepository<Staff, Long> {
    @Query(value = """
    SELECT * FROM carestaff.staff 
    WHERE LOWER(staff_id) LIKE LOWER(CONCAT('%', :query, '%')) 
       OR LOWER(name) LIKE LOWER(CONCAT('%', :query, '%')) 
       OR LOWER(role) LIKE LOWER(CONCAT('%', :query, '%'))
    """, nativeQuery = true)
    public List<Staff> findByQuery(@Param("query") String query);
}
