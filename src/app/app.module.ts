import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelfAvatarComponent } from './components/self-avatar/self-avatar.component';
import { SelfHeaderComponent } from './components/self-header/self-header.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UpdateSelfModalComponent } from './components/update-self-modal/update-self-modal.component';
import { UpdateSelfPasswordModalComponent } from './components/update-self-password-modal/update-self-password-modal.component';
import { BaseModule } from './base/base.module';
import { AppRoutingModule } from './app-routing.module';
import { KindergartenModule } from './kindergarten/kindergarten.module';
import { HealthModule } from './health/health.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    SelfAvatarComponent,
    SelfHeaderComponent,
    DashboardPageComponent,
    UpdateSelfModalComponent,
    UpdateSelfPasswordModalComponent,
  ],
  imports: [
    BaseModule,
    AppRoutingModule,
    KindergartenModule,
    HealthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
