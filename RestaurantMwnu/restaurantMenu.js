const breakfastMenu = ['Pancakes €5', 'Eggs Benedict €6', 'Oatmeal €3', 'Frittata €4'];
const mainCourseMenu = ['Steak €20', 'Pasta €12', 'Burger €15', 'Salmon €18'];
const dessertMenu = ['Cake €7', 'Ice Cream €5', 'Pudding €9', 'Fruit Salad €8'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
