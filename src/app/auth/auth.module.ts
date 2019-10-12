import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [ CommonModule, AuthRoutingModule, FormsModule ],
    exports: [],
    providers: [],
})
export class AuthModule {}