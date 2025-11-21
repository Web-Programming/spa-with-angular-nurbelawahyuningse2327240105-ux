import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';
import { CommonModule } from '@angular/common';
import { Housing } from '../lokasi-perumahan/housing.model';
import { HOUSING_DATA } from '../../data/housing.data';
import { HousingService } from '../services/housing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [LokasiPerumahan, CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  // Data arrays
  housingList: Housing[] = [];        // Data dari backend
  filteredList: Housing[] = [];       // Data setelah filter/search
  
  // State management
  isLoading: boolean = false;         // Loading state
  errorMessage: string = '';          // Error message
  selectedFilter: string = 'all';     // Filter aktif
  
  // Search
  searchQuery: string = '';           // Query pencarian
  
  // Pagination
  currentPage: number = 1;            // Halaman saat ini
  itemsPerPage: number = 6;           // Items per halaman
  
  // Fallback data (jika backend tidak tersedia)
  private fallbackData: Housing[] = [
    {
      id: 1,
      title: 'Griya Asri Residence',
      location: 'Jakarta Selatan',
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
      rating: 4.5,
      status: 'Available',
      type: 'rumah',
      description: 'Hunian modern dengan desain minimalis.',
      postedDays: 2
    },
    // ... tambahkan data lainnya
  ];
  
  constructor(private housingService: HousingService) {}
  
  ngOnInit() {
    this.loadHousingData();
  }
  
  loadHousingData() {
    this.isLoading = true;
    this.errorMessage = '';

    this.housingService.getAllHousing().subscribe({
      next: (data) => {
        this.housingList = data;
        this.filteredList = data;
        this.isLoading = false;
        console.log('Data berhasil dimuat dari backend:', data);
      },
      error: (err) => {
        console.error('Error loading housing data:', err);
        // Gunakan data fallback
        this.housingList = this.fallbackData;
        this.filteredList = this.fallbackData;
        this.isLoading = false;
        this.errorMessage = 'Menggunakan data demo (backend tidak tersedia)';
      }
      
    });
  }
  // Computed property untuk data yang ditampilkan (paginated)
get paginatedList(): Housing[] {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return this.filteredList.slice(start, start + this.itemsPerPage);
}

// Total halaman
get totalPages(): number {
  return Math.ceil(this.filteredList.length / this.itemsPerPage);
}

// Array untuk loop pagination buttons
get totalPagesArray(): number[] {
  return Array.from({ length: this.totalPages }, (_, i) => i + 1);
}

// Index awal item di halaman ini
get startIndex(): number {
  return (this.currentPage - 1) * this.itemsPerPage + 1;
}

// Index akhir item di halaman ini
get endIndex(): number {
  return Math.min(this.currentPage * this.itemsPerPage, this.filteredList.length);
}
}
