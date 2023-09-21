import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		lazy: async () => {
			const mod = await import("#src/pages/login");
			return {
				...mod,
				Component: mod.default,
			};
		},
		path: "/login",
	},
]);

export default router;
