import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  id: number;
  category: string [];
  constructor(private route: ActivatedRoute, private router: Router,private httpService: HttpClient,private taskService:TaskService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
     
    });
    this.getData();
    
  }
  getData(){

  this.httpService.get('../assets/list.json').subscribe(
    data => {
      this.category = data as string [];     
      
    }

  );
}
onSubmit(idCategory){

this.taskService.setidCategory(idCategory)

}


}
