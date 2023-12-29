import { UserButton } from "@clerk/nextjs";
import { Button } from "~/shared/components/button";

function DashBoardHeader() {
	return (
		<header id="tc-header" className="fixed top-0 left-0 w-full bg-[#323452] py-2 px-3">
			<div className="w-full flex">
				<div className="flex-1 pr-3">
					<img width={16} alt="logo" src="/images/clickup-symbol_logo.svg" />
				</div>
				<div className="w-[26%]">
					<Button>
						<span>Search...</span>
						<span>Ctrl+K</span>
					</Button>
				</div>
				<div className="flex-1 flex pl-3">
					<div>Upgrade subscription</div>
					<div>Button create everything</div>
					<div>Quick actions menu btn</div>
					<div>
						<UserButton afterSignOutUrl="/" />
					</div>
				</div>
			</div>
		</header>
	);
}

export default DashBoardHeader;
