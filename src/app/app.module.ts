import { ImageBoxComponent } from './shared/image-box/image-box.component';
import { TeamProfileService } from './services/team-profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamMainComponent } from './components/team-main/team-main.component';
import { DescriprionBoxComponent } from './shared/descriprion-box/descriprion-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamProfileComponent,
    TeamMemberComponent,
    TeamMainComponent,
    DescriprionBoxComponent,
    ImageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TeamProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
