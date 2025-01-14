import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AdminService } from '../admin/admin.component.service';
import { Carousel1Component, CarouselComponent } from './carrousel/carousel.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
=======
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../admin/admin.component.service';


>>>>>>> f58ecd5a4a9ae472ce02d6b9f175a613dc6a0340

@Component({
  selector: 'app-admin',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, CarouselComponent, Carousel1Component, NgxExtendedPdfViewerModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private AdminService: AdminService,
    private sanitizer: DomSanitizer
  ) {}


  pdfUrl: SafeUrl = null as any;
  pdfUrl2: SafeUrl = null as any;
  unsafeUrl2: string = './assets/docs/DOCUMENTACIONKEITTWEB.pdf';
  unsafeUrl: string = './assets/docs/MANUALDEUSUARIOKEITTWEB.pdf';
  switchTheme = false;


  ngOnInit(): void {
    this.setTheme();
    this.loadPDF();
    this.loadPDF2();
  } 

  loadPDF(): void {
    // Asignar la URL al SafeUrl sin hacer cast a string
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
  }

  loadPDF2(): void {
    // Asignar la URL al SafeUrl sin hacer cast a string
    this.pdfUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl2);
  }

  logout() {
    this.AdminService.performLogout();
    console.log("Ha salido exitosamente");
  }

  changeTheme() {
    const toggleSwitch: HTMLInputElement = document.querySelector('.theme-switch input[type="checkbox"]')!;
    const imagen: HTMLImageElement = document.querySelector('#foto')!;
    const mainHeader: HTMLElement = document.querySelector('.main-header')!;
    const mainSidebar: HTMLElement = document.querySelector('.main-sidebar')!;
    
    if (this.switchTheme) {
      document.body.classList.add("dark-mode");
      imagen.src = 'dist/img/icono.png';
      mainHeader.classList.add('navbar-dark');
      mainHeader.classList.remove('navbar-light');
      mainSidebar.classList.add('sidebar-dark-primary');
      mainSidebar.classList.remove('sidebar-light-primary');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove("dark-mode");
      imagen.src = 'dist/img/icono.png';
      mainHeader.classList.add('navbar-light');
      mainHeader.classList.remove('navbar-dark');
      mainSidebar.classList.add('sidebar-light-primary');
      mainSidebar.classList.remove('sidebar-dark-primary');
      localStorage.setItem('theme', 'light');
    }
  }

  setTheme() {
    const currentTheme = localStorage.getItem('theme') ?? 'light';
    const toggleSwitch: HTMLInputElement = document.querySelector('.theme-switch input[type="checkbox"]')!;
    const imagen: HTMLImageElement = document.querySelector('#foto')!;
    const mainHeader: HTMLElement = document.querySelector('.main-header')!;
    const mainSidebar: HTMLElement = document.querySelector('.main-sidebar')!;
    
    if (currentTheme === 'dark') {
      document.body.classList.add("dark-mode");
      imagen.src = 'dist/img/icono.png';
      mainHeader.classList.add('navbar-dark');
      mainHeader.classList.remove('navbar-light');
      mainSidebar.classList.add('sidebar-dark-primary');
      mainSidebar.classList.remove('sidebar-light-primary');
      this.switchTheme = true;
    }
  }
=======
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  constructor(private AdminService: AdminService, private router: Router) {}

  switchTheme = false; 

  ngOnInit(): void {
    this.setTheme();
  }

    
  logout() {
    //console.log(localStorage.getItem('token'))
    this.AdminService.performLogout();
    console.log("ha salido exitosamente")
  }

  changeTheme(){
    const toggleSwitch : HTMLInputElement = document.querySelector('.theme-switch input[type="checkbox"]')!;
    const imagen: HTMLImageElement = document.querySelector('#foto')!;
    const mainHeader : HTMLElement = document.querySelector('.main-header')!;
    const mainSidebar : HTMLElement = document.querySelector('.main-sidebar')!;
    if (this.switchTheme) {
      if (!document.body.classList.contains('dark-mode')) {
        document.body.classList.add("dark-mode");
        imagen.src = 'dist/img/icono.png';
      }
      if (mainHeader.classList.contains('navbar-light')) {
        mainHeader.classList.add('navbar-dark');
        mainHeader.classList.remove('navbar-light');
      }
      if (mainSidebar.classList.contains('sidebar-light-primary')) {
        mainSidebar.classList.add('sidebar-dark-primary');
        mainSidebar.classList.remove('sidebar-light-primary');
      }

      localStorage.setItem('theme', 'dark');
    } else {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove("dark-mode");
        imagen.src = 'dist/img/icono.png';
      }
      if (mainHeader.classList.contains('navbar-dark')) {
        mainHeader.classList.add('navbar-light');
        mainHeader.classList.remove('navbar-dark');
      }
      if (mainSidebar.classList.contains('sidebar-dark-primary')) {
        mainSidebar.classList.add('sidebar-light-primary');
        mainSidebar.classList.remove('sidebar-dark-primary');          
      }
      localStorage.setItem('theme', 'light');
    }
  }
  
  setTheme(){
    const currentTheme = localStorage.getItem('theme') ?? 'light';
    const toggleSwitch : HTMLInputElement = document.querySelector('.theme-switch input[type="checkbox"]')!;
    const imagen: HTMLImageElement = document.querySelector('#foto')!;
    const mainHeader : HTMLElement = document.querySelector('.main-header')!;
    const mainSidebar : HTMLElement = document.querySelector('.main-sidebar')!;
    if (currentTheme) {
      if (currentTheme === 'dark') {
        if (!document.body.classList.contains('dark-mode')) {
          document.body.classList.add("dark-mode");
          imagen.src = 'dist/img/icono.png';
        }
        if (mainHeader.classList.contains('navbar-light')) {
          mainHeader.classList.add('navbar-dark');
          mainHeader.classList.remove('navbar-light');
        }
        if (mainSidebar.classList.contains('sidebar-light-primary')) {
          mainSidebar.classList.add('sidebar-dark-primary');
          mainSidebar.classList.remove('sidebar-light-primary');
        }
        this.switchTheme = true
      }
    }
  }

>>>>>>> f58ecd5a4a9ae472ce02d6b9f175a613dc6a0340
}
