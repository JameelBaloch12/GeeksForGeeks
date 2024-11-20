import { memo, SVGProps } from 'react';

const WebArrowInsideSvgIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1449)'>
      <path
        d='M26.5607 13.0607C27.1464 12.4749 27.1464 11.5251 26.5607 10.9393L17.0147 1.3934C16.4289 0.807614 15.4792 0.807614 14.8934 1.3934C14.3076 1.97919 14.3076 2.92893 14.8934 3.51472L23.3787 12L14.8934 20.4853C14.3076 21.0711 14.3076 22.0208 14.8934 22.6066C15.4792 23.1924 16.4289 23.1924 17.0147 22.6066L26.5607 13.0607ZM0.5 13.5H25.5V10.5H0.500001L0.5 13.5Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1449'>
        <rect width={27} height={24} fill='white' transform='translate(0.5)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(WebArrowInsideSvgIcon3);
export { Memo as WebArrowInsideSvgIcon3 };
