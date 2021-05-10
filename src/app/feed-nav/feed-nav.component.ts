import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-feed-nav',
  templateUrl: './feed-nav.component.html',
  styleUrls: ['./feed-nav.component.scss'],
})
export class FeedNavComponent implements OnInit {
  public faEnvelope = faEnvelope;
  public faInstagram = faInstagram;
  public faFacebook = faFacebookF;
  public faTwitter = faTwitter;
  public faPinterest = faPinterestP;
  public faPhoneAlt = faPhoneAlt;
  public countries = [
    {
      name: 'USA',
      id: 0,
    },
    {
      name: 'ZA',
      id: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
