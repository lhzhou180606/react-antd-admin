import { useTranslation } from "react-i18next";
import { Button, Result } from "antd";
import { useNavigate, Routes, Route } from "react-router-dom";
import { ContainerLayout } from "#src/layout";

export default function Error404() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const isLogin = !!window.localStorage.getItem("token");

	const Result404 = (
		<Result
			status="404"
			title="404"
			subTitle={t("common.404SubTitle")}
			extra={
				<Button
					type="primary"
					onClick={() => {
						navigate("/");
					}}
				>
					{t("common.backHome")}
				</Button>
			}
		/>
	);

	return isLogin ? (
		<Routes>
			<Route element={<ContainerLayout />} path="*">
				<Route path="*" element={Result404}></Route>
			</Route>
		</Routes>
	) : (
		Result404
	);
}
