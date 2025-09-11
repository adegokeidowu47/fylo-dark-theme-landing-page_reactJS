import accessIcon from "../assets/images/icon-access-anywhere.svg";
import anyFileIcon from "../assets/images/icon-any-file.svg";
import securityIcon from "../assets/images/icon-security.svg";
import collaborationIcon from "../assets/images/icon-collaboration.svg";

const FyloService = () => {
  return (
    <>
        <section>
            <div className="container space-y-10 grid grid-cols-1 gap-x-80 mx-auto my-30 md:space-y-0 md:w-4xl md:grid-cols-2">
                {/* Container 01 */}
                <div id="container01" className="flex flex-col items-center justify-between space-y-4 mt-10">
                    <img src={accessIcon} alt="accessIcon Image"/>
                    <h3 className="text-white text-[18px] text-center">Access your files, anywhere</h3>
                    <p className="w-sm text-lightGray text-[14px] text-center" >The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </div>
                {/* Container 02 */}
                <div id="container02" className="flex flex-col items-center justify-between space-y-4 mt-10">
                    <img src={securityIcon} alt=""/>
                    <h3 className="text-white text-xl text-center">Security you can trust</h3>
                    <p className="w-sm text-lightGray text-[14px] text-center" >2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </div>
                {/* Container 03 */}
                <div id="container03" className="flex flex-col items-center justify-between space-y-4 mt-10">
                    <img src={collaborationIcon} alt=""/>
                    <h3 className="text-white text-xl text-center"> Real-time collaboration</h3>
                    <p className="w-sm text-lightGray text-[14px] text-center" >Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>
                {/* Container 04 */}
                <div id="container04" className="flex flex-col items-center justify-between space-y-4 mt-10">
                    <img src={anyFileIcon} alt=""/>
                    <h3 className="text-white text-xl text-center">Store any type of file</h3>
                    <p className="w-sm text-lightGray text-[14px] text-center">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default FyloService;