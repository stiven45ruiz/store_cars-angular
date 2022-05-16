import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Virtual, Autoplay } from "swiper";


// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([Virtual]);
SwiperCore.use([Autoplay])

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent implements OnInit {


  images: string[] = [
    'https://a-static.besthdwallpaper.com/toyota-supra-colorido-papel-pintado-3440x1440-82190_15.jpg',
    'https://a-static.besthdwallpaper.com/2021-ford-mustang-mach-1-06-papel-pintado-3440x1440-56470_15.jpg',
    'https://a-static.besthdwallpaper.com/paisaje-de-la-ciudad-del-ferrari-f40-papel-pintado-3440x1440-80929_15.jpg'
  ];

  constructor(
  ) {}

  ngOnInit(): void {
  }


}
