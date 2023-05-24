export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Chicken',
    price: 109,
    description: 'Inihaw na Chicken'
  },
  {
    id: 2,
    name: 'Liempo',
    price: 109,
    description: 'Inihaw na Liempo'
  },
  {
    id: 3,
    name: 'Bangus',
    price: 99,
    description: 'Inihaw na Bangus'
  },
  {
    id: 4,
    name: 'Meal 2',
    price: 115,
    description: '4 pieces wings'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/