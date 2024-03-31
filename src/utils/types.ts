// autocomplete types
export type SuggestionItem = {
  numberOfResults: number;
  searchTerm: string;
};
export interface AutoComplete {
    data: {
      suggestionGroups: [
        {suggestions: SuggestionItem[]}
      ]
    };
}
// item card props and data props

export interface ItemCardProps {
  name: string;
  brandName: string;
  imageUrl: string;
  additionalImageUrls: string;
  id: number;
  url: string;
  price: string;
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
    }
  }
}
export interface ItemCardData {
  data: {
    products: ItemProps[]
  }
}
