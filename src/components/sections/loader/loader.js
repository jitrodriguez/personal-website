import React from 'react';
import './loader.scss';
import Logo from '../../common/icons/logo/logo';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0.001 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.001 }}
      transition={{ duration: 0.5 }}
      id='loader'>
      <Logo />
    </motion.div>
  );
}
