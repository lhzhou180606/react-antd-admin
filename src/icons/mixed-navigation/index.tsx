import type { GetProps } from "antd";
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

export function MixedNavigationSvg() {
	return (
		/**
		 * 更改了以下 svg 原属性
		 * fill-opacity => fillOpacity
		 */
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="0.63em" viewBox="0 0 104 66" fill="none">
			<g>
				<rect width="104" height="66" x=".135" y=".135" fill="currentColor" fillOpacity=".02" rx="4" />
				<path fill="#1677ff" d="M-.074-.058h104.079v9.07H-.074z" />
				<rect width="7.525" height="2.789" x="15.582" y="3.208" fill="#e5e5e5" rx="1.395" />
				<path
					fill="#fff"
					d="M98.198 2.872c0-.543.457-1 1-1h1.925c.544 0 1 .457 1 1v2.4c0 .543-.456 1-1 1h-1.925c-.543 0-1-.457-1-1v-2.4z"
				/>
				<rect width="44.131" height="21.519" x="53.379" y="13.457" fill="currentColor" fillOpacity=".08" rx="2" />
				<path
					fill="currentColor"
					fillOpacity=".08"
					d="M19.44 15.742c0-1.086.79-2 1.73-2h23.185c.94 0 1.73.914 1.73 2v17.25c0 1.086-.79 2-1.73 2H21.17c-.94 0-1.73-.914-1.73-2v-17.25z"
				/>
				<rect width="78.394" height="21.654" x="19.936" y="39.347" fill="currentColor" fillOpacity=".08" rx="2" />
				<rect width="7.525" height="2.789" x="28.149" y="3.073" fill="#e5e5e5" rx="1.395" />
				<rect width="7.525" height="2.789" x="41.257" y="3.208" fill="#e5e5e5" rx="1.395" />
				<rect width="7.525" height="2.789" x="54.23" y="3.073" fill="#e5e5e5" rx="1.395" />
				<rect width="7.784" height="7.138" x="1.533" y=".881" fill="#fff" rx="2" />
				<path fill="#69b1ff" d="M-.064 9.031h15.446v56.812H-.064z" />
				<path
					fill="#e5e5e5"
					d="M2.387 15.38c0-.203.272-.374.595-.374h7.982c.323 0 .595.17.595.375v3.235c0 .204-.272.375-.595.375H2.982c-.323 0-.595-.171-.595-.375v-3.235zM2.387 28.433c0-.203.272-.375.595-.375h7.982c.323 0 .595.172.595.375v3.236c0 .203-.272.375-.595.375H2.982c-.323 0-.595-.172-.595-.375v-3.236zM2.176 41.275c0-.203.272-.375.596-.375h7.981c.324 0 .596.172.596.375v3.236c0 .204-.272.375-.596.375H2.772c-.324 0-.596-.171-.596-.375v-3.236zM2.176 54.328c0-.204.272-.375.596-.375h7.981c.324 0 .596.171.596.375v3.235c0 .204-.272.375-.596.375H2.772c-.324 0-.596-.17-.596-.375v-3.235z"
				/>
			</g>
		</svg>
	);
}
export function MixedNavigationIcon(props: Partial<CustomIconComponentProps>) {
	return <Icon component={MixedNavigationSvg} {...props} />;
}