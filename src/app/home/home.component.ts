import { Component, OnInit } from '@angular/core';
import {
  faPlane,
  faHome,
  faPhoneAlt,
  faGift,
  faPen,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public faPlane = faPlane;
  public faHome = faHome;
  public faPhoneAlt = faPhoneAlt;
  public faGift = faGift;
  public faPen = faPen;
  public faHotel = faHotel;
  constructor() {}

  ngOnInit(): void {}
}
