import {Component} from '@angular/core';
import {CurrencySelectorComponent} from "./components/currency-selector/currency-selector.component";
import {ShortlistComponent} from "./components/shortlist/shortlist.component";
import {DetailedListComponent} from "./components/detailed-list/detailed-list.component";
import {HeroComponent} from "./components/hero/hero.component";
import {HeaderComponent} from "./components/header/header.component";
import {MatCard} from "@angular/material/card";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CurrencySelectorComponent,
    ShortlistComponent,
    DetailedListComponent,
    HeroComponent,
    HeaderComponent,
    MatCard
  ],
})
export class AppComponent {
  title = 'perhour-24';
}
