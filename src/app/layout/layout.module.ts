import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './common/footer/footer.module';
import { SharedModule } from '../shared/shared.module';
import { ClassicModule } from './layouts/vertical/classic/classic.module';

const layoutModules = [FooterModule, ClassicModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule, ...layoutModules],
  exports: [LayoutComponent, ...layoutModules],
})
export class LayoutModule {}
