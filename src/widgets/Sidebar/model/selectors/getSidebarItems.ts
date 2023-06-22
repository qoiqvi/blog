import { createSelector } from "@reduxjs/toolkit"
import { getUserAuthData } from "entities/User"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import MainIcon from "shared/assets/icons/Vector.svg"
import AboutIcon from "shared/assets/icons/clarity_list-outline-badged.svg"
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg"
import PostIcon from "shared/assets/icons/PostIcon.svg"

export interface SidebarItemType {
	path: string
	text: string
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
	authRequire: boolean
}

export const getSidebarItems = createSelector(getUserAuthData, (user): SidebarItemType[] => [
	{
		path: RoutePath.main,
		text: "Главная",
		Icon: MainIcon,
		authRequire: false,
	},
	{
		path: RoutePath.about,
		text: "O сайте",
		Icon: AboutIcon,
		authRequire: false,
	},
	{
		path: `${RoutePath.profile}${user?.id}`,
		text: "Профиль",
		Icon: ProfileIcon,
		authRequire: true,
	},
	{
		path: RoutePath.articles,
		text: "Статьи",
		Icon: PostIcon,
		authRequire: true,
	},
])
