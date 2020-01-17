import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule } from '@angular/material';
import {MatCardModule } from '@angular/material';
import {MatButtonModule } from '@angular/material';
import {MatIconModule } from '@angular/material';

import {MatDividerModule } from '@angular/material';
import {MatFormFieldModule } from '@angular/material';
import {MatInputModule } from '@angular/material';

import {MatSnackBarModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule } from '@angular/material';
import {MatProgressSpinnerModule } from '@angular/material';
import {MatMenuModule } from '@angular/material';

import {ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';

const SHARED_MODULES = [
  CommonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule
 ];
const SHARED_COMPONENTS = [];
@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [
    CommonModule, ...SHARED_MODULES
  ],
  exports: [ ...SHARED_MODULES, ...SHARED_COMPONENTS ],
})
export class SharedModule {

}
