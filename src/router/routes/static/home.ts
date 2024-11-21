import type { AppRouteRecordRaw } from "#src/router/types";
import { ContainerLayout } from "#src/layout";

import { $t } from "#src/locales";
import { home } from "#src/router/extra-info";
import { HomeFilled } from "@ant-design/icons";
import { createElement, lazy } from "react";

const Home = lazy(() => import("#src/pages/home"));

const routes: AppRouteRecordRaw[] = [
	{
		path: "/home",
		Component: ContainerLayout,
		handle: {
			order: home,
			title: $t("common.menu.home"),
			icon: createElement(HomeFilled),
		},
		children: [
			{
				index: true,
				Component: Home,
				handle: {
					title: $t("common.menu.home"),
					icon: createElement(HomeFilled),
				},
			},
		],
	},
];

export default routes;