export async function getCategories() {
  const res = await fetch(' https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
}
// for single category news
export async function getNewsByCategoriesId(categoryId) {
  const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${categoryId}`);
  const data = await res.json();
  return data.data;
}
export async function getNewsDetailsById(newsId) {
  const res = await fetch(` https://openapi.programming-hero.com/api/news/${newsId}`);
  const data = await res.json();
  return data.data[0];
}