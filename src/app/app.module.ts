import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, NgForm} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    RegisterComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "register", component: RegisterComponent},
      {path: "edit/:empid", component: EditComponent},
      {path: "delete/:empid", component: DeleteComponent}    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
