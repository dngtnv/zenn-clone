import React, { Fragment, useState } from 'react'
import { Popover, Tab, Transition } from '@headlessui/react'
import SvgNotifBell from '../Icons/notifbell-icon'

interface Props {
  children: React.ReactNode
  className: string
}

const NotifMenu: React.FC<Props> = ({ children, className }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Popover className='relative'>
      <Popover.Button className={className}>{children}</Popover.Button>
      <Popover.Overlay className='fixed inset-0 bg-transparent' />
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Popover.Panel className='absolute w-[300px] right-0 transform translate-x-5 z-[51] mt-[10px] bg-white rounded-[7px] overflow-hidden shadow-[0_3px_12px_-1px_rgba(4,37,63,25%)] leading-[1.4] text-[13.5px]'>
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className='flex border-b-[1px] border-b-gray-bd-lighter'>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected
                        ? 'text-primary !border-b-2 !border-b-primary'
                        : 'text-gray-primary !border-b-2 !border-b-transparent'
                      } flex-1 text-[0.9rem] p-[0.7rem] font-semibold`}
                  >
                    All
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected
                        ? 'text-primary border-b-2 border-b-primary'
                        : 'text-gray-primary border-b-2 border-b-transparent'
                      } flex-1 text-[0.9rem] p-[0.7rem] font-semibold`}
                  >
                    Featured
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className='text-center py-10'>
              <Tab.Panel>
                <p className='text-gray-primary mb-4'>No notifications yet</p>
                <SvgNotifBell className='inline-flex text-[#e0efff]' />
              </Tab.Panel>
              <Tab.Panel>
                <p className='text-gray-primary mb-4'>No notifications yet</p>
                <SvgNotifBell className='inline-flex text-[#e0efff]' />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default NotifMenu
