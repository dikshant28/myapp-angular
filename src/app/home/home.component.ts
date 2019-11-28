import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps:any;

  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() 
  {
   let observableResult= this.service.Select();
   observableResult.subscribe((result)=>{
     this.emps=result;
   })
  }

  GoToRegister()
  {
    this.router.navigate(['/register']);
  }

}
