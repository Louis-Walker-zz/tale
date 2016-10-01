import { Component, OnInit } from '@angular/core';

interface Appeal {
  title: string;
  description: string;
  date: number;
  reward?: string;
  itemType: string;
  microchipped?: boolean;
  neutured?: boolean;
  gender?: string;
}

@Component({
  selector: 'open-appeal',
  templateUrl: './open-appeal.component.html',
  styleUrls: ['./open-appeal.component.css']
})
export class OpenAppealComponent implements OnInit {
  private showFacebook: boolean = false;
  private showTwitter: boolean = false;

  private appeal: Appeal;

  constructor() {
    this.appeal = {
      title: "",
      description: "",
      date: 0,
      itemType: ""
    }
  }

  ngOnInit() {
  }

  toggleFacebook() {
    this.showFacebook = !this.showFacebook;
  }

  toggleTwitter() {
    this.showTwitter = !this.showTwitter;
  }

  deleteAppeal() {

  }

  reuniteAppeal() {
    
  }

  submitAppeal() {
    
  }

  onDateChanged(e) {
    console.log(e.epoc);
  }
}
