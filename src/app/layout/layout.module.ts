import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './common/footer/footer.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule, FooterModule],
  exports: [LayoutComponent, FooterModule],
})
export class LayoutModule {}
