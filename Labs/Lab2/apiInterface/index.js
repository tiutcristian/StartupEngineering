/**
 * Implement the functions to make the UI interactive.
 *
 * The functions from the previous task are already loaded
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

/**
 * Runs an API call and prints the JSON result (or error) in the response div
 */
async function show (call) {
  const output = document.querySelector('.response')
  // Let the flex item shrink to the box height instead of growing with its content
  output.style.minHeight = '0'
  output.textContent = 'Loading...'
  try {
    const result = await call()
    output.innerHTML = ''
    const pre = document.createElement('pre')
    // Fill the box and scroll inside it
    pre.style.cssText = 'margin:0;padding:5px;flex:1;align-self:stretch;min-width:0;' +
      'overflow:auto;white-space:pre-wrap;word-break:break-word'
    pre.textContent = JSON.stringify(result, null, 2)
    output.appendChild(pre)
  } catch (error) {
    output.textContent = error.message
  }
}

/**
 * Handler for Get button
 */
function handleGet () {
  show(api.getAllPosts)
}

/**
 * Handler for add button
 */
function handleAdd () {
  const postTitle = prompt('What is the post title ?')
  const postText = prompt('What is the post text ?')

  show(() => api.newPost(postTitle, postText))
}

/**
 * Handler for edit button
 */
function handleEdit () {
  const postId = prompt('What is the id of the post you want to edit ?')
  if (!postId) return
  const title = prompt('New title ?')
  const body = prompt('New text ?')

  show(() => api.editPost(postId, title, body))
}

/**
 * Handler for delete button
 */
function handleDelete () {
  const postId = prompt('What is the id of the post you want to delete ?')
  if (!postId) return

  show(async () => {
    await api.deletePost(postId)
    return { deleted: Number(postId) }
  })
}

/**
 * Assigns events to buttons
 */
function assignEvents () {
  const getButton = document.querySelector('button.get')
  const addButton = document.querySelector('button.add')
  const editButton = document.querySelector('button.edit')
  const deleteButton = document.querySelector('button.delete')

  getButton.addEventListener('click', handleGet)
  addButton.addEventListener('click', handleAdd)
  editButton.addEventListener('click', handleEdit)
  deleteButton.addEventListener('click', handleDelete)
}

document.addEventListener('DOMContentLoaded', assignEvents)
