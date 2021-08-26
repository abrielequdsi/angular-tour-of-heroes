import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  // heroes: Hero[] = HEROES;


  constructor(private heroService: HeroService, private messageService: MessageService) { }
  // 1. Declare the service as private

  ngOnInit(): void {
    // 3. Call it in ngOnInit(), bcs constructor shoudln't do anything (best practice). 
    //    Reserve it  for minimal initialization such as wiring constructor parameters to properties. 
    //    It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
    this.getHeroes();
  }

  // 2. Create a method to use the service
  getHeroes(): void {
    this.heroService.getHeroes() // Returns an Observable, it needs to be subscribed (emit single value)
      .subscribe(heroes => this.heroes = heroes);
  }

}
