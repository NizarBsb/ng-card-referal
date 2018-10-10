import {Component, OnInit} from '@angular/core';
import {CardService} from '../card.service';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})
export class SelectCardComponent implements OnInit {

  private email: string;
  public cards: any;
  public encryptedEmail;
  public favoriteSelectedCard: string;
  public isCardSelected = false;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cards = this.cardService.getAllCard();
  }

  setReferralLink() {
    this.email = this.cardService.getEmail();
    this.encryptedEmail = this.cardService.encryptEmail(this.email);
    this.isCardSelected = true;
  }

}
