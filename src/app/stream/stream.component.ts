import { Component, OnInit } from '@angular/core';
import {interval, timer} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
  animations: [
    trigger('oneFill', [
      state('empty', style({
        backgroundColor: 'green',
        width: '0%'
      })),
      state('fill', style({
        backgroundColor: 'green',
        width: '100%'
      })),
      transition('empty => fill', [
        animate('1s')
      ]),
    ]),
    trigger('twoFill', [
      state('empty', style({
        backgroundColor: 'yellow',
        width: '0%'
      })),
      state('fill', style({
        backgroundColor: 'yellow',
        width: '100%'
      })),
      transition('empty => fill', [
        animate('1.5s')
      ]),
    ]),
    trigger('treeFill', [
      state('empty', style({
        backgroundColor: 'red',
        width: '0%'
      })),
      state('fill', style({
        backgroundColor: 'red',
        width: '100%'
      })),
      transition('empty => fill', [
        animate('2s')
      ]),
    ])
  ]
})
export class StreamComponent implements OnInit {
  subscription = [];
  stream = {
    one: {interval: null, timer: null, trigger: 'empty'},
    two: {interval: null, timer: null, trigger: 'empty'},
    tree: {interval: null, timer: null, trigger: 'empty'},
    four: []
    };
  streamIdSum = 0;

  constructor() { }

  ngOnInit() {

  }
  stopStream() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
    this.subscription = [];
    this.stream.one.trigger = 'empty';
    this.stream.two.trigger = 'empty';
    this.stream.tree.trigger = 'empty';
  }
  startStream() {
    this.stopStream();
    this.stream.four = [];
    this.streamIdSum = 0;
    this.stream.one.interval = interval(1000);
    this.stream.two.interval = interval(1500);
    this.stream.tree.interval = interval(2000);
    this.stream.one.timer = timer(10000, 1500);
    this.stream.two.timer = timer(20000, 2000);
    this.stream.tree.timer = timer(30000, 0);
    let ID_2 = 0;
    let ID_3 = 0;

    this.subscription.push(this.stream.one.interval.subscribe(num => {
      this.stream.four.push({id: num, stream: 1});
      this.stream.one.trigger = this.stream.one.trigger === 'empty' ? 'fill' : 'empty';
      this.streamIdSum += num;
    }));
    this.subscription.push(this.stream.two.interval.subscribe(() => {
      ID_2++;
    }));
    this.subscription.push(this.stream.tree.interval.subscribe(() => {
      ID_3++;
    }));
    this.subscription.push(this.stream.one.timer.subscribe(() => {
      this.stream.four.push({id: ID_2, stream: 2});
      this.stream.two.trigger = this.stream.two.trigger === 'empty' ? 'fill' : 'empty';
      this.streamIdSum += ID_2;
    }));
    this.subscription.push(this.stream.two.timer.subscribe(() => {
      this.stream.four.push({id: ID_3, stream: 3});
      this.stream.tree.trigger = this.stream.tree.trigger === 'empty' ? 'fill' : 'empty';
      this.streamIdSum += ID_3;
    }));
    this.subscription.push(this.stream.tree.timer.subscribe(() => {
      this.stopStream();
    }));
    }
}
