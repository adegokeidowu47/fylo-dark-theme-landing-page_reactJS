import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SubcribeSection = ({ addEmail }) => {
  const [email, setEmail] = useState('');


  const submitForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !email.match(emailRegex)) {
      document.getElementById('err-msg').textContent = 'Please enter a valid email address';
      toast.error('Check your Email!');
      return;
    }
    else{
      const newEmail = {
        email,
      };

      
      addEmail(newEmail);
      toast.success('Email added succesfully!');
      setEmail('');
      document.getElementById('err-msg').textContent = '';
    }
  };

  return (
    <section className="w-[80%] h-auto relative z-50 mt-50 mx-auto px-6 py-10 rounded-2xl gap-8 bg-testimonialBg shadow-sm shadow-lightTeal md:w-[60%] lg:px-8 lg:py-16">
        <div className="flex flex-col gap-y-10 items-center justify-around text-center">
            <h1 className="text-white text-2xl lg:text-5xl">Get early access today</h1>
            <p className="w-[90%] text-[16px] text-lightGray lg:w-xl lg:text-[20px]">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="w-[100%] h-auto">
                <form>
                    <input type="email" name="text" placeholder="example@fylo.com" className="w-[98%] bg-white px-8 py-3 rounded-4xl md:mr-2.5 lg:mr-5 lg:w-[60%]" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" className="w-[98%] lg:w-[35%] text-white text-[14px] bg-gradient-to-tr from-teal to-cyan hover:from-lightTeal hover:to-lightTeal hover:bg-gradient-to-tr rounded-full px-10 py-4 mt-4 lg:px-6 lg:py-3.5 lg:mt-4 cursor-pointer" onClick={submitForm}>Get Started For Free</button>
                    <div id="err-msg" className="text-[14px] text-red-400 text-start ml-15 lg:ml-12 mt-3"></div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SubcribeSection;