import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      image: 'assets/images/perfume-6518634_1280.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      image: 'assets/images/ai-generated-8679407_1280.png'
    },
    {
      name: 'Product 3',
      description: 'Description for Product 1',
      image: 'assets/images/pexels-mikebirdy-170811.jpg'
    },
    {
      name: 'Product 4',
      description: 'Description for Product 2',
      image: 'assets/images/pexels-efrem-efre-2786187-13439836.jpg'
    },
    // Add more products here
  ];
  categories = [
    {
      name: 'Mobile',
      description: 'Description for Product 1',
      image: 'assets/images/perfume-6518634_1280.jpg'
    },
    {
      name: 'Home Appliances',
      description: 'Description for Product 2',
      image: 'assets/images/ai-generated-8679407_1280.png'
    },
    {
      name: 'Perfumes',
      description: 'Description for Product 1',
      image: 'assets/images/perfume-6518634_1280.jpg'
    },
    {
      name: 'Elsectronic',
      description: 'Description for Product 2',
      image: 'assets/images/ai-generated-8679407_1280.png'
    },
    {
      name: 'Car',
      description: 'Description for Product 1',
      image: 'assets/images/pexels-mikebirdy-170811.jpg'
    },
    {
      name: 'Cloths',
      description: 'Description for Product 2',
      image: 'assets/images/pexels-efrem-efre-2786187-13439836.jpg'
    },
    // Add more products here
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  constructor() { }

  ngOnInit() {
    this.startAutoSlide();
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) {
      prevButton.addEventListener('click', () => this.prevSlide());
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => this.nextSlide());
    }
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to avoid memory leaks
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.products.length - 1;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.products.length - 1) ? this.currentIndex + 1 : 0;
    this.updateCarousel();
  }

  updateCarousel() {
    const carouselItems = document.querySelector('.carousel-items') as HTMLElement;

    if (carouselItems) {
      carouselItems.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }
}
