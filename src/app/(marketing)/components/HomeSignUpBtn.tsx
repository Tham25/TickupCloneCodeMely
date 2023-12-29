"use client";
import { useRouter } from "next/navigation";
import { Button } from "~/shared/components/button";

function HomeSignUpBtn() {
	const router = useRouter();

	const navigateToSignUp = () => router.push("/signup");

	return (
		<Button
			type="button"
			className="absolute w-[102px] h-[43px] top-[29px] left-[153px] bg-[#7b68ee] shadow-[0px_10px_25px_#7b68ee66] 
          rounded-[9px] all-[unset] box-border hover:bg-[#7b68ee] hover:shadow-none hover:top-[30px]"
			onClick={navigateToSignUp}
		>
			<div className="w-[54px] [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
				Sign Up
			</div>
		</Button>
	);
}

export default HomeSignUpBtn;
