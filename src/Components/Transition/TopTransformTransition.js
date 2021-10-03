import { Transition } from "@headlessui/react"

const TopTransformTransition = ({ show, children, ...rest }) => {
    return (
        <Transition
            {...rest}
            show={show}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            {children}
        </Transition>
    )
}

export default TopTransformTransition
