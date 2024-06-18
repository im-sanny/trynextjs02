import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'

const MilPage = () => {
    return (
        <div className='p-12 text-center'>
            <h2 className='text-3xl font-semibold text-teal-600'>Choose your meals</h2>
            <p className={styles.text_large}>Choose meals of your choice by searching.....</p>
            <Meals></Meals>
        </div>
    );
};

export default MilPage;