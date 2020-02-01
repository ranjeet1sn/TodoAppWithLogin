import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatInputModule ,
  MatFormFieldModule,
  MatCardModule, MatMenuModule,
   MatExpansionModule,
   MatSidenavModule,
   MatButtonModule,
   MatIconModule,
   MatListModule,
   MatTooltipModule,
   MatAccordion,
   MatSlideToggleModule,
  } from '@angular/material';

const MaterialComponent = [
  MatSidenavModule,
  MatMenuModule,
  MatExpansionModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatFormFieldModule
];
@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule { }