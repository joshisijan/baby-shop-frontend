import { EmojiSadIcon } from '@heroicons/react/outline'
import React from 'react'
import { useHistory } from 'react-router'
import DarkTextButton from '../../Components/Button/DarkTextButton'

const PageNotFoundPage = () => {
    const history = useHistory()
    
    const gotoHome = () => {
        history.push('/')
    }

    return (
        <div className="py-10 px-4 flex flex-col justify-center items-center">   
            <EmojiSadIcon className="w-10 h-10" />         
            <h1 className="text-red-600 font-bold text-6xl">404</h1>
            <h2 className="font-semibold text-lg">Page Not Found</h2>
            <DarkTextButton className="mt-4" onClick={gotoHome}>
                Goto homepage
            </DarkTextButton>
        </div>
    )
}

export default PageNotFoundPage
