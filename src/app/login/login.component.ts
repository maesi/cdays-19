import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionService } from '../session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  returnUrl: String;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private session: SessionService) {
    this.session.currentUser.subscribe(
      user => {
        if (user !== null) {
          this.router.navigate([this.returnUrl])
        }
      }
    );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['cdays', Validators.required],
      password: ['cdays', Validators.required]
    });
    this.loginForm.controls

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.session.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
  }
}
