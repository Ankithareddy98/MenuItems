import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import menu from './data';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const allCategories = ['all', ...tempSet];
// console.log(allCategories);

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Title text="Our Menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};
export default App;
