import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../types/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductById = async (productId: string): Promise<Product> => {
  if (productId === 'create') {
    return {
      id: '',
      title: '',
      price: 0,
      description: '',
      slug: '',
      stock: 0,
      sizes: [],
      gender: '',
      images: [],
      tags: [],
      user: {
        id: '',
        email: '',
        fullName: '',
        isActive: false,
        roles: [],
      },
    };
  }

  try {
    const { data } = await tesloApi.get<Product>(`/products/${productId}`);

    return {
      ...data,
      images: data.images.map(getProductImageAction),
    };
  } catch (error) {
    console.log(error);
    throw new Error('Error getting product');
  }
};
