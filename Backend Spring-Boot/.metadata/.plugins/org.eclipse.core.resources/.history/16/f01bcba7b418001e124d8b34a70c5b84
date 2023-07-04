package org.jsp.springboot.controller;

import java.util.List;

import org.jsp.springboot.model.Employee;
import org.jsp.springboot.repositroy.EmployeeRepositroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
        @Autowired
	  private EmployeeRepositroy employeeRepositroy;
	     
        //get all employees 
        @GetMapping("/employees")
       public  List<Employee> getAllEmployees(){
    	   return employeeRepositroy.findAll();
       }
        
//        create Employee
        @PostMapping("/employees")
        public Employee createEmployee (@RequestBody Employee employee) {
        	return employeeRepositroy.save(employee);
        }
}

