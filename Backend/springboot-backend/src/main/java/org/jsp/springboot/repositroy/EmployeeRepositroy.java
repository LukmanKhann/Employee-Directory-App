package org.jsp.springboot.repositroy;

import org.jsp.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EmployeeRepositroy extends JpaRepository<Employee,Integer > {
	
	

}
