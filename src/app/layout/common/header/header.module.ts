import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,

    MatMenuModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule {}
