import React, {Suspense} from 'react'
import {Spinner} from '../common/Spinner/Spinner'

export function withSuspense<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
            return <Suspense fallback={<Spinner/>}>
                <WrappedComponent {...props}/>
            </Suspense>
    }
}