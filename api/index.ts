export const getPostFunction = async(userId) => {
    const postsUrl= `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return await    fetch(postsUrl)
    .then((response) =>  response.json())
}

export const getCommentFunction = async(postsId) => {
    const commentsUrl= `https://jsonplaceholder.typicode.com/posts/${postsId}/comments`;
    return await fetch(commentsUrl)
    .then((response) => response.json())
}

export const getUserFunction = async() => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    return await fetch(usersUrl)
    .then((response) => response.json())
}