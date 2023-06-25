import { Component } from '@angular/core';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1200/450`);
}
