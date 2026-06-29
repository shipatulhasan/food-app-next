'use client'

import React from 'react'
import Image from 'next/image'


import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-2 md:py-4 overflow-hidden">
      <div className='container mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[60vh]">
          {/* section 1 - Main Banner */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-62.5 md:h-70 lg:h-full">
            <div
              className="w-full h-full bg-cover bg-center scale-110"
              style={{
                backgroundImage: 'url(/asset/banner1.jpg)',
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent rounded-2xl" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-12 text-white rounded-2xl">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4 leading-tight">
                  Fresh & Healthy
                  <br />
                  Organic Food
                </h1>
                <div className="border-l-2 pl-3 border-success mb-6">
                  <div className="flex flex-row items-center gap-2">
                    <span className="font-medium text-xl">Sale up to</span>
                    <span className="bg-warning text-white px-2 py-0 text-base font-semibold rounded-[5px]">
                      30% OFF
                    </span>
                  </div>
                  <p className="text-sm opacity-90 font-light">
                    Free shipping on all your order.
                  </p>
                </div>

                <Button
                  size="lg"
                  className="rounded-full bg-white text-primary-600 hover:bg-gray-100 font-medium px-6 flex gap-2"
                >
                  <span>Shop now</span> <ArrowRight />
                </Button>
              </div>
            </div>
          </div>

          {/* section 2 - Side Cards */}
          <div className="flex flex-col gap-6 lg:h-full">
            {/* Card 1 - Summer Sale */}
            <div className="relative h-[200px] md:h-[220px] lg:h-full rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center rounded-2xl scale-x-[-1]"
                style={{
                  backgroundImage: 'url(/asset/banner2.jpg)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start pr-6 text-black rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-90 text-gray-900">
                  Summer Sale
                </p>

                <h2 className="text-[32px] font-bold mb-1">75% OFF</h2>

                <p className="text-xs md:text-sm text-gray-600 mb-2">
                  Only Fruit & Vegetable
                </p>

                <Link
                  href="/shop"
                  className="bg-transparent text-primary-600 hover:text-primary-700 text-xs font-semibold rounded-full cursor-pointer"
                >
                  Shop Now →
                </Link>
              </div>
            </div>

            {/* Card 2 - Best Deal */}
            <div className="relative h-[200px] md:h-[220px] lg:h-full rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: 'url(/asset/banner3.png)',
                }}
              />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-pattern rounded-2xl" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 rounded-2xl">
                <p className="text-xs uppercase tracking-wider mb-2 opacity-90">
                  Best Deal
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                  Special Products
                  <br />
                  Deal of the Month
                </h2>

                <Button
                  size="sm"
                  className="bg-transparent text-primary-100 hover:text-white text-xs font-semibold rounded-full px-4 border border-white hover:bg-white/10"
                >
                  Shop Now →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-11">
        <div className="container mx-auto shadow-sm p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SmallCard
              icon={'/images/icons/truck.png'}
              title="Free Shipping"
              description="Free shipping on all your order"
            />

            <SmallCard
              icon={'/images/icons/headphone.png'}
              title="Customer Support 24/7"
              description=" Instant access to support"
            />

            <SmallCard
              icon="/images/icons/bag.png"
              title="100% Secure Payment"
              description="We ensure your money is safe"
            />

            <SmallCard
              icon="/images/icons/package.png"
              title="Money-Back Guarantee"
              description="30 days money back guarantee"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }

const SmallCard = ({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) => {
  const isImagePath = icon.startsWith('/') || icon.startsWith('http')

  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl">
        {isImagePath ? (
          <Image alt={title} src={icon} width={40} height={40} />
        ) : (
          <span>{icon}</span>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
