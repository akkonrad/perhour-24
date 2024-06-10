import {Component} from '@angular/core';
import {CurrencySelectorComponent} from "./components/currency-selector/currency-selector.component";
import {ShortlistComponent} from "./components/shortlist/shortlist.component";
import {CurrencyFilterComponent} from "./components/detailed-list/currency-filter.component";
import {HeroComponent} from "./components/hero/hero.component";
import {HeaderComponent} from "./components/header/header.component";
import {MatCard} from "@angular/material/card";
import {
  SelectedCurrenciesListComponent
} from "./components/selected-currencies-list/selected-currencies-list.component";
import {CvaSchematicComponent} from "../../libraries/cva-schematic/src/lib/cva-schematic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CurrencySelectorComponent,
    ShortlistComponent,
    CurrencyFilterComponent,
    HeroComponent,
    HeaderComponent,
    MatCard,
    SelectedCurrenciesListComponent,
    CvaSchematicComponent
  ],
})
export class AppComponent {
  title = 'perhour-24';
}
