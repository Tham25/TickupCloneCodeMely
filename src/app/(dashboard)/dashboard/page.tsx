"use client";
import { OrganizationList, useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage: React.FC = (props) => {
	const { user } = useUser();

	console.log("user", user);

	return (
		<div className="container flex flex-col justify-center items-center">
			<h1>DashBoardPage</h1>
			<p>
				{JSON.stringify({
					email: user?.emailAddresses,
					name: user?.fullName,
				})}
			</p>
			{user?.imageUrl && <img src={user.imageUrl} width={200} alt="userImage" />}

			<OrganizationList
				hidePersonal
				afterCreateOrganizationUrl="/workspace/:id"
				afterSelectOrganizationUrl="/workspace/:id"
			/>
		</div>
	);
};

export default DashboardPage;
