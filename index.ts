const readArticles = { 1: true }
const articles = [{ id: 1 }, { id: 123 }, { id: 2345 }];
const articlesIds: number[] = articles.map(a => a.id);


const readArticlesIds: number[] = Object.keys(readArticles).map( a => Number(a));

console.log('articlesIds', articlesIds);
console.log('readArticlesIds', readArticlesIds);

const unreadArticles = articlesIds.filter( a => !readArticlesIds.includes(a));

console.log('unreadArticles', unreadArticles);
