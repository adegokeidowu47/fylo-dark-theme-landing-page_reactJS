import { Link } from "react-router-dom";

const SubcribeSection = () => {
  

  return (
    <section className="w-[50%] relative z-50 h-auto mt-50 mx-auto px-8 py-16 rounded-2xl gap-8 bg-testimonialBg shadow-sm shadow-lightTeal">
        <div className="flex flex-col gap-y-10 items-center justify-around text-center">
            <h1 className="text-white text-4xl">Get early access today</h1>
            <p className="w-2xl text-[16px] text-lightGray">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="w-[100%] h-auto" >
                <form action="">
                    <input type="text" name="text" placeholder="example@fylo.com" className="w-[60%] bg-white px-10 py-3 rounded-4xl mr-5" />
                    <Link to="/*" className="text-white text-[14px] bg-gradient-to-tr from-teal to-cyan hover:from-lightTeal hover:to-lightTeal hover:bg-gradient-to-tr rounded-full px-10 py-4 mt-4">Get Started For Free</Link>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SubcribeSection;