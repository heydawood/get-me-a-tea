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
            {/* show list of all the supporters as a leaderboard */}
            <h2 className='text-2xl font-bold my-3'>Supporters</h2>
            <ul className='mx-4'>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
              <li className='my-2'>Xyz donated $30 with a message ""</li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 text-white p-2 rounded-lg">
            <h2 className='text-2xl font-bold my-3'>Make a Payment</h2>
            <div className='flex gap-3'>
              <input className='w-full p-4 rounded-lg bg-slate-800' placeholder="Enter amount" />
              <button className='bg-slate-800 p-5 rounded-lg'>Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
