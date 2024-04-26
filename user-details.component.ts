import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  username: string;
  userDetail :any;
  
  imgurl: string;
  name: string;
  bio: string;
  followers: number;
  company: string;
  location: string;
constructor(private active :ActivatedRoute, private githubService:GithubService, private rout:Router){

}
ngOnInit(): void {
  this.active.params.subscribe(params =>{
    this.username=params['id'];
    console.log("params=",this.username);
  })

   this.githubService.getUser(this.username).subscribe({
    complete:()=>{
      console.log("successfully done!");
    },
    error:()=>{
      alert("you have entered a wrong username");
      this.rout.navigate(['search'])
    },
    next:(data:any=[])=>{
      this.userDetail=data;
      console.log(this.userDetail);

      this.bio = this.userDetail.bio;
      this.company = this.userDetail.company;
      this.followers = this.userDetail.followers;
      this.imgurl = this.userDetail.avatar_url;
      this.location = this.userDetail.location;
      this.name = this.userDetail.name;
    }
  })

 }
}
