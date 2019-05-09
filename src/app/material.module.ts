import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
} from '@angular/material';

import { MomentDateModule, MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MomentDateModule,
        MatDatepickerModule,
        MatMomentDateModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatFormFieldModule,
        MomentDateModule,
        MatDatepickerModule,
        MatMomentDateModule
    ]
})

export class MaterialModule { }