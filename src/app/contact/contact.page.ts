import {Component, OnInit} from '@angular/core';
import {ContactRequest} from '../models/contact-request';
import {ContactService} from "../services/contact.service";

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {

  fullName: string;
  email: string;
  message: string;
  title: string;
  contactRequest: ContactRequest;

  constructor(private service: ContactService) {
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.service.checkForm(this.title, this.email, this.fullName, this.message)) {
      alert('Mesajınız uğurlar göndərildi!');
    }else{
      alert('Zəhmət olmasa bütün sahələri doldurun!');
    }
  }
}
