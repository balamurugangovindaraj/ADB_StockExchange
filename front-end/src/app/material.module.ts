
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    MatSidenavModule,
        MatDialogModule,
        MatSortModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatGridListModule,
        MatListModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule,
        MatRadioModule,
        MatExpansionModule,
        MatTooltipModule,
        MatSlideToggleModule,
        DragDropModule,
        MatStepperModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatToolbarModule,
        MatBottomSheetModule,
        // PdfViewerModule,
        FormsModule
    ],
    exports: [
      HttpClientModule,
      MatSidenavModule,
        MatDialogModule,
        MatSortModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatGridListModule,
        MatListModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatExpansionModule,
        MatTooltipModule,
        MatSlideToggleModule,
        DragDropModule,
        MatStepperModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatToolbarModule,
        MatBottomSheetModule,
        // PdfViewerModule,
        FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class MaterialModule { }
