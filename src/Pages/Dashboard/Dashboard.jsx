import img1 from '../../assets/DashboardbanarImg.jpeg'
import monday from '../../assets/modayImg.png'
import tuesday from '../../assets/tuesdayImg.png'
import wednesday from '../../assets/wednesdayImg.png'
const Dashboard =()=>{
    return(
        <div className='flex my-6 justify-around'>
         <div>
         <div className="w-[700px]">
          <div className="relative w-full flex justify-end h-[160px]">
              
               <div>
                <img className='w-60 z-1  rounded-md h-40' src={img1} alt="" />
               </div>

               </div>
               <div className=" absolute my-6 rounded-md top-20 w-[700px] flex h-[160px] bg-gradient-to-r from-[#BE0D23] via-[#BE0D23] to-[#BE0D2366]">
               <div className='w-96 h-40 p-6'>
                     <h2 className='text-2xl text-center text-white '>Track Your Daily Activities</h2>
                     <p className='text-xs w-[250px] mx-auto font-[Manrope] text-white opacity-70 text-left '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
               </div>
               </div>
          </div>

          {/* second part */}
          <div className='w-[700px] flex justify-center my-6 gap-4'>
            {/* workout */}
            <div className='relative'>
            <div className=' w-[220px] h-[160px] rounded-md bg-[#06B6D4] '>
                <div className='flex items-center gap-2 p-2'>
                  <div className='w-[45px] h-[45px] flex justify-center items-center rounded-md bg-[#0891B2]'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0933 16H18.9067M30 19.3333V12.6667M2 19.3333V12.6667M22.9067 24C26.1067 24 26.9067 22.2 26.9067 20V12C26.9067 9.8 26.1067 8 22.9067 8C19.7067 8 18.9067 9.8 18.9067 12V20C18.9067 22.2 19.7067 24 22.9067 24ZM9.09333 24C5.89333 24 5.09333 22.2 5.09333 20V12C5.09333 9.8 5.89333 8 9.09333 8C12.2933 8 13.0933 9.8 13.0933 12V20C13.0933 22.2 12.2933 24 9.09333 24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
                 <div className='text-white '>
                 <h2 className=' '>Workout</h2>
                 <p className='text-xs'>4 hrs</p>
                 </div>
                </div>

<div className='flex'>
<svg width="250" height="105" viewBox="0 0 252 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.80391 74.8253L0.00390625 76.8929V120H252.004V2L249.204 4.81332C246.404 7.62664 240.804 13.2533 235.204 25.3696C229.604 37.4859 224.004 56.0918 218.404 58.5053C212.804 60.9187 207.204 47.1397 201.604 36.7322C196.004 26.3246 190.404 19.2885 184.804 17.7457C179.204 16.2029 173.604 20.1533 168.004 27.6294C162.404 35.1055 156.804 46.1073 151.204 55.3183C145.604 64.5293 140.004 71.9494 134.404 68.83C128.804 65.7106 123.204 52.0516 117.604 47.0885C112.004 42.1254 106.404 45.8582 100.804 52.6348C95.2039 59.4115 89.6039 69.2319 84.0039 76.6768C78.4039 84.1217 72.8039 89.191 67.2039 85.3515C61.6039 81.512 56.0039 68.7637 50.4039 60.2003C44.8039 51.6369 39.2039 47.2584 33.6039 48.6705C28.0039 50.0825 22.4039 57.2851 16.8039 62.9539C11.2039 68.6227 5.60391 72.7578 2.80391 74.8253Z"
    fill="#FFFFFF33" stroke="#0891B2" stroke-opacity="0.3"/>
</svg>

</div>


 </div>
            </div>
            {/* calories */}
            <div className='relative'>
            <div className=' w-[220px] h-[160px] rounded-md bg-[#BE0D23] '>
                <div className='flex items-center gap-2 p-2'>
                  <div className='w-[45px] h-[45px] flex justify-center items-center rounded-md bg-[#EA580C]'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8667 10C16.8667 10 16.6667 11 13.6667 15C10.7667 18.8 14.9667 21.6 15.4667 22H15.5667C16.1667 21.5 23.7667 16.7 16.8667 10Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4667 7.79982C14.4667 5.49982 13.5667 3.39982 12.6667 2.19982C12.3667 1.89982 11.8667 1.99982 11.7667 2.39982C11.3667 3.89982 10.1667 7.09982 7.26668 10.8998C3.56668 15.6998 6.96668 20.8998 10.4667 21.8998C12.3667 22.3998 9.96668 20.8998 9.66668 17.7998C9.36668 13.8998 14.4667 10.9998 14.4667 7.79982Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                  </div>
                 <div className='text-white '>
                 <h2 className=' '>Calories</h2>
                 <p className='text-xs'>1800 kcl</p>
                 </div>
                </div>

<div className='flex'>
<svg width="250" height="109" viewBox="0 0 253 109" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00018 75.5514L3.79259 69.851C6.585 64.1507 12.1698 52.75 17.7546 49.0274C23.3395 45.3049 28.9243 49.2605 34.5091 56.7694C40.0939 64.2784 45.6788 75.3407 51.2636 80.2486C56.8484 85.1565 62.4332 83.91 68.018 77.0725C73.6029 70.2349 79.1877 57.8063 84.7725 57.1439C90.3573 56.4815 95.9421 67.5853 101.527 69.7738C107.112 71.9623 112.697 65.2356 118.281 60.2466C123.866 55.2577 129.451 52.0065 135.036 54.2924C140.621 56.5782 146.206 64.4012 151.79 66.6934C157.375 68.9856 162.96 65.7472 168.545 53.8573C174.13 41.9674 179.714 21.4262 185.299 10.7633C190.884 0.100343 196.469 -0.684242 202.054 2.9845C207.639 6.65324 213.223 14.7753 218.808 14.5021C224.393 14.2289 229.978 5.56039 235.563 3.01834C241.148 0.476296 246.732 4.0607 249.525 5.8529L252.317 7.6451" stroke="#EA580C" stroke-opacity="0.3" stroke-width="0.964286"/>
<path d="M3.79259 69.851L1.00018 75.5514V109H252.317V7.6451L249.525 5.8529C246.732 4.0607 241.148 0.476296 235.563 3.01834C229.978 5.56039 224.393 14.2289 218.808 14.5021C213.223 14.7753 207.639 6.65324 202.054 2.9845C196.469 -0.684242 190.884 0.100343 185.299 10.7633C179.714 21.4262 174.13 41.9674 168.545 53.8573C162.96 65.7472 157.375 68.9856 151.79 66.6934C146.206 64.4012 140.621 56.5782 135.036 54.2924C129.451 52.0065 123.866 55.2577 118.281 60.2466C112.697 65.2356 107.112 71.9623 101.527 69.7738C95.9421 67.5853 90.3573 56.4815 84.7725 57.1439C79.1877 57.8063 73.6029 70.2349 68.018 77.0725C62.4332 83.91 56.8484 85.1565 51.2636 80.2486C45.6788 75.3407 40.0939 64.2784 34.5091 56.7694C28.9243 49.2605 23.3395 45.3049 17.7546 49.0274C12.1698 52.75 6.585 64.1507 3.79259 69.851Z" fill="url(#paint0_linear_204_3217)"/>
<defs>
<linearGradient id="paint0_linear_204_3217" x1="126.659" y1="1" x2="126.659" y2="109" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>


</div>


 </div>
            </div>

            {/* steps */}
            <div className='relative'>
            <div className=' w-[220px] h-[160px] rounded-md bg-[#8B5CF6] '>
                <div className='flex items-center gap-2 p-2'>
                  <div className='w-[45px] h-[45px] flex justify-center items-center rounded-md bg-[#6D28D9]'>
                  <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 16.9998H6.5V18.2498C6.5 19.7686 5.26878 20.9998 3.75 20.9998C2.23122 20.9998 1 19.7686 1 18.2498V16.9998ZM5.05848 12.9998L5.10263 12.8674C5.86974 10.762 6 10.3712 6 9.9998C6 9.2503 5.79747 8.35724 5.47234 7.72659C5.23039 7.25729 5.06 7.12043 5 7.12043C3.72086 7.12043 2.5 8.48426 2.5 9.9998C2.5 10.9586 2.57517 11.773 2.72674 12.7582C2.7328 12.7976 2.74709 12.8871 2.76512 12.9998H5.05848ZM5 5.12043C7 5.12043 8 7.99982 8 9.9998C8 10.9998 7.5 11.9998 7 13.4998L6.5 14.9998H1C1 13.9998 0.5 12.4998 0.5 9.9998C0.5 7.49982 2.49783 5.12043 5 5.12043ZM17.054 13.0981L16.8369 14.3292C16.5732 15.8249 15.1468 16.8236 13.6511 16.5598C12.1554 16.2961 11.1567 14.8698 11.4205 13.3741L11.6375 12.1431L17.054 13.0981ZM16.0045 8.8514C16.1695 8.35163 16.3054 7.95728 16.3071 7.95163C16.5089 7.2935 16.668 6.64868 16.7923 5.94402C17.0555 4.45149 16.09 2.89638 14.8303 2.67426C14.7712 2.66384 14.5796 2.76903 14.2598 3.18919C13.8301 3.7538 13.4756 4.59814 13.3455 5.33625C13.2872 5.66645 13.2964 5.74048 13.6158 7.59923C13.6596 7.85446 13.697 8.08498 13.7312 8.31605L13.7517 8.45416L16.0045 8.8514ZM15.1776 0.704641C17.6417 1.13914 19.196 3.82929 18.7619 6.29131C18.3278 8.75333 17.5749 10.1437 17.4013 11.1285L11.9848 10.1735L11.7529 8.60943C11.5209 7.04539 11.2022 5.97376 11.3758 4.98895C11.7231 3.01934 13.2079 0.357341 15.1776 0.704641Z" fill="white"/>
</svg>



                  </div>
                 <div className='text-white '>
                 <h2 className=' '>Steps</h2>
                 <p className='text-xs'>2200 steps</p>
                 </div>
                </div>

<div className='flex'>
<svg width="250" height="120" viewBox="0 0 252 131" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 110.311L2.8 101.024C5.6 91.7368 11.2 73.1624 16.8 66.8949C22.4 60.6274 28 66.6668 33.6 72.0879C39.2 77.509 44.8 82.3117 50.4 84.7664C56 87.221 61.6 87.3276 67.2 85.7303C72.8 84.1331 78.4 80.8319 84 79.6215C89.6 78.4111 95.2 79.2913 100.8 82.6582C106.4 86.0252 112 91.8788 117.6 86.3348C123.2 80.7908 128.8 63.8493 134.4 54.2077C140 44.5661 145.6 42.2245 151.2 41.2379C156.8 40.2514 162.4 40.62 168 40.7415C173.6 40.8629 179.2 40.7371 184.8 42.6567C190.4 44.5763 196 48.5413 201.6 50.6309C207.2 52.7204 212.8 52.9346 218.4 54.797C224 56.6594 229.6 60.1701 235.2 51.4787C240.8 42.7872 246.4 21.8936 249.2 11.4468L252 1" stroke="#5B21B6" stroke-opacity="0.3"/>
<path d="M2.8 101.024L0 110.311V131.338H252V1L249.2 11.4468L249.2 11.447C246.4 21.8938 240.8 42.7873 235.2 51.4787C229.6 60.1702 224 56.6594 218.4 54.797C212.8 52.9346 207.2 52.7204 201.6 50.6309C196 48.5413 190.4 44.5763 184.8 42.6567C179.2 40.7371 173.6 40.8629 168 40.7415C162.4 40.62 156.8 40.2514 151.2 41.2379C145.6 42.2245 140 44.5661 134.4 54.2077C128.8 63.8493 123.2 80.7908 117.6 86.3348C112 91.8788 106.4 86.0252 100.8 82.6582C95.2 79.2913 89.6 78.4111 84 79.6215C78.4 80.832 72.8 84.1331 67.2 85.7304C61.6 87.3276 56 87.221 50.4 84.7664C44.8 82.3117 39.2 77.509 33.6 72.0879C28 66.6668 22.4 60.6274 16.8 66.8949C11.2 73.1624 5.6 91.7368 2.8 101.024Z" fill="url(#paint0_linear_204_3230)" fill-opacity="0.2"/>
<defs>
<linearGradient id="paint0_linear_204_3230" x1="126" y1="1" x2="126" y2="131.338" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>


</div>


 </div>
            </div>
            
          </div>

          {/* chart part */}
          <div className='w-[700px] h-[300px] border'>

          </div>
         </div>
        <div>
        <div>
         <div className=' flex  gap-6 justify-between'>
           <h2 className='text-[#475569]'>My Schedule</h2>
           <p className='text-sm flex items-center gap-2 font-[Manrope] text-[#BE0D23]'>View All
           <svg width="6" height="10" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.1717 4.5005L0.343262 1.67203L1.7575 0.257812L6.0001 4.5005L1.7575 8.7431L0.343262 7.3289L3.1717 4.5005Z" fill="#BE0D23"/>
</svg>

           </p>
          </div>

          {/* monday */}
          <div className='w-[300px] my-4 bg-white rounded-lg shadow-[#9F9F9F26] shadow-lg h-[100px]'>
             <h2 className='p-2 text-[#475569]'>Monday</h2>
             <div className='flex gap-1 my-1'>
             <img className='w-10 h-10' src={monday} alt="" />
             <div className=''>
              <h2 className=''>Stretch</h2>
              <p className='text-xs'>At 08:00</p>
             </div>
             <div className='w-20 h-10 bg-[#FFF7ED] ml-20 flex justify-center items-center text-sm text-[#BE0D23] rounded-full'>
              <p>20 Sets</p>
             </div>
             </div>
          </div>
          {/* tuesday */}
          <div className='w-[300px] my-4 bg-white rounded-lg shadow-[#9F9F9F26] shadow-lg h-[100px]'>
             <h2 className='p-2 text-[#475569]'>Monday</h2>
             <div className='flex gap-1 my-1'>
             <img className='w-10 h-10' src={tuesday} alt="" />
             <div className=''>
              <h2 className='w-24 text-sm '>Back Stretch</h2>
              <p className='text-xs'>At 08:00</p>
             </div>
             <div className='w-20 h-10 bg-[#FFF7ED] ml-12 flex justify-center items-center text-sm text-[#BE0D23] rounded-full'>
              <p className=''>10 rounds</p>
             </div>
             </div>
          </div>
          {/* wednesday */}
          <div className='w-[300px] my-4 bg-white rounded-lg shadow-[#9F9F9F26] shadow-lg h-[100px]'>
             <h2 className='p-2 text-[#475569]'>Monday</h2>
             <div className='flex gap-1 my-1'>
             <img className='w-12 h-12' src={wednesday} alt="" />
             <div className=''>
              <h2 className=''>Yoga</h2>
              <p className='text-xs'>At 08:00</p>
             </div>
             <div className='w-20 h-10 ml-20 bg-[#FFF7ED] flex justify-center items-center text-sm text-[#BE0D23] rounded-full'>
              <p>20 min</p>
             </div>
             </div>
          </div>
         </div>
          {/* Goals */}
          <div className=' flex mt-10  gap-6 justify-between'>
           <h2 className='text-[#475569] font-bold'>Goals</h2>
           <p className='text-sm flex items-center gap-2 font-[Manrope] text-[#BE0D23]'>View All
           <svg width="6" height="10" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.1717 4.5005L0.343262 1.67203L1.7575 0.257812L6.0001 4.5005L1.7575 8.7431L0.343262 7.3289L3.1717 4.5005Z" fill="#BE0D23"/>
</svg>

           </p>
          </div>

          <div className=''>
            <div className='w-[300px] p-2 flex justify-between items-center h-[70px] bg-white rounded-lg my-6'>
               <div className=''>
                <h2>ABS & Stretch</h2>
                <p className='text-sm'>Saturday, April 14 | 08:00 AM</p>
               </div>
               <div className='w-24 h-10 bg-[#FFF7ED] flex justify-center items-center text-sm text-[#BE0D23] rounded-full'>
              <p className='text-sm'>30 Min/day</p>
             </div>

            </div>
            <div className='w-[300px] p-2 flex justify-between items-center h-[70px] bg-white rounded-lg'>
               <div className=''>
                <h2>Push Up</h2>
                <p className='text-sm'>Sunday, April 15 | 08:00 AM</p>
               </div>
               <div className='w-24 h-10 bg-[#FFF7ED] flex justify-center items-center text-sm text-[#BE0D23] rounded-full'>
              <p className='text-sm'>50 Sets/day</p>
             </div>

            </div>
          </div>
        </div>

        
        </div>
    )
}
export default Dashboard;