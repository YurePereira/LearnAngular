import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  contact = {
    name:'',
    email: '',
    phone: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    console.log(this.contact);
    console.log(form);
    alert('Send form!!!');

  }

}
