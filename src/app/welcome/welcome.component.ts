import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'welcome component';
  msg = 'welcome to welcome component';
  name = ''
  welcomeMessageFromService:string
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // console.log("get welcome message");
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage");
  }

  getWelcomeMessageWithParameter() {
    // console.log("get welcome message");
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathvariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService=response.message;
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService=error.message;
    
  }

}
