import { useEffect, useCallback } from "react";
import { useNavigate, useMatches, useLocation } from "react-router-dom";
import { ParentLayout } from "#src/layout";
import { useAppSelector, useAppDispatch } from "#src/store";
import { rememberRoute } from "#src/utils";
import { userInfoThunk } from "#src/store/slices/user";

export function RouterGuards() {
	const location = useLocation();
	const matches = useMatches();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const hasFetchedUserInfo = useAppSelector(
		(state) => state.user.hasFetchedUserInfo,
	);

	const guardLogic = useCallback(async () => {
		// Normal page
		if (location.pathname !== "/login") {
			// Do not use redux to prevent tokens from being deleted
			const hasTokenInLocal = window.localStorage.getItem("token");
			if (!hasTokenInLocal) {
				// Go to login page
				// Remember the route before exiting
				navigate(`/login${rememberRoute()}`, { replace: true });
			} else {
				// Fetch user profile
				!hasFetchedUserInfo && (await dispatch(userInfoThunk()));

				// Redirect to home page
				if (matches.length === 1 && matches[0].pathname === "/") {
					navigate(import.meta.env.VITE_BASE_HOME_PATH, { replace: true });
				}
			}
		}
	}, [matches, location, hasFetchedUserInfo]);

	useEffect(() => {
		guardLogic();
	}, [matches, location, hasFetchedUserInfo]);

	return <ParentLayout />;
}