import { useForm } from 'react-hook-form'
import { nameRegExp, phoneRegExp } from '../../../../constants/regExp'
import SecondaryTextButton from '../../../../Components/Button/SecondaryTextButton'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAddress } from '../../../../features/userAddress/userAddressAction'


const AddAddress = () => {
    const dispatch = useDispatch();
    const userAddressState = useSelector(state => state.userAddress);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (formData) => {
        await dispatch(addUserAddress(formData));
        if (userAddressState.error === false) {
            reset();
        }
    }

    return (
        <div className="p-2">
            <h1 className="font-bold">Add new address</h1>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* first name */}
                <div>
                    <label className="text-sm font-medium" htmlFor="first_name">First name:</label><br />
                    <input
                        type="text"
                        id="first_name"
                        className={`w-full md:w-96 ${errors.first_name && 'border-red-600 focus:border-red-600'}`}
                        {...register("first_name", {
                            required: "Required",
                            pattern: {
                                value: nameRegExp,
                                message: "Invalid first name",
                            },
                        })}
                    />
                    {errors.first_name && <p className="text-sm text-red-600">{errors.first_name.message}</p>}
                </div>

                {/* last name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="last_name">Last name:</label>
                    <input
                        type="text"
                        id="last_name"
                        className={`w-full md:w-96 ${errors.last_name && 'border-red-600 focus:border-red-600'}`}
                        {...register("last_name", {
                            required: "Required",
                            pattern: {
                                value: nameRegExp,
                                message: "Invalid last name",
                            },
                        })}
                    />
                    {errors.last_name && <p className="text-sm text-red-600">{errors.last_name.message}</p>}
                </div>

                {/* phone number */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="phone_number">Phone number:</label>
                    <input
                        type="number"
                        id="phone_number"
                        className={`w-full md:w-96 ${errors.phone && 'border-red-600 focus:border-red-600'}`}
                        {...register("phone_number", {
                            required: "Required",
                            pattern: {
                                value: phoneRegExp,
                                message: "Invalid phone number",
                            },
                        })}
                    />
                    {errors.phone_number && <p className="text-sm text-red-600">{errors.phone_number.message}</p>}
                </div>

                {/* Province */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="province">Province:</label>
                    <input
                        type="text"
                        id="province"
                        className={`w-full md:w-96 ${errors.province && 'border-red-600 focus:border-red-600'}`}
                        {...register("province", {
                            required: "Required",
                        })}
                    />
                    {errors.province && <p className="text-sm text-red-600">{errors.province.message}</p>}
                </div>

                {/* City */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        className={`w-full md:w-96 ${errors.city && 'border-red-600 focus:border-red-600'}`}
                        {...register("city", {
                            required: "Required",
                        })}
                    />
                    {errors.city && <p className="text-sm text-red-600">{errors.city.message}</p>}
                </div>

                {/* Region */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="region">Region:</label>
                    <input
                        type="text"
                        id="region"
                        className={`w-full md:w-96 ${errors.region && 'border-red-600 focus:border-red-600'}`}
                        {...register("region", {
                            required: "Required",
                        })}
                    />
                    {errors.region && <p className="text-sm text-red-600">{errors.region.message}</p>}
                </div>
                <div className="space-x-2">
                    <input
                        type="checkbox"
                        id="billing"
                        {...register("is_default_billing")}
                    />
                    <label className="text-sm font-medium space-x-2" htmlFor="billing">
                        <span>Default billing</span>
                        <span className="text-xs font-normal">Is this address your default billing address?</span>
                    </label>

                </div>
                <div className="space-x-2">
                    <input
                        type="checkbox"
                        id="shipping"
                        {...register("is_default_shipping")}
                    />
                    <label className="text-sm font-medium space-x-2" htmlFor="shipping">
                        <span>Default shipping</span>
                        <span className="text-xs font-normal">Is this address your default shipping address?</span>
                    </label>
                </div>
                <SecondaryTextButton 
                    isLoading={userAddressState.isLoading}
                    loadingText="Adding new address"
                >
                    Add address
                </SecondaryTextButton>
            </form>
        </div>
    )
}

export default AddAddress
