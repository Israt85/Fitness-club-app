import img from '../../assets/LoginImg.PNG'
import FloatingLabelInput from '../../Components/Input/MyInput';
const Login = () => {
    return (
      <div className="flex lg:flex-row flex-col justify-center overflow-hidden mx-auto">
       <div className="lg:w-[900px] w-full border h-auto">
        <p className='text-[#0C0C0C99] text-center mt-32'>Managing made delightful. Login now to experience it.</p>
      <FloatingLabelInput></FloatingLabelInput>
       </div>
       <div className="relative lg:w-[800px] w-full h-full lg:h-[700px]">
          <img className='w-full h-full' src={img} alt="" />
          <div className='bg-[#00000070] opacity-70 absolute top-0 left-0 lg:w-[700px] w-full h-full lg:h-[700px]'>

          </div>
          <div className='absolute bottom-10  flex left-16 mx-auto'>
          <svg width="30" height="30" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2333 40L0.172226 40L0.172228 17.7926L9.01885 -1.15205e-06L20.0161 -1.93297e-07L11.2139 17.7926L22.2333 17.7926L22.2333 40Z" fill="#F8F8F8"/>
<path d="M53.3195 40L31.2583 40L31.2583 17.7926L40.105 -1.15205e-06L51.1023 -1.93297e-07L42.3 17.7926L53.3195 17.7926L53.3195 40Z" fill="#F8F8F8"/>
</svg>
<p className='lg:w-[250px] w-full text-center text-white font-[Poppins]'>Discover the power of change and adopt a fresh approach to life.</p>

          </div>
       </div>
      </div>
    );
  };
  
  export default Login;