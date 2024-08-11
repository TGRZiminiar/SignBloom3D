import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const statuses = [
  { name: 'เสร็จสิ้น', bgColor: 'bg-[#c9e8e8]', textColor: 'text-[#105352]' },
  { name: 'ได้รับคำร้อง', bgColor: 'bg-[#cbdcf9]', textColor: 'text-[#103680]' },
  { name: 'กำลังแก้ไข', bgColor: 'bg-[#fff3dd]', textColor: 'text-[#aa8345]' },
  { name: 'ปฎิเสธ', bgColor: 'bg-[#f3d4d1]', textColor: 'text-[#70241d]' },
]

export default function SelectStatus() {
  const [selected, setSelected] = useState(statuses[0])

  return (
    <div className="min-w-[200px]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className={`relative w-full h-10 cursor-default rounded-lg ${selected.bgColor} py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}>
            <span className={`block truncate ${selected.textColor}`}>{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {statuses.map((status, statusIdx) => (
                <Listbox.Option
                  key={statusIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? status.bgColor : 'bg-white'
                    }`
                  }
                  value={status}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        } ${active ? status.textColor : 'text-gray-900'}`}
                      >
                        {status.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}