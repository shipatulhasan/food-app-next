'use client'
import { TReview } from '@/types/review'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
interface TestimonialProps{
  testimonials:TReview[]
}
export const TestimonialsCarousel=  ({testimonials}:TestimonialProps) => {
  

  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 bg-gray-50">
      <main className='container mx-auto'>
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Client Testimonials
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial:TReview) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {/* Quote icon */}
              <div className="text-primary-300 text-4xl mb-4">
                <Image
                  src="/asset/quote.png"
                  alt="Quote"
                  width={40}
                  height={40}
                />
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {testimonial.review}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center font-semibold text-gray-700">
                    {testimonial?.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial?.user}
                    </p>
                    <p className="text-xs text-gray-500">Customer</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 text-warning text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-2xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}