import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { TreeTableComponent } from './tree-table/tree-table.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule],
  declarations: [AppComponent, TreeTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
