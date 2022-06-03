import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { pipes } from './pipes';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  RouterModule,
];

@NgModule({
  declarations: [...pipes],
  imports: [...modules],
  exports: [...pipes, ...modules],
})
export class SharedModule {}
