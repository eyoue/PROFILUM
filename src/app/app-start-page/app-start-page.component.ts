import { Component, OnInit } from '@angular/core';
import {
  FullscreenOverlayContainer,
  OriginConnectionPosition,
  Overlay,
  OverlayConnectionPosition,
  OverlayContainer
} from '@angular/cdk/overlay';

import {PopupComponent} from '../popup/popup.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.scss'],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
})

export class AppStartPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
  open() {
    this.dialog.open(PopupComponent);
  }
}
