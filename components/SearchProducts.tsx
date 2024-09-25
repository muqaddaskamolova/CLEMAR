"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchProductsProps } from "./types";

const products = ["Floor Scrubber machine", "Carpet washing machine", "Fan For Carpet", "Sweeping machine", "Dry Vacuum Cleaner", "Maid Service Cart"]; // Example products

const SearchProducts = ({ product, setProduct }: SearchProductsProps) => {
  const [query, setQuery] = useState("");

  const filteredProducts =
    query === ""
      ? products
      : products.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='search-product'>
      <Combobox value={product} onChange={setProduct}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/product-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='product logo'
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-product__input'
            displayValue={(item: string) => item} // Ensure the type is correctly defined
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Volkswagen...'
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredProducts.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className='search-product__option'>
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredProducts.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-product__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchProducts;
