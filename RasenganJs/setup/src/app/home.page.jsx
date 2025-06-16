import { Link } from 'rasengan';
import logo from '@/assets/logo.svg';
import Image from '@rasenganjs/image';
import Image1 from '../assets/téléchargement.jpg';
import Image2 from '../assets/téléchargement (1).jpg';
import Image3 from '../assets/téléchargement (3).jpg';

const Home = () => {
  return (
    <section className="w-full h-full bg-white flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      
      <div className="flex flex-col items-center mt-25">
        <h1 className="font-black text-[3rem] md:text-[4rem] text-center font-urbanist">
          Why brands keep <span className="text-zinc-400">coming back.</span>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Card----1 */}
        <div className="border border-zinc-950/5 p-1 rounded-2xl flex flex-col items-center justify-center bg-white shadow-2xl">
          <div className="h-60 w-full border border-zinc-950/5 rounded-2xl bg-white mb-4 flex items-center justify-center">
            <img src={Image1} alt="" className="max-h-full max-w-full object-cover" />
          </div>
          <div className="mb-4">
            <h2 className='font-bold text-lg'>Designs that convert</h2>
            <p>Built for today, flexible for whhat's <br /> next</p>
          </div>
        </div>
        {/* Card----2 */}
        <div className="border border-zinc-950/5 p-1 rounded-2xl flex flex-col items-center justify-center bg-white shadow-2xl">
          <div className="h-60 w-full border border-zinc-950/5 rounded-2xl bg-white mb-4 flex items-center justify-center">
            <img src={Image2} alt="" className="max-h-full max-w-full object-cover" />
          </div>
          <div className="mb-4 px-3">
            <h2 className='font-bold text-lg'>Thoughtful, not trendy</h2>
            <p>Our work is grounded in purpose, not passing fads</p>
          </div>
        </div>
        {/* Card----3 */}
        <div className="border border-zinc-950/5 p-1 rounded-2xl flex flex-col items-center justify-center bg-white shadow-2xl">
          <div className="h-60 w-full border border-zinc-950/5 rounded-2xl bg-zinc-50 mb-4 flex items-center justify-center">
            <img src={Image3} alt="" className="max-h-full max-w-full object-cover" />
          </div>
          <div className="mb-4 px-3">
            <h2 className='font-bold text-lg'>Fast without the fuss</h2>
            <p>A streamlined process. quick, clean, no chaos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.path = '/';
Home.metadata = {
  title: 'Home',
  description: 'Home page',
};

export default Home;
