import { ProductProps, FilterProps } from "../types";

export const calculateProductBuy = ( year: number) => {
  const basePricePerProduct = 50; // Base rental price per day in dollars
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const buyRate = basePricePerProduct +  ageRate;

  return buyRate.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLowerCase());

  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  return newPathname;
};

export async function fetchProducts(filters: FilterProps) {
  const { product, year, model, limit } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${product}&year=${year}&model=${model}&limit=${limit}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result;
}

export const generateProductImageUrl = (clemar: ProductProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = clemar;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);

  if (angle) {
    url.searchParams.append('angle', angle);
  }

  return `${url}`;
};
