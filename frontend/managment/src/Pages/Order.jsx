import React from 'react'

const Order = () => {

  const orderlist = [
    {
      logo: "/Logo.svg", 
      address: "12/10, S.n. Banerjee Road, Titagarh, Barrackpore, North 24 Parganas, West Bengal 700120",
      orderid: "id-customer 1st 3 character-last 3 ph num",
      Customername: "Raj Saha",
      tablenum: "Table-01",
      item: [
        { name: "Mutton Seekh kebab", quantity: "x1", price: "420 /-" },
        { name: "Chicken Briyani", quantity: "x2", price: "500 /-" },
      ],
      gst: [
        { name: "CGST:", tax: "11.25 /-" },
        { name: "SGST:", tax: "11.25 /-" },
      ],
      total: "942 /-",
      paymentmode: "Online",
    },

    {
      logo: "/Logo.svg", 
      address: "12/10, S.n. Banerjee Road, Titagarh, Barrackpore, North 24 Parganas, West Bengal 700120",
      orderid: "id-customer 1st 3 character-last 3 ph num",
      tablenum: "Table-04",
      item: [
        { name: "Chicken Seekh kebab", quantity: "x1", price: "320 /-" },
        { name: "Chicken Briyani", quantity: "x2", price: "500 /-" },
      ],
      gst: [
        { name: "CGST:", tax: "11.25 /-" },
        { name: "SGST:", tax: "11.25 /-" },
      ],
      total: "842 /-"
    },
  ];

  return (
    <div className="p-4">
      {orderlist.map((order, idx) => (
        <div key={idx} className="bg-white p-5 rounded-2xl border border-amber-900/10 shadow-sm  overflow-hidden flex flex-col gap-5 mb-4">

          <div className="flex items-center gap-4">
            <img src={order.logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-sm font-semibold text-gray-500">Order ID: {order.orderid}</p>
              <p className="text-xs font-semibold text-gray-500">Customer Name: {order.Customername}</p>
              <p className="text-xs text-gray-400">{order.address}</p>
              <p className="text-xs text-gray-400">{order.tablenum}</p>
            </div>
          </div>

          <div className="border-t border-b border-gray-100 py-3">
            {order.item.map((item, itemIdx) => (
              <div key={itemIdx} className="flex justify-between text-sm my-1">
                <span>{item.name} <b className="text-gray-500">{item.quantity}</b></span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end gap-1 text-sm">
            {order.gst.map((tax, taxIdx) => (
              <div key={taxIdx} className="text-gray-500">
                <span>{tax.name} </span>
                <span>{tax.tax}</span>
              </div>
            ))}
            <div className="text-lg font-bold text-amber-900 mt-2">
              Total: {order.total}
            </div>
          </div>

          <div className="text-lg font-semibold text-amber-900/50 mt-2 flex items-start">
            Payment: {order.paymentmode}
          </div>

          <div className=' flex flex-row gap-2'>
            <div><button className='bg-amber-800 px-3 py-1 border-2 border-gray-800/20 rounded-2xl text-white font-semibold hover:border-amber-50'>Conform Order</button></div>
            <div><button className='bg-green-600 px-3 py-1 border-2 border-gray-800/20 rounded-2xl text-white font-semibold hover:border-amber-50'>Payment</button></div>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Order
