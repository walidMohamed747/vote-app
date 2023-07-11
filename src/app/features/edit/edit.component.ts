// import { HttpClient } from '@angular/common/http';
import { editData } from 'src/app/models/user';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/core/services/http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  
  msg = '';
  isSubmitted = false;
  editVotingForm: FormGroup;
  form: any;
  constructor(private formBuilder: FormBuilder,
    private _router: Router, private auth: HttpService, private cookie: CookieService) { }
    ngOnInit() {
      this.editVotingForm = new FormGroup({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        name: new FormControl([], [Validators.required]),
        image: new FormControl('', [Validators.required])
      });
    //  this.editVoting()
    }

    get f() {
      return this.editVotingForm.controls;
    }

    editVoting(){
    if(this.editVotingForm.valid)
    {
      this.auth.editVote(this.editVotingForm.value).subscribe((res)=>{
        console.log(res)
      })

      this.onReset()

    }
    }
    onReset(){
      $('#reset').click();
  
      // this.addVoteForm.reset();
      // this.addVoteForm.markAsUntouched();
  
    }
    @ViewChild('fileInput') fileInput!: ElementRef;
    fileAttr = 'Choose File';
    uploadFileEvt(imgFile: any) {
      if (imgFile.target.files && imgFile.target.files[0]) {
        this.fileAttr = '';
        Array.from(imgFile.target.files).forEach((file: any) => {
          this.fileAttr += file.name + ' - ';
        });
        // HTML5 FileReader API
        let reader = new FileReader();
        reader.onload = (e: any) => {
          let image = new Image();
          image.src = e.target.result;
          image.onload = (rs) => {
            let imgBase64Path = e.target.result;
            // console.log(imgBase64Path)  
            this.editVotingForm.get('image')?.clearValidators()
            this.editVotingForm.get('image')?.updateValueAndValidity()
            this.editVotingForm.updateValueAndValidity()
            this.editVotingForm.get('image')?.setValue(imgBase64Path)
            this.editVotingForm.get('image')?.updateValueAndValidity(imgBase64Path)
          };
        };
        reader.readAsDataURL(imgFile.target.files[0]);
        // Reset if duplicate image uploaded again
        this.fileInput.nativeElement.value = '';
      } else {
        this.fileAttr = 'Choose File';
      }
    } 
  }
