"use client";
import { useRouter } from "next/navigation";
import { Button } from "~/shared/components/button";

function HomeLoginBtn() {
	const router = useRouter();

	const navigateToLogin = () => router.push("/login");

	return (
		<Button
			type="button"
			className="absolute w-[91px] h-[43px] top-[29px] left-[264px] bg-[#e9ebf0] shadow-[0px_10px_25px_#101e361a]  
				rounded-[9px] all-[unset] box-border hover:shadow-none hover:bg-[#e9ebf0] hover:top-[30px]"
			onClick={navigateToLogin}
		>
			<div className="w-[54px] [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#292d34] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
				Log in
			</div>
		</Button>
	);
}

export default HomeLoginBtn;
