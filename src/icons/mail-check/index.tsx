import type { GetProps } from "antd";
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

export function MailCheckSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
			<path d="m16 19 2 2 4-4"></path>
		</svg>
	);
}
export function MailCheckIcon(props: Partial<CustomIconComponentProps>) {
	return <Icon component={MailCheckSvg} {...props} />;
}
