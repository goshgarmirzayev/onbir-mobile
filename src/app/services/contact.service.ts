import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  checkForm(title, email, fullName, message): boolean {
    let isValid = true;
    if (title?.trim() === null || title === undefined) {
      isValid = false;
    }
    if (email?.trim() === null || title === undefined) {
      isValid = false;
    }
    if (fullName?.trim() === null || fullName === undefined) {
      isValid = false;
    }
    if (message?.trim() === null || message === undefined) {
      isValid = false;
    }
    return isValid;
  }
}
