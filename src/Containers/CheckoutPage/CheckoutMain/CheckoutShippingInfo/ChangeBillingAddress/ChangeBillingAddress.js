import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from 'react'
import { LocationMarkerIcon } from "@heroicons/react/outline"
import ShippingInfo from "./ShippingInfo/ShippingInfo"
import DarkTextButton from "../../../../../Components/Button/DarkTextButton"

export default function ChangeBillingAddress({shown, setShown}) {

    const closeModal = () => {
        setShown(false);
    }

    return (
        <Transition appear show={shown} as={Fragment}>
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
                        <div className="inline-block h-96 overflow-y-auto w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <div className="flex justify-center">
                                <LocationMarkerIcon className="w-7 h-7" />
                            </div>
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Select new billing address
                            </Dialog.Title>
                            <div>
                                <p className="text-xs">
                                    Select from following list or add new address and then select from the list after adding.
                                </p>
                                <div className="mt-2">
                                    <ShippingInfo />
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <DarkTextButton onClick={closeModal}>
                                        Cancel
                                    </DarkTextButton>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
