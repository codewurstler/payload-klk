'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <>
      <div
        className="relative -mt-[8rem] flex items-center justify-center text-white xl:mx-20"
        data-theme="dark"
      >
        <div className="container mb-8 z-10 relative">
          <div className="grid grid-cols-4 xl:grid-cols-12">
            <div className="col-span-4 xl:col-span-4">
              {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="col-span-4 xl:col-span-6 xl:col-start-8">
              <div className="bg-white/20 shadow-lg ring-1 ring-black/5 rounded-2xl backdrop-blur p-16 min-h-[600px]">
                <h1>Upcoming Event!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[80vh] select-none">
          {media && typeof media === 'object' && (
            <Media fill imgClassName="-z-10 object-cover rounded-2xl" priority resource={media} />
          )}
        </div>
      </div>
    </>
  )
}
