import { NgModule } from '@angular/core';
import { EmptyComponent } from './empty.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmptyComponent],
  imports: [ SharedModule, RouterModule],
  exports: [EmptyComponent],
})
export class EmptyModule {}
