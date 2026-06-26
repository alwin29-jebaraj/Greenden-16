/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  category: 'easy-care' | 'air-purifying' | 'low-light' | 'pet-friendly' | 'rare';
  difficulty: 'Easy' | 'Medium' | 'Expert';
  sunlight: string;
  watering: string;
  size: 'Small' | 'Medium' | 'Large';
  description: string;
  careTips: string[];
  isPopular?: boolean;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  plantInterest?: string;
}
