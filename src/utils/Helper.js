/** @format */

export function filterData(seacrhTxt, restaurants) {
  const filterData = restaurants.filter((restaurantItem) => {
    return restaurantItem.data.name.includes(seacrhTxt.toLowerCase());
  });
  return filterData;
}
