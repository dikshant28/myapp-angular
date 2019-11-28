import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp={"empid":"","empname":"","empsal":""};
  constructor(private service:DataService,
              private route:ActivatedRoute,
              private router:Router) 
  { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      let empid= result.get("empid");
      let observableResult= this.service.SelectById(empid);
      observableResult.subscribe((recordFound)=>{
        this.emp=recordFound[0];
      });
    });
  }

  OnUpdateCallMe(entireFormData)
  {
    let observableResultOfUpdate=
    this.service.Update(this.emp);

    observableResultOfUpdate.subscribe((resultofUpdate)=>{
      this.router.navigate(['/home']);
    })
  }

  CancelUpdate()
  {
    this.router.navigate(['/home']);
  }

}
