import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className='cover w-full bg-gray-50 relative'>
        <img className='object-cover w-full h-[350px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1717459200&token-hash=cNPFqYm5UFIJ_JSf-m6lHOhBsiCiYUYNbrNqXfsKbK4%3D" alt="usercover" />
        <div className='absolute -bottom-16 right-[46%] border-2 border-white rounded-full'>
          <img className='rounded-full' width={100} height={100} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="userimage" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col gap-1d mb-7">
        <div className='text-lg font-bold'>
          @{params.username}
        </div>
        <div className='text-slate-400 text-sm'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400 text-sm'>
          11,097 members . 84 posts . $18,330/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-10">
          <div className="supporters w-1/2 bg-slate-900 text-white p-4 rounded-lg">
            <h2 className='text-2xl font-bold my-3'>Supporters</h2>
            <ul className='mx-4 text-lg'>

              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="avatar" />
                <span>
                  Xyz donated <span className="font-bold">$30</span> with a message "I support you! Lots of ❤️"
                </span></li>
              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="avatar" />
                <span>
                  Xyz donated <span className="font-bold">$30</span> with a message "I support you! Lots of ❤️"
                </span></li>
              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="avatar" />
                <span>
                  Xyz donated <span className="font-bold">$30</span> with a message "I support you! Lots of ❤️"
                </span></li>

            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 text-white p-2 rounded-lg">
            <h2 className='text-2xl font-bold my-3'>Make a Payment</h2>

            <div className='flex gap-2 flex-col'>
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Name" />
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Message" />
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Amount" />
              <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>
            {/* Or choose from these amounts */}

            <div className='flex gap-2 mt-3 items-center justify-center'>
              <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay $10</button>
              <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay $20</button>
              <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay $50</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Username
