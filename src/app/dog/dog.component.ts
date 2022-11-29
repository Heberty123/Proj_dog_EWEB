import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { EndpointDogService } from '../endpoint-dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private dogService: EndpointDogService) { }

  ngOnInit(): void {
  }

  getDog(): void {
    this.dogService.getDog()
          .subscribe(dog => this.dogs.push(dog))
  }

}
