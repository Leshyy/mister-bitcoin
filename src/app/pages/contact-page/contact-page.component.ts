import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  contacts: Contact[];
  subscribtion: Subscription;
  selectedUserId: string = null;
  data: Array<any>;


  ngOnInit(): void {
    this.loadContacts()
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe()
  }

  loadContacts() {
    this.subscribtion = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts;
    })
    this.contactService.loadContacts();
  }

  gotoAdd() {
    this.router.navigateByUrl('/contact/edit')
  }

  onSetFilter(filterBy) {
    this.contactService.loadContacts(filterBy)
  }

}
