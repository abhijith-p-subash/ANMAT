import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernComponent } from './modern.component';
import { HeaderModule } from '../../../common/header/header.module';
import { FooterModule } from 'src/app/layout/common/footer/footer.module';
import { MenuModule } from 'src/app/layout/common/menu/menu.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ModernComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MenuModule,
    SharedModule,
    FooterModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HeaderModule,
  ],
  exports: [ModernComponent]
})
export class ModernModule {}
