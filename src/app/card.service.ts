import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  email: string;
  favoriteCard: string;

  cardTypes: any = [
    {
      'name': 'The Platinum Card®',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_Platinum.png',
      'type': 'charge',
      'rewards': 'membership rewards',
      'link': 'https://www.americanexpress.com/uk/charge-cards/platinum-card'
    },
    {
      'name': 'American Express® Preferred Rewards Gold Credit Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_Preferred_Rewards_Gold_Card.png',
      'type': 'credit',
      'rewards': 'membership rewards',
      'link': 'https://www.americanexpress.com/uk/credit-cards/gold-credit-card'
    },
    {
      'name': 'The American Express Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_Green_Card.png',
      'type': 'charge',
      'rewards': 'membership rewards',
      'link': 'https://www.americanexpress.com/uk/charge-cards/green-card'
    },
    {
      'name': 'The American Express® Rewards Credit Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_The_American_Express_Rewards_Credit_Card.png',
      'type': 'credit',
      'rewards': 'membership rewards',
      'link': 'https://www.americanexpress.com/uk/credit-cards/rewards-credit-card'
    },
    {
      'name': 'Platinum Cashback Credit Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_Platinum_Cashback_Credit_Card.png',
      'type': 'credit',
      'rewards': 'cashback',
      'link': 'https://www.americanexpress.com/uk/credit-cards/platinum-cashback-credit-card'
    },
    {
      'name': 'The Costco TrueEarnings® American Express® Credit Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_The_Costco_TrueEarnings_American_Express_Credit_Card.png',
      'type': 'credit',
      'rewards': 'cashback',
      'link': 'https://www.americanexpress.com/uk/credit-cards/costco-credit-card'
    },
    {
      'name': 'British Airways American Express® Premium Plus Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_British_Airways_American_Express_Premium_Plus_Card.png',
      'type': 'charge',
      'rewards': 'avios',
      'link': 'https://www.americanexpress.com/uk/credit-cards/ba-premium-plus-credit-card'
    },
    {
      'name': 'British Airways American Express® Credit Card',
      'image': 'https://icm.aexp-static.com/Internet/internationalcardshop/en_gb/images/cards/UK_AXP_British_Airways_American_Express_Credit_Card.png',
      'type': 'credit',
      'rewards': 'avios',
      'link': 'https://www.americanexpress.com/uk/credit-cards/ba-credit-card'
    }
  ];

  /**
   * Return all cards type.
   */
  getAllCard() {
    return this.cardTypes;
  }

  /**
   * Set the user email.
   * @param email
   */
  setEmail(email: string) {
    this.email = email;
  }

  /**
   * Return the email address.
   */
  getEmail() {
    return this.email;
  }

  /**
   * Encrypt the given email address.
   * @param email
   */
  encryptEmail(email: string): string {
    return CryptoJS.AES.encrypt(email, 'secret').toString();
  }

  setFavoriteCard(card) {
    this.favoriteCard = card;
  }

  getFavoriteCard() {
    return this.favoriteCard;
  }
}
