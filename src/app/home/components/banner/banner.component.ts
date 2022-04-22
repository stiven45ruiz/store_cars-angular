import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'https://a-static.besthdwallpaper.com/toyota-supra-colorido-papel-pintado-3440x1440-82190_15.jpg',
    'https://a-static.besthdwallpaper.com/2021-ford-mustang-mach-1-06-papel-pintado-3440x1440-56470_15.jpg',
    'https://a-static.besthdwallpaper.com/paisaje-de-la-ciudad-del-ferrari-f40-papel-pintado-3440x1440-80929_15.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
