import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center text-white items-center h-[44vh]">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">Get Me a Tea<span> <img src="tea.gif" alt="tea" width={88} /></span></div>
        <p>A crowdfunding platform for creators to fund their projects.</p>
        <p>A place where your fans can buy you a Tea. Unleash the power of your fans and get your projects funded.</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div> {/* divider */}

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Tea</h2>
        <div className="flex gap-5 justify-around">

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-300 rounded-full p-2 text-black" src="man.gif" alt="man" width={88} />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-300 rounded-full p-2 text-black" src="coin.gif" alt="coin" width={88} />
            <p className="font-bold">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-300 rounded-full p-2 text-black" src="group.gif" alt="group" width={88} />
            <p className="font-bold">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>

        </div>

      </div>

      <div className="bg-white h-1 opacity-10"></div> {/* divider */}

      <div className="text-white container mx-auto pb-32 pt-14 px-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about Me</h2>
        {/* about me section */}

        
          {/* about me section */}
          <p className="text-xl text-center">Hello! I'm a software developer with a passion for creating intuitive, dynamic user experiences. I specialize in JavaScript and have experience with framework like React.</p>
          <img width={100} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="Dawood" className="my-10 rounded-md" />
          <a href="https://github.com/heydawood" className="text-blue-500 underline">Check out my work</a>
        </div>
      

    </>
  );
}
