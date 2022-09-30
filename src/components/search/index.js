import * as React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

function Hit({ hit }) {
  return (
    <article>
      <img src={ hit.coverImage.url }  style={{ width: '12vw' }}/>
      <p>{ hit.title }</p>
      <p>{ hit.author }</p>
    </article>
  )
}

function Search() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName='undefined'>
        <Configure hitsPerPage={3} />
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  );
}

export default Search;