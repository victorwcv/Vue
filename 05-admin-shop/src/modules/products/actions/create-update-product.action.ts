import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../types/product.interface';

export const createUpdateProductAction = async (product: Partial<Product>) => {
  const productId = product.id;

  product = cleanProductForFetch(product);

  if (productId && productId !== '') {
    // Update
    return await updateProduct(productId, product);
  }

  // Create
  return await createProduct(product);
};

const cleanProductForFetch = (product: Partial<Product>) => {
  const images: string[] =
    product.images?.map((img) => {
      if (img.startsWith('http')) {
        const imageName = img.split('/').pop();
        return imageName ? img : '';
      }

      return img;
    }) ?? [];

  delete product.id;
  delete product.user;
  product.images = images;

  return product;
};

const updateProduct = async (productId: string, product: Partial<Product>) => {
  try {
    const { data } = await tesloApi.patch<Product>(`/products/${productId}`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error updating product');
  }
};

const createProduct = async (product: Partial<Product>) => {
  try {
    const { data } = await tesloApi.post<Product>(`/products/`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating product');
  }
};
