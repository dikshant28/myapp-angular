import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:ActivatedRoute,     
              private router:Router,
              private service:DataService) 
  { }

  message=""
  ngOnInit() 
  {
  }

  OnAddCallMe(entireData)
  {
    let empObj= entireData.form.value;
    let observableResult=
    this.service.Insert(empObj);

    observableResult.subscribe((result:any)=>{
      this.message="Data is inserted";
    });
  }

  GoBackHome()
  {
    this.router.navigate(['/home']);
  }

}
