import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Docker Hub';
  card:any;

  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {
  this.showspinner(); }

  onClickMe1(){
    this.showspinner();
    //make http call
    console.log("Inside 1");
  }
  onClickMe2(){
    this.showspinner();
    //make http call
    console.log("Inside 2");
  }
  onClickMe3(){
    this.showspinner();
    // make http call
    console.log("Inside 3");
  }

  showspinner(){
    this.spinnerService.show();
    setTimeout(() => {
        this.spinnerService.hide();
    }, 5000);
  }

  populatecard(data:any){
    console.log();
    this.card=data;
 
  }
  
  getapicall(url:string) {
    return this.http.get(url).subscribe(data=>{console.log(data)
    this.populatecard(data)});
  }

}
