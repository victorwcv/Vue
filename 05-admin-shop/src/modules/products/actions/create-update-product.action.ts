import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../types/product.interface';

export const createUpdateProductAction = async (product: Partial<Product>) => {
  if (product.id && product.id !== '') {
    // Update
    return await updateProduct(product);
  }

  // Create
  return await createProduct(product);
};

const updateProduct = async (product: Partial<Product>) => {
  const images: string[] =
    product.images?.map((img) => {
      if (img.startsWith('http')) {
        const imageName = img.split('/').pop();
        return imageName ? img : '';
      }

      return img;
    }) ?? [];

  const productId = product.id;
  delete product.id;
  delete product.user;
  product.images = images;

  try {
    const { data } = await tesloApi.patch<Product>(`/products/${productId}`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error updating product');
  }
};

const createProduct = async (product: Partial<Product>) => {
  const images: string[] =
    product.images?.map((img) => {
      if (img.startsWith('http')) {
        const imageName = img.split('/').pop();
        return imageName ? img : '';
      }

      return img;
    }) ?? [];

  const productId = product.id;
  delete product.id;
  delete product.user;
  product.images = images;

  try {
    const { data } = await tesloApi.post<Product>(`/products/`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating product');
  }
};
