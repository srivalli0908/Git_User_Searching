import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
  searchform: FormGroup;
  username: string='';
  

  constructor(private route:Router){ }

  ngOnInit():void{
     this.searchform = new FormGroup({
        username :new FormControl(
          null,
          [Validators.required]
      )
    })
  }
  sendUser(){
    const username = this.searchform.value.username;
    this.route.navigate([`/user/${username}`])
  }
}
