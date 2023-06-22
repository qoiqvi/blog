import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface SidebarItemType {
	path: string
	text: string
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
	authRequire: boolean
}

export const SidebarItemsList: SidebarItemType[] = []
