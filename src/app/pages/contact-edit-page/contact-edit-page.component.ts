import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {
    this.form = fb.group(
      {
        name: '',
        phone: '',
        email: ''
      }
    )

  }

  subscription: Subscription;
  contact: Contact;
  form: FormGroup;

  ngOnInit(): void {
    if (this.route.snapshot.data.contact) {
      this.contact = this.route.snapshot.data.contact
      this.loadFormData(this.contact)
    }

  }

  loadFormData(contact: Contact): void {
    this.form.setValue(
      {
        name: contact.name,
        phone: contact.phone,
        email: contact.email
      }
    );
  }

  onSaveContact() {
    const contactToSave = this.contact ? {
      _id: this.contact._id,
      ...this.form.value
    }
      :
      this.form.value

    this.contactService.saveContact(contactToSave)
    this.onGoBack()

  }

  onGoBack(): void {
    this.router.navigateByUrl('/contact')
  }

}
