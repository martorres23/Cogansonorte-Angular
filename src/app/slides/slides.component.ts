import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent {
  slideIndex: number = 1;

  ngOnInit() {
    this.showSlides(this.slideIndex);
    this.startSlideshow();
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlides(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i: number;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  startSlideshow() {
    setInterval(() => {
      this.showSlides(this.slideIndex += 1);
    }, 2000); // Change image every 2 seconds
  }
}