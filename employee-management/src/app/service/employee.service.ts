import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "src/app/modal/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   empUrl : string='';
  constructor(private http: HttpClient) {

   this.empUrl ="http://localhost:3000/employees";
 }

  addemployee(emp:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.empUrl,emp);
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
}
}
