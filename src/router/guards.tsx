import { isValidElement, useCallback, useEffect } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { whiteList } from "./index";

import { ParentLayout } from "#src/layout";
import { useUserStore } from "#src/store";
import { rememberRoute } from "#src/utils";

export function RouterGuards() {
	const location = useLocation();
	const matches = useMatches();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const hasFetchedUserInfo = useUserStore(
		state => state.hasFetchedUserInfo,
	);
	const lng = useUserStore(state => state.lng);
	const getUserInfo = useUserStore(state => state.getUserInfo);

	const updateDocumentTitle = useCallback(async () => {
		const currentRoute = matches[matches.length - 1];
		const documentTitle = currentRoute.handle?.title;
		const newTitle = (
			isValidElement(documentTitle)
				? t(documentTitle?.props.children)
				: documentTitle
		) as string;
		document.title = newTitle || document.title;
	}, [matches, lng]);

	// router hooks
	const guardLogic = useCallback(async () => {
		const currentRoute = matches[matches.length - 1];

		// Route whitelist
		if (whiteList.has(currentRoute.pathname)) {
			return;
		}

		// Route without login verification
		if (currentRoute?.handle?.publicAccess) {
			return;
		}

		// Do not use redux to prevent tokens from being deleted
		const hasTokenInLocal = window.localStorage.getItem("token");
		if (!hasTokenInLocal) {
			// Go to login page
			// Remember the route before exiting
			if (location.pathname.length > 1) {
				navigate(`/login?redirect=${location.pathname}${location.search}`, {
					replace: true,
				});
			}
			else {
				navigate("/login", {
					replace: true,
				});
			}
		}
		else {
			// Fetch user profile
			!hasFetchedUserInfo && (await getUserInfo());

			// Redirect to home page
			if (matches.length === 1 && matches[0].pathname === "/") {
				navigate(import.meta.env.VITE_BASE_HOME_PATH, { replace: true });
			}
		}
	}, [matches, hasFetchedUserInfo, rememberRoute]);

	useEffect(() => {
		guardLogic();
	}, [matches, guardLogic]);

	useEffect(() => {
		updateDocumentTitle();
	}, [matches, lng, updateDocumentTitle]);

	return <ParentLayout />;
}
