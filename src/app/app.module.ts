import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {OverlayModule} from '@angular/cdk/overlay';
import { StreamComponent } from './stream/stream.component';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTabeComponent,
    AppStartPageComponent,
    StreamComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    OverlayModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  exports: [
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent
  ]
})
export class AppModule { }
