import { memo, SVGProps } from 'react';

const P22SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 144 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M71.7009 44.2964C80.8171 44.2964 88.2074 36.9063 88.2074 27.7901C88.2074 18.6739 80.8171 11.2838 71.7009 11.2838C62.5847 11.2838 55.1946 18.6739 55.1946 27.7901C55.1946 36.9063 62.5847 44.2964 71.7009 44.2964Z'
      fill='white'
    />
    <path
      d='M71.7009 11.2838C62.5851 11.2838 55.1946 18.6743 55.1946 27.7901C55.1946 34.7867 59.5419 40.7642 65.6826 43.1689C65.5331 41.8647 65.4109 39.854 65.7369 38.4276C66.0357 37.137 67.666 30.2219 67.666 30.2219C67.666 30.2219 67.177 29.2302 67.177 27.7766C67.177 25.4806 68.5083 23.7688 70.1657 23.7688C71.5786 23.7688 72.2579 24.8285 72.2579 26.0919C72.2579 27.5049 71.3613 29.6241 70.8858 31.5941C70.4917 33.2379 71.7145 34.5829 73.3312 34.5829C76.2656 34.5829 78.5205 31.4854 78.5205 27.0294C78.5205 23.076 75.6814 20.3181 71.6194 20.3181C66.9188 20.3181 64.1609 23.8367 64.1609 27.4777C64.1609 28.8906 64.7044 30.4121 65.3836 31.2408C65.5195 31.4039 65.5331 31.5533 65.4923 31.7163C65.3701 32.2326 65.0847 33.3602 65.0304 33.5911C64.9625 33.89 64.7859 33.9579 64.4734 33.8085C62.4084 32.8439 61.1178 29.8415 61.1178 27.4097C61.1178 22.2065 64.8946 17.4244 72.0269 17.4244C77.7467 17.4244 82.2026 21.5 82.2026 26.9615C82.2026 32.6537 78.6161 37.232 73.6436 37.232C71.9726 37.232 70.3967 36.3625 69.8669 35.3301C69.8669 35.3301 69.0381 38.4819 68.8344 39.2562C68.4676 40.6963 67.4622 42.4896 66.7829 43.59C68.3317 44.0655 69.962 44.3236 71.6738 44.3236C80.7897 44.3236 88.1801 36.9332 88.1801 27.8173C88.207 18.6743 80.8167 11.2838 71.7009 11.2838Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(P22SvgIcon);
export { Memo as P22SvgIcon };