import MainIcon from "shared/assets/icons/Vector.svg"
import AboutIcon from "shared/assets/icons/clarity_list-outline-badged.svg"
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg"

import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface SidebarItemType {
	path: string
	text: string
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: "Главная",
		Icon: MainIcon,
	},
	{
		path: RoutePath.about,
		text: "O сайте",
		Icon: AboutIcon,
	},
	{
		path: RoutePath.profile,
		text: "Профиль",
		Icon: ProfileIcon,
	},
]
