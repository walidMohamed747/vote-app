import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundImageUrl = 'src/assets/background.png';
  backgroundImageAspectRatio = 1;
  title = 'Voting-app';


//   @HostListener('window:resize')
// onResize() {
//   const windowWidth = window.innerWidth;
//   const windowHeight = window.innerHeight;
//   const image = new Image();
//   image.src = this.backgroundImageUrl;
//   image.onload = () => {
//     const imageAspectRatio = image.width / image.height;
//     const windowAspectRatio = windowWidth / windowHeight;
//     if (windowAspectRatio > imageAspectRatio) {
//       this.backgroundImageAspectRatio = imageAspectRatio;
//     } else {
//       this.backgroundImageAspectRatio = windowAspectRatio;
//     }
//   };
// }
}
