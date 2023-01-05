import { Component, EventEmitter, Output } from '@angular/core';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  address: Address = {
    fullname: '',
    address: '',
    creditCardNumber: 0
  }

  creditCardNumber: string = '';

  @Output() submitEvent: EventEmitter<Address> = new EventEmitter<Address>();

  submit(): void {
    this.address.creditCardNumber = parseInt(this.creditCardNumber);
    this.submitEvent.emit(this.address);
  }
}
