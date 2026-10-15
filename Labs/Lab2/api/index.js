/**
 * Implement the fetch functions to call the Typicode API
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

async function request (url, options) {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response.json()
}
function getAllPosts () {
  return request(API_URL)
}

function getPost (postId) {
  return request(`${API_URL}/${postId}`)
}

function newPost (title = 'title', body = 'body', userId = 1) {
  return request(API_URL, {
    method: 'POST',
    body: JSON.stringify({ title, body, userId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
}

function editPost (postId, title = 'title', body = 'body', userId = 1) {
  return request(`${API_URL}/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ id: Number(postId), title, body, userId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
}

function deletePost (postId) {
  return request(`${API_URL}/${postId}`, { method: 'DELETE' })
}

// Console-friendly names: getPosts(), addPost(), deletePost(id)
const api = { getAllPosts, getPost, newPost, editPost, deletePost }
const getPosts = getAllPosts
const addPost = newPost

if (typeof window !== 'undefined') {
  window.api = api
  window.getPosts = getPosts
  window.addPost = addPost
}
