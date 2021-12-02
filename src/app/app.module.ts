import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { ListComponent } from "./components/list/list.component";
import { DirectiveConditionnalComponent } from './directive-conditionnal/directive-conditionnal.component';
import { MyDirective1Directive } from './directive-conditionnal/my-directive1.directive';

@NgModule({
  declarations: [AppComponent, ListComponent, CardComponent, DirectiveConditionnalComponent, MyDirective1Directive],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
