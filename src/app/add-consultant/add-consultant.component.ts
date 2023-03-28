import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent {
  userProfil = new FormGroup({

    name : new FormControl('',Validators.required),
    email : new FormControl(''),
    tel : new FormControl(''),

})
 onSubmit(){
  console.warn(this.userProfil.value);
  console.log(this.userProfil.controls['name'].value);
 }

}



/*import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons}
	from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'ngbd-modal-basic',
templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
closeResult = '';

constructor(private modalService: NgbModal) {}

open(content) {
	this.modalService.open(content,
{ariaLabelledBy: 'modal-basic-title'}).result.then((result)
	=> {
	this.closeResult = `Closed with: ${result}`;
	}, (reason) => {
	this.closeResult =
		`Dismissed ${this.getDismissReason(reason)}`;
	});
}

private getDismissReason(reason: any): string {
	if (reason === ModalDismissReasons.ESC) {
	return 'by pressing ESC';
	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	return 'by clicking on a backdrop';
	} else {
	return `with: ${reason}`;
	}
}
} */

