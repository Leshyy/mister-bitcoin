import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  @Input() contactId: string;

  contact: Contact;
  amount: number;
  msg: string

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact
  }

  gotoEditContact(): void {
    this.router.navigate(['contact', 'edit', this.contact._id]);
  }

  onDeleteContact(): void {
    this.contactService.deleteContact(this.contact._id)
    this.onGoBack()
  }

  onTransfer() {
    if (!this.amount) {
      this.msg = 'Error transfering coins'
      return
    }
    this.userService.addMove(this.contact, this.amount)
    this.msg = 'Successfull Transfer!'

  }

  onGoBack(): void {
    this.router.navigate(['contact']);
  }

}
