import React, { PropsWithChildren } from "react";
import DashBoardHeader from "./components/DashboardHeader";
import DashBoardSidebar from "./components/DashboardSidebar";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<DashBoardHeader />
			<div className="flex mt-16">
				<DashBoardSidebar />
				<main className="w-full h-screen flex items-center justify-center">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
