import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signinForm = new FormGroup({
    email: new FormControl([Validators.required]),
    password: new FormControl([Validators.required]),
  });

  constructor(private snackBar: MatSnackBar) {}

  onSubmit(): void {
    if (this.signinForm.valid) {
      // TODO: Perform sign-in logic
      this.snackBar.open('Sign in successful!', 'Dismiss', { duration: 3000 });
    }
  }
}
