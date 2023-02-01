import React from 'react';
import images from '../../constants/image';
import { motion } from 'framer-motion';
import { t } from 'i18next';

const socials = [
  {
    logo: images.linkedinIcon,
    alt: 'Linkedin Icon',
    link: 'https://www.linkedin.com/in/%C4%91%C4%83ng-khoa-tr%E1%BA%A7n-l%C3%AA-840b50205/'
  },
  {
    logo: images.githubIcon,
    alt: 'Github Icon',
    link: 'https://github.com/byDangKhoa'
  }
];

const HeroSection = () => {
  const myName = 'Đăng Khoa';
  return (
    <section id="home" className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen">
            <div className="w-full text-left text-primary dark:text-white">{t('iam').toUpperCase()}</div>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'linear', duration: 0.5 }}
              className="hero__heading">
              {myName}
            </motion.h1>
            <div className="w-full text-right mt-4 text-primary dark:text-white">{t('frontend').toUpperCase()}</div>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  },
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                key={index}
                className="bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                <a href={social.link} target="_blank">
                  <img className="h-14 w-14 p-4 transition-all dark:invert" src={social.logo} alt={social.alt} />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
