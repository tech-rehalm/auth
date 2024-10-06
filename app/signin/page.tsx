import Link from 'next/link';
export default function Page() { 

  return (
    <div className="w-full h-screen flex items-center justify-center  p-10 pt-[100px]">
      <form action="" className=' form bg-gradient-to-br from-[#ffffff0c] p-4sm:p-7 rounded-xl border border-gray-900 p-3 sm:p-7 flex flex-col sm:w-[350px]'>
        <h1 className="text-3xl font-bold w-full text-center mb-[10px]">
          Sign in
        </h1>
        <label htmlFor="email" className='label'>Email</label>
        <input 
          id="email"
          placeholder="example@gmail.com"
          type="email"
          name="email"
          className='input input-success bg-gray-800' 
        />
        <label htmlFor="password" className='label'>Password</label>
        <input 
          id="password"
          placeholder="*************"
          type="password"
          name="password"
          className='input input-success bg-gray-800' 
        />
        <button className='btn btn-success my-2'>Register</button>
        <Link href="/register" className='text-sm font-extralight'>Doesn&copy; have an account? <span className="link link-success">Register</span></Link>
      </form>
    </div>
  );
}
