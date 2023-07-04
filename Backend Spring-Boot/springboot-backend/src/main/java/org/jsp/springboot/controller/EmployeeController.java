package org.jsp.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsp.springboot.exception.ResourceNotFoundException;
import org.jsp.springboot.model.Employee;
import org.jsp.springboot.repositroy.EmployeeRepositroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
        @Autowired
	  private EmployeeRepositroy employeeRepositroy;
	     
        //get all employees Rest Api
        @GetMapping("/employees")
       public  List<Employee> getAllEmployees(){
    	   return employeeRepositroy.findAll();
       }
        
//        create Employee rest Api
        @PostMapping("/employees")
        public Employee createEmployee (@RequestBody Employee employee) {
        	return employeeRepositroy.save(employee);
        }
        
//        get employee by id rest Api
        @GetMapping("/employees/{id}")
        public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
        	Employee employee = employeeRepositroy.findById(id)
        			.orElseThrow(()-> new ResourceNotFoundException("Employee dose not exist with id"+id));
        	return ResponseEntity.ok(employee);
        }
        
        
//        update Employee rest Api
        @PutMapping("/employees/{id}")
        public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employeeDetails){
        	Employee employee = employeeRepositroy.findById(id)
        			.orElseThrow(()-> new ResourceNotFoundException("Employee dose not exist with id"+id));
        	
        	employee.setFirstname(employeeDetails.getFirstname());
        	employee.setLastname(employeeDetails.getLastname());
        	employee.setAddress(employeeDetails.getAddress());
        	employee.setCountry(employeeDetails.getCountry());
        	employee.setEmail(employeeDetails.getEmail());
        	employee.setCity(employeeDetails.getCity());
        	employee.setGender(employeeDetails.getGender());
        	employee.setDateofbirth(employee.getDateofbirth());
        	employee.setMobile(employeeDetails.getMobile());
        	
        	Employee updateEmployee = employeeRepositroy.save(employee);
        	
        	return ResponseEntity.ok(updateEmployee);
        }
        
//        Delete Employee Rest Api
        @DeleteMapping("/employees/{id}")
        public ResponseEntity<Map<String, Boolean>> deleteEmployee( @PathVariable int id){
        	Employee employee = employeeRepositroy.findById(id)
        			.orElseThrow(()-> new ResourceNotFoundException("Employee dose not exist with id"+id));
          employeeRepositroy.delete(employee);
          Map<String, Boolean> response = new HashMap<>();
          response.put("deleted", Boolean.TRUE);
          return ResponseEntity.ok(response);
        
        }
        
        
}


