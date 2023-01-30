import React from 'react'
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const TwoColumnCard = () => {
  const { t } = useTranslation()
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true }}
      className='grid grid-cols-1 gap-10 items-center md:grid-cols-2'>
      <motion.div
        variants={{
          offscreen: {
            y: 150,
          },
          onscreen: {
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className='cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500'>
        <h6 className='text-2xl font-bold text-primary mb-4 dark:text-white'>
          <a
            href='https://www.hububble.co/'
            target='_blank'
            className='hover:underline'>
            VSL Software
          </a>
          <span className='mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300'>
            <CalendarIcon className='h-4 mr-2 text-neutral-600 dark:text-neutral-300' />
            8/2021 - 11/2022
          </span>
          <span className='mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300'>
            <BriefcaseIcon className='h-4 mr-2 text-neutral-600 dark:text-neutral-300' />
            JUNIOR FRONT-END DEVELOPER
          </span>
        </h6>
        <div className='relative mb-4'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center'>
            <span className='uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500'>
              {t('duty')}
            </span>
          </div>
        </div>

        <ul className='text-base text-primary-400 list-inside list-disc dark:text-neutral-200'>
          <li>{t('des1')}</li>
          <li>{t('des2')}</li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default TwoColumnCard
