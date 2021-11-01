import { Dialog, Transition } from "@headlessui/react"
import DarkTextButton from '../Button/DarkTextButton'
import DarkOutlineTextButton from '../Button/DarkOutlineTextButton'
import { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { hideDialog } from "../../features/alertDialog/alertDialogSlice"
import { BellIcon } from "@heroicons/react/outline"

export default function AlertDialog() {

    const dispatch = useDispatch()

    const alertDialogState = useSelector(state => state.alertDialog)


    const closeModal = () => {
        dispatch(hideDialog())
    }

    return (
        <Transition appear show={alertDialogState.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-20 overflow-y-auto"
                onClose={closeModal}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {alertDialogState.header}
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {alertDialogState.description}
                                </p>
                            </div>

                            <div className="mt-4 flex gap-4 flex-wrap justify-end">
                                <DarkTextButton className="px-4">
                                    Yes
                                </DarkTextButton>
                                <DarkOutlineTextButton onClick={closeModal} className="px-4">
                                    No
                                </DarkOutlineTextButton>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
