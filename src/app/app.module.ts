import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { StorageModule } from '@ngx-pwa/local-storage';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeItemComponent } from './register/employee-item/employee-item.component';


const appRoutes: Routes=[
  {path: '', redirectTo:'register', pathMatch: 'full'},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
