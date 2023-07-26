import ItemCard from '../../components/ItemCard/ItemCard';
import AddItem from '../../components/AddItem/AddItem';

export default function ItemsList({ getItem, items }) {
  console.log(items)
  const inventory = items.map((i) => {
    return <ItemCard item={i}/>;
  });

  return (
    <>
      <h1>InventoryItems</h1>
      {(items.length !== 0) ? <ul>{inventory}</ul> : <h2>No Items Yet!</h2>}
      <AddItem getItem={getItem}/>
    </>
  )
};