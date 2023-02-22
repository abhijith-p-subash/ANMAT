import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [EmptyComponent],
})
export class EmptyModule {}
