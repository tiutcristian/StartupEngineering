/**
 * Implement the functions to make the UI interactive.
 *
 * The functions from the previous task are already loaded
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

/**
 * Handler for Get button
 */
function getPosts () {
  // TODO:
}

/**
 * Handler for add button
 */
function addPost () {
  const postTitle = prompt('What is the post title ?')
  const postText = prompt('What is the post text ?')

  // TODO:
}

/**
 * Handler for edit button
 */
function editPost () {
  const postId = prompt('What is the id of the post you want to edit ?')

  // TODO:
}

/**
 * Handler for delete button
 */
function deletePost () {
  const postId = prompt('What is the id of the post you want to delete ?')

  // TODO:
}

/**
 * Assigns events to buttons
 */
function assignEvents () {
  const getButton = document.querySelector('button.get')
  const addButton = document.querySelector('button.add')
  const editButton = document.querySelector('button.edit')
  const deleteButton = document.querySelector('button.delete')

  getButton.addEventListener('click', getPosts)
  addButton.addEventListener('click', addPost)
  editButton.addEventListener('click', editPost)
  deleteButton.addEventListener('click', deletePost)
}

document.addEventListener('DOMContentLoaded', assignEvents)
