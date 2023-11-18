export default function sliceArray(currentPage, postsPerPage) {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  return [indexOfFirstPost, indexOfLastPost];
}
