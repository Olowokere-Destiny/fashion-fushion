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
