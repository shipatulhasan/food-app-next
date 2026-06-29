'use client'
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  MapPin
} from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import AppSelect from '../shared/app-select'

const TopBar = () => {
  const languages = [
    {
      value: 'en',
      label: 'Eng'
    },
    {
      value: 'bn',
      label: 'Bangla'
    }
  ]
  const currencies = [
    {
      value: 'usd',
      label: 'USD'
    },
    {
      value: 'eur',
      label: 'EUR'
    },
    {
      value: 'bdt',
      label: 'BDT'
    }
  ]
  const [language, setLanguage] = useState('en')
  const [currency, setCurrency] = useState('usd')

  return (
    <div className='border-b border-gray-200 bg-primary-500 py-2 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-1 text-xs'>
            <MapPin className='w-4' /> Store Location: House 15, Road 7,
            Dhanmondi, Dhaka 1205
          </p>
          <div className='flex gap-6 text-xs'>
            <AppSelect
              placeholder='Languages'
              value={language}
              onChange={setLanguage}
              options={languages}
            />

            <AppSelect
              placeholder='Currencies'
              value={currency}
              onChange={setCurrency}
              options={currencies}
            />
            {true ? (
              // <DropdownMenu>
              //   <DropdownMenuTrigger asChild>
              //     <button className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/10 transition-colors text-xs cursor-pointer">
              //       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              //         <UserIcon size={14} className="text-primary-500" />
              //       </div>
              //       <span className="hidden sm:inline truncate max-w-[100px]">
              //         {user.name || user.email}
              //       </span>
              //       <ChevronDown size={14} />
              //     </button>
              //   </DropdownMenuTrigger>
              //   <DropdownMenuContent align="end" className="w-56 z-50">
              //     <div className="px-4 py-3 border-b border-gray-200">
              //       <p className="text-sm font-semibold text-gray-900">
              //         {user.name}
              //       </p>
              //       <p className="text-xs text-gray-500">{user.email}</p>
              //     </div>
              //     <Link href="/orders">
              //       <DropdownMenuItem className="cursor-pointer gap-2">
              //         <Package size={16} className="text-primary-500" />
              //         <span>Order History</span>
              //       </DropdownMenuItem>
              //     </Link>
              //     <DropdownMenuItem
              //       onClick={handleLogout}
              //       className="cursor-pointer gap-2 text-red-600 focus:bg-red-50 focus:text-red-600"
              //     >
              //       <LogOut size={16} />
              //       <span>Logout</span>
              //     </DropdownMenuItem>
              //   </DropdownMenuContent>
              // </DropdownMenu>
              <DropdownMenuAvatar />
            ) : (
              <>
                <Link href='/sign-in' className='hover:underline text-xs'>
                  Sign In
                </Link>
                <span className='text-white/60 text-xs'>/</span>
                <Link href='/sign-up' className='hover:underline text-xs'>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopBar

function DropdownMenuAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant='ghost' size='icon' className='rounded-full'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='shadcn' />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </Button>
        }
      />
      <DropdownMenuContent align='end'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
