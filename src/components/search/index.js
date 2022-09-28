import * as React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

function Hit({ hit }) {
  return (
    <article>
      <p>{ hit }</p>
    </article>
  )
}

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName='undefined'>
      <SearchBox />
      {/* <Hits hitComponent={Hit} /> */}
    </InstantSearch>
  );
}