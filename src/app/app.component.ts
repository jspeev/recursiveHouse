import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { CardView } from './model';
import { Observable } from 'rxjs';
import { increment } from './store/cards.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count$: Observable<number>;
  cards: CardView[];
  filterName: string = '';

  constructor(private appService: AppService,
              private store: Store<{ count: number }>) {

    this.count$ = store.select('count');
    this.appService.getCards().subscribe( (cards: CardView[]) => this.cards = cards);

  }

  ngOnInit(): void {

    this.store.dispatch(increment());

    window.onscroll = () => {
      const scrollHeight = document.body.scrollHeight;
      const totalHeight = window.scrollY + window.innerHeight;
      if (totalHeight >= scrollHeight) {
        this.store.dispatch(increment());
      }
    };

  }

}
