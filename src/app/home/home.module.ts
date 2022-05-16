import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule} from './../shared/shared.module';
import { MainComponent } from './components/main/main.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent,
        MainComponent
    ],
    imports:[
        HomeRoutingModule,
        CommonModule,
        SharedModule,
        SwiperModule
    ]
})
export class HomeModule{

}
