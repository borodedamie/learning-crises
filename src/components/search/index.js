import * as React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-hooks-web'
import * as searchStyles from '../layout/layout.module.css'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

function Hit({ hit }) {
  return (
    <article className= {searchStyles.modalArticle}>
      <div className= {searchStyles.modalImg}>
        <img src={ hit.coverImage.url }  style={{ width: '12vw' }} className= {searchStyles.modalImage}/>
      </div>
      <div className={searchStyles.modalParagraph}>
        <h6  >{ hit.title }</h6>
        <p>{ hit.author }</p>
      </div>
      
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