
import { useState } from 'react'
function Invoice() {
    const [search,setSearch] = useState()
  return (
    <div className='m-5 flex flex-col p-2  justify-center item-center'>
          <div className='flex text-xl text-white p-2 bg-pink-700 w-full'>
              <h4>Invoice</h4>
          </div>
          <div className='flex justify-between w-full bg-rose-100'>
            <div className='flex'>
                <button className='px-3 py-1 text-white m-2 bg-orange-500 rounded-lg'>
                  Create
                </button>
            </div>
            <div className='flex w-2/5 mr-5 pr-5'>
              <form className='flex p-2 gap-3 w-full mr-5 pr-5'>
                <input type="search" className='p-1 w-full ' onChange={(e)=>setSearch(e.target.value)}/>
                <button className=' text-white bg-orange-500 px-3 py-1 rounded-lg'>
                  Search
                </button>
              </form>
                
            </div>
         
          </div>
          <div className='flex'>
              <table  className='table-fixed   w-full border border-red-400'>
                <tr className='flex w-full text-center  justify-between bg-pink-300'> 
                  <th>Invoice No.</th>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Total</th>
                  <th>Tax</th>
                  <th>Grand Total</th>
                </tr>
                <tr className='flex w-full justify-between  font-semibold bg-red-200'> 
                  <td>1001</td>
                  <td>01-05-2024</td>
                  <td>Mahesh</td>
                  <td>100.00</td>
                  <td>5.00</td>
                  <td>105.0</td>
                </tr>
               
              </table>

            </div>
      </div>
  )
}

export default Invoice