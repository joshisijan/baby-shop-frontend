import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import NormalLink from '../../../../Components/NormalLink/NormalLink'

const Breadcrumb = ({ breadcrumbs }) => {
    return (
        <div className={`${breadcrumbs.length === 1 ? 'hidden' : ''} md:mt-2 text-sm pb-4 flex flex-wrap`}>
            {
                breadcrumbs.map((breadcrumb, i, { length }) => {
                    const path = breadcrumb.match.path
                    const name = breadcrumb.breadcrumb
                    if (i + 1 !== length) {
                        return (
                            <div key={path} className="flex items-center gap-2">
                                <Link to={path}>
                                    <NormalLink className="text-blue-600">
                                        {name}
                                    </NormalLink>
                                </Link>
                                <ChevronRightIcon className="mt-0.5 w-4 h-4" />
                            </div>
                        )
                    }
                    return (
                        <Link key={path} to={path}>
                            <NormalLink className="text-blue-600 px-2">
                                {name}
                            </NormalLink>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Breadcrumb
