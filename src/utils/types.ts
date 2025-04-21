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
  displayPrice: string;
  price: number
}
export interface CartCardProps {
  name: string;
  brandName: string;
  imageUrl: string;
  id: number;
  qty: string;
  price: number;
}

export interface CheckoutProps {
  lineItems: { name: string; price: number; quantity: number, image: string[] }[];
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
      value: number;
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
        value: any;
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
    brand: {
      name: string;
      description: string;
    }
    gender: string;
    description: string;
    media: {
      images: {url: string}[]
    }
    info: {
      aboutMe: string;
      sizeAndFit: string;
      careInfo: string;
    }
    variants: { displaySizeText: string }[];
  };
  message: {errorMessage: string}[] | string;
  status?: boolean;
}
