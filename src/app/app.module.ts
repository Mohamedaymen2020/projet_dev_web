import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Session1Component } from './session1/session1.component';
//import { Session2Component } from './session2/session2.component';
import { Session5Component } from './session5/session5.component';
import { Session6Component } from './session6/session6.component';
import { Session3Component } from './session3/session3.component';
import { Session2Component } from './session2/session2.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'session1', component: Session1Component },
{ path: 'session2', component:Session2Component },
{ path: 'session3', component: Session3Component},
{ path: 'session5', component:Session5Component },
{path:'session6',component:Session6Component}
],
}

];
@NgModule({
  declarations: [
    AppComponent,
    Session1Component,
    Session2Component,
    Session2Component,
    Session5Component,
    Session6Component,
    Session3Component
  ],
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
    ),
    BrowserModule,
   // FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
export class AppModule { }

