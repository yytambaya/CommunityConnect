import { useNavigate } from "react-router-dom";

const LargeButtonSendLink = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex-1 rounded-md bg-generic-white flex flex-col items-center justify-start py-10 px-6 box-border gap-[30px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-5xl text-neutral-900 font-paragraph-medium-medium mq450:gap-[15px] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
          Forgot your password?
        </h3>
        <div className="self-stretch relative text-base leading-[24px] text-primary-900 text-center">
          <p className="m-0">{`Enter your email and we will send you a link to reset `}</p>
          <p className="m-0">your password</p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-primary-900">
        <div className="relative leading-[24px] font-medium inline-block min-w-[107px]">
          Email address
        </div>
        <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
          <input
            className="w-[141px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400 text-left inline-block p-0"
            placeholder="youremail@emailcom"
            type="text"
          />
        </div>
      </div>
      <button onClick={ () => navigate('/forgot-password-message')} className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-gray-300 text-left inline-block min-w-[86px]">
          Send email
        </div>
      </button>
    </div>
  );
};

export default LargeButtonSendLink;
