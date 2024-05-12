import { useState } from "react"
import ItemList from "./ItemList"

function InvoiceForm({acceptUser,user}) {
    const [item,setItem] = useState([])
    const [itemOpen,setItemOpen] = useState(false)
    // console.log(item)
    const itemsListControls = ()=>{
       setItemOpen(prev=>!prev)
    }
   const filteredItems = item?.filter((element,index)=>(index=== item.findIndex((obj)=>(JSON.stringify(element)=== JSON.stringify(obj)))))
   const totalAmount = filteredItems.reduce((acc,item)=> ( acc +=item.Price),0)
    console.log(totalAmount+(totalAmount*parseInt(user?.Total_Tax)/100))
    console.log(user?.Total_Tax)
    const addItems = (item)=>{
        setItem((prev)=> ([...prev,item]))
    }
    return (
        <>
            <div className="flex relative flex-wrap justify-center justify-center w-full ">
                <div className="flex flex-wrap flex-col w-full justify-center">
                    <h4 className="text-xl text-white px-3 py-1 bg-rose-700 w-full ">Create Invoice</h4>
                    <div className="flex bg-red-300 justify-between p-5">
                      <div className="flex text-lg ">
                       
                      <div className="flex gap-3 p-5 w-full">
                            <label htmlFor="Invoice">Invoice No.</label>
                            <input type="text" className="px-2" name="invoice" value={user.invoice} onChange={(e)=>acceptUser(e.target.name,e.target.value)} />
                        </div>
                        <div className="flex gap-3 p-5">
                            <p>Date</p>
                            <input type="text"className="px-2" value={new Date().toLocaleDateString("en-US")} />
                        </div>
                      </div>
                        <div className="flex ">
                            <button onClick={itemsListControls} className="px-5 py-1 text-white m-4 bg-orange-600 rounded-lg">
                                Add
                            </button>
                        </div>

                    </div>
                  
                    <div  className='flex text-lg'>
              <table  className='table-fixed   w-full border border-red-400'>
                <tr className='flex w-full text-center  justify-between bg-pink-300'> 
                  <th>Item ID</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Tax</th>
                  <th>Sub Total</th>
                 
                </tr>
                {
                    filteredItems?.map((item)=>(
                        <tr key={item.item_Id} className='flex w-full justify-between  font-semibold bg-red-200'> 
                        <td  className='flex justify-center item-center text-center'>{item.item_Id}</td>
                        <td className='flex justify-center text-center'>{item.name}</td>
                        <td className='flex justify-center text-center'>{item.Price}</td>
                        <td className='flex justify-center text-center'>{item.Tax}.00 %</td>
                        <td className='flex justify-center text-center'>{item.Price+(item.Price*item.Tax/100)}.00</td>
                      </tr>
                    ))
                    
                       
                }
              
               
              </table>

            </div>
            {itemOpen &&
                <div className="z-10 justify-center absolute flex w-1/2 ">
                <ItemList setItem={setItem}  addItems={addItems} itemsListControls={itemsListControls}  />
            </div>
            }
            <div className="flex  justify-center  bg-red-300  p-5 ">
            <div className="flex flex-col justify-center text-lg w-2/6">
                      <div className="flex gap-5 p-5 w-full justify-between">
                            <label htmlFor="Invoice">Total Price</label>
                            <input type="text" className="px-2" name="Total_Amount" value={totalAmount}  onChange={(e)=>acceptUser(e.target.name,e.target.value)} />
                        </div>
                        <div className="flex gap-5 p-5 w-full justify-between">
                            <p>Total Tax</p>
                            <input type="text" className="px-2" name="Total_Tax" value={user.Total_Tax}  onChange={(e)=>acceptUser(e.target.name,e.target.value)} />
                        </div>
                        <div className="flex gap-3  p-5 w-full justify-between">
                            <p>Grand Total</p>
                            <input type="text" className="px-2" name="Grand_Total" value={ totalAmount+(totalAmount*Number(user?.Total_Tax)/100)}  onChange={(e)=>acceptUser(e.target.name,e.target.value)} />
                        </div>
                      </div>
                     
            </div>
            <div className="flex bg-red-300  p-5 justify-end">
                        <button className="px-4 py-1 text-lg  text-white m-4 bg-orange-600 rounded-lg">
                            Save
                        </button>
                       
                      </div>
                   
                </div>
            </div>
        </>

    )
}

export default InvoiceForm