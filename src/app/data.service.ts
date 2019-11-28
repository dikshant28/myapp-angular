import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) 
  { }

  Select()
  {
    return this.http.get("http://localhost:9999/emps");
  }

  SelectById(empid)
  {
    return this.http.get("http://localhost:9999/emps/"+empid);
  }

  Update(empObj)
  {
    return this.http.put("http://localhost:9999/emps/"+empObj.empid, empObj);
  }

  Insert(empObj)
  {
    return this.http.post("http://localhost:9999/emps",empObj);
  }

  Delete(empid)
  {
    return this.http.delete("http://localhost:9999/emps/"+empid);
  }
}
