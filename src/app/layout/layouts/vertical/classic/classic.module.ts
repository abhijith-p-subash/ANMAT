import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicComponent } from './classic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FooterModule } from 'src/app/layout/common/footer/footer.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderModule } from "../../../common/header/header.module";

@NgModule({
    declarations: [ClassicComponent],
    exports: [ClassicComponent],
    imports: [
        CommonModule,
        SharedModule,
        FooterModule,
        HttpClientModule,
        RouterModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        HeaderModule
    ]
})
export class ClassicModule {}
