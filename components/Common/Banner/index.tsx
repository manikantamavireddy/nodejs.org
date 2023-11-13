import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';

import Link from '@/components/Link';

import styles from './index.module.css';

type BannerProps = {
  type: 'default' | 'error' | 'warning';
  text: string;
  url?: string;
};

const Banner: FC<BannerProps> = ({ type, text, url = '' }) => (
  <div className={`${styles.banner} ${styles[type] || styles.default}`}>
    {(url.length > 0 && <Link href={url}>{text}</Link>) || text}
    {url.length > 0 && <ArrowUpRightIcon />}
  </div>
);

export default Banner;
