import { useForm } from 'react-hook-form'
import {nameRegExp} from '../../../../constants/regExp'
import SecondaryTextButton from '../../../../Components/Button/SecondaryTextButton'

const AddAddress = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (formData) => {
        alert(formData);
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
                <SecondaryTextButton>Add address</SecondaryTextButton>
            </form>
        </div>
    )
}

export default AddAddress
