// autocomplete types
export type SuggestionItem = {
  numberOfResults: number;
  searchTerm: string;
};
export interface AutoComplete {
  data: [{ suggestions: SuggestionItem[] }]
}
// item card props and data props

export interface ItemCardProps {
  name: string;
  brandName: string;
  imageUrl: string;
  additionalImageUrls?: string;
  id: number;
  prevPrice?: string | undefined;
  price: string;
}
export interface CartCardProps {
  name: string;
  brandName: string;
  imageUrl: string;
  id: number;
  price: string;
  qty: string;
}

export interface ItemProps {
  name: string;
  brandName: string;
  imageUrl: string;
  additionalImageUrls: string;
  id: number;
  url: string;
  price: {
    current: {
      text: string;
    };
    previous: {
      text: string;
    };
  };
}
export interface ItemCardData {
  data: {
    itemCount: number;
    products: ItemProps[];
  };
}

export interface SimilarDataProps {
  data: {
    brandName: string;
    name: string;
    id: number;
    imageUrl: string;
    price: {
      current: {
        text: string;
      };
      previous: {
        text: string;
      } | null;
    };
    url: string;
  }[];
}

export interface SingleProductData {
  data: {
    id: number;
    name: string;
    brandName: string;
    gender: string;
    description: {
      brandDescription: string;
      productDescription: string;
      careInfo: string;
    };
    images: {
      alternateText: string;
      url: string;
    }[];
    price: [
      {
        productPrice: {
          current: {
            text: string;
          };
          previous: {
            text: string;
          };
        };
      }
    ];
    variants: { size: string }[];
  };
  message: string;
  status?: boolean;
}
