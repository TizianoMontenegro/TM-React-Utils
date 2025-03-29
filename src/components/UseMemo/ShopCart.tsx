import { useMemo, useState } from 'react'

interface Item {
  id: number,
  name: string,
  price: number
}

export const ShopCart = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'm16', price: 350 },
    { id: 2, name: 'revolver', price: 173 },
    { id: 3, name: 'granate', price: 100 },
  ])

  const [discount, setDiscount] = useState<number>(0)

  const totalCost = useMemo(() => 
    items.reduce((total, item) => total + item.price, 0),
  [items])

  const finalCost = useMemo(() =>
    totalCost - discount,
  [totalCost, discount])

  const addItem = () => {
    const newItem: Item = {
      id: items.length + 1,
      name: 'Producto' + items.length + 1,
      price: Math.random() * 5
    }

    setItems([...items, newItem])
  }
  
  return (
    <>
      <h2>Items List</h2>
      
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              {item.name} ${item.price.toFixed(2)}
            </li>
          ))
        }
      </ul>

      <p>Costo total: {totalCost.toFixed(2)}</p>

      <p>
        Discount: $
        <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />
      </p>

      <p>Costo final: {finalCost.toFixed(2)}</p>

      <button onClick={addItem}>Add Product</button>
    </>
  )
}