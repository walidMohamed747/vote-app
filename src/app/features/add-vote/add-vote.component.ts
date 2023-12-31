import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/core/services/http.service';
@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})
export class AddVoteComponent {
  msg = '';
  isSubmitted = false;
  addVoteForm: FormGroup;
  token = this.cookie.get('token')
  form: any;
  constructor(private formBuilder: FormBuilder,
    private _router: Router, private auth: HttpService, private cookie: CookieService) { }


  ngOnInit(): void {
    this.addVoteForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      name: new FormControl([], [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }


  get f() {
    return this.addVoteForm.controls;
  }

  addmovie() {

    if (this.addVoteForm.valid) {
      this.auth.addMovies(this.addVoteForm.value).subscribe((data) => {
        if (data.apiStatus == true) this._router.navigateByUrl('/get-vote');
        else {
          this.msg = data.message
        }
        this.onReset()

      });
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
          this.addVoteForm.get('image')?.clearValidators()
          this.addVoteForm.get('image')?.updateValueAndValidity()
          this.addVoteForm.updateValueAndValidity()
          this.addVoteForm.get('image')?.setValue(imgBase64Path)
          this.addVoteForm.get('image')?.updateValueAndValidity(imgBase64Path)
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  remove(name: string): void {


  }

  keywords:any[] = [];
  announcer = inject(LiveAnnouncer);
  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
     this.addVoteForm.get('name')?.setValue(this.keywords);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }
    console.log(this.addVoteForm.get("name")?.value)
    // Clear the input value
    event.chipInput!.clear();
     this.addVoteForm.get('name')?.setValue(this.keywords);
     console.log(this,this.addVoteForm.value.name)
  }
}
