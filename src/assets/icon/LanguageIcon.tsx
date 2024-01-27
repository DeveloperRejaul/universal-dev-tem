import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function LanguageIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 15 15' fill='none' >
      <Path d='M0 12.7826V12.2284C0.274522 11.4612 1.16828 11.4243 1.62281 12.0467C1.77918 12.2612 1.92652 12.4819 2.13015 12.6587C3.04962 13.4607 4.42084 13.4558 5.37506 12.6441C6.23963 11.9096 6.4245 10.5464 5.7719 9.55367C5.3014 8.83798 4.61057 8.48988 3.75851 8.43836C3.26646 8.40843 2.89533 8.08261 2.83696 7.65166C2.7619 7.09749 3.13997 6.6394 3.73071 6.60319C4.44517 6.55933 5.06232 6.31636 5.54117 5.77542C6.21322 5.01726 6.35153 4.14493 5.96442 3.22943C5.58009 2.3202 4.85174 1.83774 3.85442 1.79527C2.93564 1.75628 2.22397 2.13153 1.70064 2.88412C1.3323 3.41392 0.931984 3.54899 0.463559 3.34013C0.223092 3.23291 0.0882639 3.04494 0.00138998 2.81032V2.25615C0.0868739 1.88369 0.308576 1.58781 0.564333 1.32116C1.37052 0.479463 2.31988 -0.0412905 3.53473 0.00256982C4.21582 0.0276328 4.88927 0.0011774 5.537 0.300541C7.71441 1.30794 8.64639 3.87341 7.59695 6.02535C7.51633 6.19105 7.4093 6.34212 7.34398 6.51199C7.38984 6.61921 7.48158 6.58857 7.55595 6.58857C8.61998 6.58997 9.68401 6.59205 10.748 6.58857C11.1136 6.58718 11.1477 6.55516 11.1491 6.19383C11.1532 4.86758 11.1525 3.54133 11.1491 2.21577C11.1484 1.83913 11.1122 1.8092 10.7265 1.80432C10.3686 1.80015 10.0086 1.82799 9.66316 1.69502C9.09396 1.47572 8.87713 0.814333 9.21837 0.33187C9.36015 0.131366 9.54571 0.00953177 9.79868 0.00953177C11.3138 0.00813938 12.8288 0.0053546 14.3439 0.0116204C14.7359 0.0137089 14.8791 0.172441 15 0.665347V1.1499C14.8638 1.61008 14.5038 1.75489 14.075 1.79945C13.8213 1.8259 13.5662 1.8078 13.3119 1.81685C13.1291 1.82312 13.0373 1.90875 13.0318 2.09324C13.0276 2.23179 13.0269 2.37033 13.0269 2.50887C13.0269 6.22516 13.0269 9.94075 13.0269 13.657C13.0269 13.8186 13.0332 13.9808 13.0193 14.1416C12.9831 14.5656 12.8268 14.9004 12.3625 15H11.7377C11.2825 14.8225 11.1546 14.6352 11.1532 14.1005C11.1484 12.3928 11.1518 10.6843 11.1511 8.97652C11.1511 8.62796 10.9795 8.45322 10.6361 8.45229C9.64092 8.45159 8.64569 8.4509 7.64977 8.45229C7.30089 8.45229 7.30089 8.45577 7.46351 8.75792C8.41982 10.5339 8.12723 12.6023 6.71848 13.9432C6.10133 14.5301 5.37993 14.9172 4.51536 14.9993H2.84877C1.96683 14.8371 1.2343 14.4048 0.622712 13.7622C0.353056 13.4788 0.102859 13.1767 0.00138998 12.7833L0 12.7826Z' fill={props.color || '#CA9A62'} />
    </Svg>
  );
}