import { Component,HostListener  } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  isDarkMode = false;
  projects = [
    { title: 'Project 1', description: 'Description of project 1', image: 'https://via.placeholder.com/400', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', image: 'https://via.placeholder.com/400', link: '#' },
    { title: 'Project 3', description: 'Description of project 3', image: 'https://via.placeholder.com/400', link: '#' }
  ];
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('bg-dark', this.isDarkMode);
    document.body.classList.toggle('text-light', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.body.classList.toggle('bg-dark', this.isDarkMode);
      document.body.classList.toggle('text-light', this.isDarkMode);
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
    }
  }
}
