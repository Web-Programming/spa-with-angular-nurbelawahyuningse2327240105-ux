import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';
import { CommonModule } from '@angular/common';
import { Housing } from '../lokasi-perumahan/housing.model';

@Component({
  selector: 'app-home',
  imports: [LokasiPerumahan, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {

  // Data housing
 housingList: Housing[] = [
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
    description: 'Hunian modern dengan desain minimalis di kawasan Jakarta Selatan yang strategis.',
    postedDays: 2
  },
  {
    id: 2,
    title: 'Skyline Apartments',
    location: 'Bandung',
    price: 950000000,
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    rating: 4.3,
    status: 'Available',
    type: 'apartemen',
    description: 'Apartemen modern dengan pemandangan kota Bandung, lokasi strategis dekat pusat perbelanjaan.',
    postedDays: 1
  },
  {
    id: 3,
    title: 'Samarinda Hill Residence',
    location: 'Samarinda',
    price: 1150000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    rating: 4.7,
    status: 'Pending',
    type: 'rumah',
    description: 'Rumah besar dengan taman luas dan pemandangan alam di sekitar kota Samarinda.',
    postedDays: 5
  },
  {
    id: 4,
    title: 'Dewi Sartika Residence',
    location: 'Jakarta Timur',
    price: 700000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
    rating: 4.4,
    status: 'Available',
    type: 'rumah',
    description: 'Hunian nyaman dengan desain minimalis di Jakarta Timur yang akses transportasi mudah.',
    postedDays: 3
  },
  {
    id: 5,
    title: 'Nirwana Villas',
    location: 'Yogyakarta',
    price: 1700000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
    rating: 4.9,
    status: 'Available',
    type: 'villa',
    description: 'Vila mewah dengan kolam renang pribadi dan pemandangan pegunungan di Yogyakarta.',
    postedDays: 2
  },
  {
    id: 6,
    title: 'Taman Sari Villas',
    location: 'Bali',
    price: 3200000000,
    bedrooms: 5,
    bathrooms: 5,
    area: 400,
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop',
    rating: 5.0,
    status: 'Available',
    type: 'villa',
    description: 'Vila eksklusif di Bali dengan desain kontemporer, kolam renang infinity, dan pemandangan laut.',
    postedDays: 0
  }
];


  filteredList: Housing[] = [];
  selectedFilter: string = 'all';

  ngOnInit() {
    this.filteredList = [...this.housingList];
  }

  filterByType(type: string) {
    this.selectedFilter = type;
    if (type === 'all') {
      this.filteredList = [...this.housingList];
    } else {
      this.filteredList = this.housingList.filter(h => h.type === type);
    }
  }

  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }

}