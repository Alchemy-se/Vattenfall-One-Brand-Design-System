import { InstantSearch, Configure,  } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Autocomplete from './autocomplete';
import React from "react";

const APPLICATION_KEY = "TR5Z03YJ0Q";
const PUBLIC_SEARCH_KEY = "fa1fd3376fd7bdd9ae89013cb7208a18";


const algoliaClient = algoliasearch(APPLICATION_KEY, PUBLIC_SEARCH_KEY);

// Use this to not send initial requests on empty query
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
    <InstantSearch searchClient={searchClient} indexName="vf_components">
      <Configure hitsPerPage={5} />
      <Autocomplete />
    </InstantSearch>)
};

export default Search
