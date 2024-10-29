import React from 'react'

const InventoryTable = () => {
  return (
    <>
    <section className="mt-8 bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold float-left">Inventory Management</h2>
             <table className=" bg-blue-50 table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Item Name</th>
            <th className="px-4 py-2">Barcode/RFID</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2"><button>See All</button></th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Widget A</td>
            <td className="border px-4 py-2">123456789012</td>
            <td className="border px-4 py-2">10</td>
            <td className="border px-4 py-2">Zone A</td>
            <td className="border px-4 py-2">In Stock</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Widget B</td>
            <td className="border px-4 py-2">987654321098</td>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">Zone B</td>
            <td className="border px-4 py-2">Low Stock</td>
          </tr>
        </tbody>
      </table>
    </section>
    </>
  )
}

export default InventoryTable