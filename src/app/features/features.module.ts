import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FeatureRoutingModule } from "./features.routing.module";

@NgModule({
    declarations: [
    ],

    imports: [
        CommonModule,
        FeatureRoutingModule,
        RouterModule,
        SharedModule,
    ]
})

export class FeaturesModule { }