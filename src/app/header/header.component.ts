import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userPhoto: string =
    'https://i.pinimg.com/originals/8e/fd/70/8efd709691b6e44997d10e7efe0b098f.jpg';

  constructor() {}

  ngOnInit(): void {}
}
