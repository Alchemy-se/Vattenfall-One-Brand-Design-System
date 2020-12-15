import { InstantSearch, Configure, } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Autocomplete from './autocomplete';
import React from "react";

const APPLICATION_KEY = process.env.APPLICATION_KEY;
const PUBLIC_SEARCH_KEY = process.env.PUBLIC_SEARCH_KEY
const INDEX_NAME = process.env.INDEX_NAME

//TODO kolla algolia
const algoliaClient = algoliasearch(APPLICATION_KEY, PUBLIC_SEARCH_KEY);

// Use this to not send initial requests on empty query
// When styling the dropdown box pass algoliaClient as param to InstantSearch component instead of searchClient
// AND IMPORTANT set "var isOpen" to true on row 523 in the search lib located in node_modules/react-autosuggest/dist/Autosuggest.js
// for having the dropdown always be open.
// Dont forget to change back when done!
// https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/
const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }
    return algoliaClient.search(requests);
  },
};

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
      <Configure hitsPerPage={5} />
      <Autocomplete />
    </InstantSearch>)
};

export default Search
