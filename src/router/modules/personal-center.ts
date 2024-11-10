import type { AppRouteRecordRaw } from "../types";
import { ProfileIcon, UserCircleIcon, UserSettingsIcon } from "#src/icons";
import { ContainerLayout } from "#src/layout";
import { $t } from "#src/locales";
import { personalCenter } from "#src/router/extra-info";

import { createElement, lazy } from "react";

const routes: AppRouteRecordRaw[] = [
	{
		path: "/personal-center",
		Component: ContainerLayout,
		handle: {
			order: personalCenter,
			title: $t("common.menu.personalCenter"),
			icon: createElement(UserCircleIcon),
		},
		children: [
			{
				path: "/personal-center/my-profile",
				Component: lazy(() => import("#src/pages/personal-center/profile")),
				handle: {
					title: $t("common.menu.personalCenter.profile"),
					icon: createElement(ProfileIcon),
				},
			},
			{
				path: "/personal-center/settings",
				Component: lazy(() => import("#src/pages/personal-center/settings")),
				handle: {
					title: $t("common.menu.personalCenter.settings"),
					icon: createElement(UserSettingsIcon),
				},
			},
		],
	},
];

export default routes;