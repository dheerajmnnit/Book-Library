import { FETCH_POSTS, FETCH_PRODUCT_FILTER, SELECT_FILTER } from './types';

/**
 * @param  {.then(res=>res.json(} =>dispatch=>{fetch('https
 * get api call to fetch data
 */
export const fetchPosts = () => dispatch => {
  fetch('http://localhost:9000/products')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.response.product
      })
    );
};

/**
 * Post api call to insert data
 * @param  {method:'POST'} 'https
 * @param  {{'content-type':'application/json'}} headers
 * @param  {JSON.stringify(postData} body
 */
export const createPost = postData => dispatch => {
  fetch('http://localhost:9000/products', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(res => {
    dispatch(fetchPosts())
  })
};

/**
 * @param  {} patchData
 * @param  {method:'PATCH'} =>dispatch=>{debugger;fetch(`http
 * @param  {{'content-type':'application/json'}} headers
 * @param  {JSON.stringify(patchData} body
 */
export const createPatch = (patchData) => dispatch => {
  debugger;
  fetch(`http://localhost:9000/products/${patchData._id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(patchData)
  }).then(res => {
    dispatch(fetchPosts())
  })
};

/**
 * @param  {method:'DELETE'} `http
 * @param  {{'content-type':'application/json'}}} headers
 */
export const deletePost = data => dispatch => {
  debugger;
  fetch(`http://localhost:9000/products/${data._id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => {
    dispatch(fetchPosts())
  })
}

/**
 * @param  {} searchValue
 * @param  {FETCH_PRODUCT_FILTER} =>{return{type
 * @returns FETCH_PRODUCT_FILTER
 */
export const fetchProductsFilter = (searchValue) => {
  return {
    type: FETCH_PRODUCT_FILTER,
    searchValue
  }
};

/**
 * @param  {} selectedValue
 * @param  {SELECT_FILTER} =>{return{type
 * @returns SELECT_FILTER
 */
export const filerOptionValue = (selectedValue) => {
  return {
    type: SELECT_FILTER,
    selectedValue
  }
};
