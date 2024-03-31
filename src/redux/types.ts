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
///////
