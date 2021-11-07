import { Transition } from "@headlessui/react"

const FadeTransition = ({show, children, ...rest}) => {
    return (
        <Transition
            {...rest}
            show={show}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            { children }
        </Transition>
    )
}

export default FadeTransition
