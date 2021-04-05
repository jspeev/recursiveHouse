import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {CardsView} from './model';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private modelSubject = new BehaviorSubject<CardsView>({cards: []});

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getCards().subscribe( (cards: CardsView) => {
      this.modelNext(cards);
    });
  }

  private modelNext(cards: CardsView): void {
    this.modelSubject.next(cards);
  }

  getModel(): Observable<CardsView> {
    return this.modelSubject.asObservable();
  }
}
