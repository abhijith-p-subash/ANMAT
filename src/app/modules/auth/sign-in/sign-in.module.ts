import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

// 
import { SignInComponent } from './sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignInRoutes } from './sign-in.routing';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    RouterModule.forChild(SignInRoutes),
    MatCardModule,
    MatFormFieldModule,
    SharedModule,
  ],
})
export class SignInModule {}
