import img1 from '../../assets/DashboardbanarImg.jpeg'
const Dashboard =()=>{
    return(
        <div className='flex my-6 justify-around'>
          <div className="w-[600px]">
          <div className="relative w-full flex h-[160px] z-1">
               <div className='w-96 h-40 p-6'>
                     <h2 className='text-2xl text-center text-white '>Track Your Daily Activities</h2>
                     <p className='text-xs w-[250px] mx-auto font-[Manrope] text-white opacity-70 text-left '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
               </div>
               <div>
                <img className='w-60 object-fill rounded-md h-40' src={img1} alt="" />
               </div>

               </div>
               <div className=" absolute my-6 rounded-md top-20 w-[600px] flex h-[160px] bg-gradient-to-r from-[#BE0D23] via-[#BE0D23] to-[#BE0D2366]"></div>
          </div>
          <div className=' flex  gap-6 justify-between'>
           <h2 className='text-[#475569]'>My Schedule</h2>
           <p className='text-sm font-[Manrope] text-[#BE0D23]'>View All</p>
          </div>
        </div>
    )
}
export default Dashboard;