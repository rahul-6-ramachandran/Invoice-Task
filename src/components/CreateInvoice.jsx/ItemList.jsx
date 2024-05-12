
function ItemList({item,addItems,itemsListControls}) {
    const items = [{
        item_Id : "1001",
        name : "Close Up",
        Price : 60,
        Tax : 5,
        

    },
    {
        item_Id : "1002",
        name : "Lux",
        Price : 40,
        Tax : 5,
    },
    {
        item_Id : "1003",
        name : "Santhoor",
        Price : 20,
        Tax : 3,
    }]
  return (
    <div className="flex w-full ">
          <div  className='flex text-lg w-full'>
              <table  className='table-auto flex flex-col   w-full border border-red-400'>
                <tr className='flex w-full text-center  justify-between bg-pink-300'> 
                  <th>Item ID</th>
                  <th>Item Name</th>
                  <th>Price</th>
                </tr>
                <tr  className='flex w-full text-center  justify-between bg-pink-300'>
                  
                    <td>

                    </td>
                </tr>


                {items.map((item)=>(
                <tr key={item.item_Id} onClick={()=>
                    {
                        addItems(item)
                        itemsListControls()
                     console.log(item)
                    }
                     } className='flex hover:bg-red-300 w-full justify-between  font-semibold bg-red-200'>
                   
                        <td>{item.item_Id}</td>
                        <td>{item.name}</td>
                        <td>{item.Price}</td>
                  
                  
                </tr>
                  ))} 
               
              </table>

            </div>
    </div>
  )
}

export default ItemList