import type { LanguageType } from "#src/locales";
import type { MenuProps } from "antd";
import { useLanguage } from "#src/hooks";
import { cn } from "#src/utils";

import { TranslationOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

interface LanguageButtonProps {
	className?: string
}

export function LanguageButton({ className }: LanguageButtonProps) {
	const { language, setLanguage } = useLanguage();

	const items: MenuProps["items"] = [
		{
			label: "简体中文",
			key: "zh-CN",
		},
		{
			label: "English",
			key: "en-US",
		},
	];

	const onClick: MenuProps["onClick"] = ({ key }) => {
		setLanguage(key as LanguageType);
	};

	return (
		<Dropdown
			menu={{
				items,
				onClick,
				selectable: true,
				defaultSelectedKeys: [language],
			}}
			trigger={["click"]}
			arrow={false}
			placement="bottom"
		>
			<div role="menuitem" tabIndex={-1} className={cn("text-lg", className)}>
				<TranslationOutlined />
			</div>
		</Dropdown>
	);
}