import { useState } from "react"
import ItemList from "./ItemList"

function InvoiceForm() {
    const [itemOpen,setItemOpen] = useState(false)
    const openItemsList = ()=>{
       setItemOpen(prev=>!prev)
    }
    return (
        <>
            <div className="flex relative justify-center justify-center w-full">
                <div className="flex flex-col w-full justify-center">
                    <h4 className="text-xl text-white px-3 py-1 bg-rose-700 w-full ">Create Invoice</h4>
                    <div className="flex bg-red-300 justify-between p-5">
                      <div className="flex text-lg ">
                      <div className="flex gap-3 p-5 w-full">
                            <label htmlFor="Invoice">Invoice No.</label>
                            <input type="text" className="px-2" value={"1001"} />
                        </div>
                        <div className="flex gap-3 p-5">
                            <p>Date</p>
                            <input type="text" className="px-2" value={"1001"} />
                        </div>
                      </div>
                        <div className="flex ">
                            <button onClick={openItemsList} className="px-5 py-1 text-white m-4 bg-orange-600 rounded-lg">
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
                <tr className='flex w-full justify-between  font-semibold bg-red-200'> 
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
               
              </table>

            </div>
            {itemOpen &&
                <div className="z-10  absolute flex ">
                <ItemList/>
            </div>
            }
            <div className="flex  justify-center  bg-red-300  p-5 ">
            <div className="flex flex-col justify-center text-lg w-2/6">
                      <div className="flex gap-1 p-5 w-full justify-between">
                            <label htmlFor="Invoice">Total Price</label>
                            <input type="text" className="px-2" value={""} />
                        </div>
                        <div className="flex gap-3 p-5 w-full justify-between">
                            <p>Total Tax</p>
                            <input type="text" className="px-2" value={""} />
                        </div>
                        <div className="flex gap-3  p-5 w-full justify-between">
                            <p>Grand Total</p>
                            <input type="text" className="px-2" value={""} />
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