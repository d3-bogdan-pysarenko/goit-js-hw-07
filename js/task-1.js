const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelector('ul').children;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});