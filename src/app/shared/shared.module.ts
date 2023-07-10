import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
// import { DemoMaterialModule } from '@shared/material-module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { DemoNgZorroAntdModule } from '@shared/ng-zorro-antd.module';
// import { PrimefaceModule } from '@shared/primeFace.module';
// import { CKEditorModule } from 'ng2-ckeditor';
// import { BarRatingModule } from 'ngx-bar-rating';
// import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    // NgbModule,
    // DragDropModule,
    // DemoNgZorroAntdModule,
    // PrimefaceModule,
    // NgSelectModule,
    // NgOptionHighlightModule,
    // NgxMatIntlTelInputModule,
    // BarRatingModule,
    // CKEditorModule
  ]
})
export class SharedModule { }
