import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employee } from 'src/app/modal/employee';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {

    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      desc : [''],
      salary: [''],
      email: ['']
    });

  }

  addemployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.desc = this.empDetail.value.desc;
    this.empObj.salary = this.empDetail.value.salary;

    this.empService.addemployee(this.empObj).subscribe(res=>{
        this.getAllEmployee();
        alert("Employee Added Successfully");
    },err=>{
        console.log(err);
    });

  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
}
