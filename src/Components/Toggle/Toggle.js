import { Switch } from '@headlessui/react'

const Toggle = ({enabled, setEnabled}) => {

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-secondary-dark-extra' : 'bg-gray-300'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  )
}

export default Toggle