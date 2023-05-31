import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/lib/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) =>
                    <Route path={path} key={path} element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )} />
                )}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
