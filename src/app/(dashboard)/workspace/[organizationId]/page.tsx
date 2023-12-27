import { OrganizationProfile } from "@clerk/nextjs";
import React from "react";

function WorkspacePage({ params: { organizationId } }: { params: { organizationId: string } }) {
	console.log("organizationId", organizationId);

	return (
		<div>
			<OrganizationProfile />
		</div>
	);
}

export default WorkspacePage;
