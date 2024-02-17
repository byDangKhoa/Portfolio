import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import images from '../../constants/image';
const logos = [
  {
    image: images.htmlLogo,
    title: 'HTML5'
  },
  {
    image: images.cssLogo,
    title: 'CSS3'
  },
  {
    image: images.javascriptLogo,
    title: 'JavaScript'
  },
  {
    image: images.gitLogo,
    title: 'Git'
  },
  {
    image: images.typescriptLogo,
    title: 'Typescript'
  },
  {
    image: images.reactLogo,
    title: 'ReactJS'
  },
  {
    image: images.nextLogo,
    title: 'NextJS'
  },
  {
    image: images.tailwindLogo,
    title: 'Tailwind'
  },
  {
    image: images.antdLogo,
    title: 'Ant Design'
  },
  {
    image: images.firebaseLogo,
    title: 'Firebase'
  },
  {
    image: images.i18nLogo,
    title: 'i18next'
  },
  {
    image: images.reduxLogo,
    title: 'Redux'
  }
];

const TabSection = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'linear', duration: 0.5 }}>
          <TabList className=" flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full  md:w-max md:flex-row">
            <Tab className="bg-primary-500 text-white w-40 text-center  cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400  dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              {t('knowme')}
            </Tab>
            <Tab className="bg-primary-500 text-white w-40 text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400  dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
              {t('skills')}
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="w-full flex items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'linear', duration: 0.5 }}
            className=" p-5 text-primary  dark:text-white">
            <h2 className="text-2xl font-semibold mb-2">Frontend Developer</h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">{t('skillDescription')}</p>
            <br />
          </motion.div>

          <motion.div
            style={{ minWidth: '50%' }}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'linear', duration: 0.5 }}
            className="relative">
            {!isLoaded && <div className=" absolute top-0 rounded-lg z-50 bg-primary-400 animate-pulse w-full " />}
            <img
              src={images.khoaImageHor}
              className="z-10 object-contain  rounded-lg shadow-lg"
              alt="Image Khoa"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white  mx-auto">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'linear', duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400">
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">{logo.title}</h6>
                </div>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
