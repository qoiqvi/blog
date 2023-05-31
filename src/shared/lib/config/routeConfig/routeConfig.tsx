import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: AppRoutes.ABOUT
  },
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: AppRoutes.MAIN
  }
}
