import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IIconProps } from './type';

export default function LogoutIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 23 22' fill='none' >
      <Path d='M2.79568 21.0724H10.8295C12.38 21.0724 13.6491 19.8272 13.6491 18.2767V16.1455C13.6491 15.5828 13.1942 15.1278 12.6314 15.1278C12.0687 15.1278 11.6137 15.5828 11.6137 16.1455V18.2767C11.6137 18.7077 11.2605 19.037 10.8295 19.037H2.79568C2.36465 19.037 2.0354 18.7077 2.0354 18.2767V2.79568C2.0354 2.36465 2.36465 2.0354 2.79568 2.0354H10.8295C11.2605 2.0354 11.6137 2.36465 11.6137 2.79568V4.88496C11.6137 5.44769 12.0687 5.90266 12.6314 5.90266C13.1942 5.90266 13.6491 5.44769 13.6491 4.88496V2.79568C13.6491 1.24519 12.38 0 10.8295 0H2.79568C1.24519 0 0 1.24519 0 2.79568V18.2767C0 19.8272 1.24519 21.0724 2.79568 21.0724Z' fill={props.color || '#C89963'} />
      <Path d='M17.3787 15.8341C17.5703 16.0017 17.8098 16.0855 18.0432 16.0855C18.3306 16.0855 18.612 15.9658 18.8095 15.7323L22.6648 11.2904C22.8683 11.1048 23 10.8354 23 10.5361C23 10.2128 22.8504 9.92545 22.6109 9.73987L18.7556 5.88459C18.3605 5.48948 17.714 5.48948 17.3189 5.88459C16.9238 6.27969 16.9238 6.92623 17.3189 7.32134L19.5159 9.51837H6.36365C5.80092 9.51837 5.34595 9.97334 5.34595 10.5361C5.34595 11.0988 5.80092 11.5538 6.36365 11.5538H19.7434L17.277 14.3973C16.9058 14.8224 16.9537 15.4689 17.3787 15.8341Z' fill={props.color || '#C89963'} />
    </Svg>
  );
}