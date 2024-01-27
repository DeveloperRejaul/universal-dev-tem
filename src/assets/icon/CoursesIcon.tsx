import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function CoursesIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 28 22' fill='none'>
      <Path fill={props.color} d='M25.5889 20.5843C25.7428 20.7417 25.8367 20.9569 25.8367 21.1722C25.8367 21.3875 25.7428 21.6026 25.5889 21.76C25.4265 21.9089 25.2042 22 24.9821 22C24.7598 22 24.5375 21.9089 24.3752 21.76C24.2213 21.6026 24.1273 21.3875 24.1273 21.1722C24.1273 20.9569 24.2213 20.7417 24.3752 20.5843C24.6999 20.2781 25.2727 20.2781 25.5889 20.5843ZM13.5598 0.111303C13.8328 -0.0371012 14.1665 -0.0371012 14.4394 0.111303L27.546 7.24095C28.1513 7.57017 28.1513 8.40924 27.546 8.73847L25.7155 9.73269L25.7206 9.79173V18.4102C25.7206 18.8851 25.3204 19.2702 24.8269 19.2702C24.3745 19.2702 24.0006 18.9468 23.9415 18.5269L23.9333 18.4102L23.9311 10.7039L22.2141 11.638L22.2143 17.8444C22.2143 18.1397 22.0401 18.4096 21.7651 18.5403C16.8764 20.8646 11.1229 20.8646 6.23463 18.5403C5.99397 18.4259 5.83049 18.205 5.79342 17.9538L5.78543 17.8443L5.78447 11.638L0.453959 8.73857C-0.11096 8.43118 -0.148638 7.67987 0.340979 7.31343L0.453959 7.24107L13.5598 0.111303ZM20.6 12.5158L14.4394 15.8683C14.1665 16.0167 13.8328 16.0167 13.5598 15.8683L7.39805 12.5158L7.39774 17.3512L7.79005 17.519C11.7541 19.1346 16.2456 19.1346 20.2098 17.519L20.601 17.3512L20.6 12.5158ZM13.9996 1.84741L2.709 7.98928L13.9996 14.1303L22.1414 9.70115L15.3824 7.14525C14.9613 6.9861 14.7363 6.55324 14.8406 6.14171L14.8774 6.0302C15.0428 5.62494 15.4925 5.40834 15.9201 5.5088L16.036 5.54425L24.1459 8.60989L25.2889 7.98963L13.9996 1.84741Z' />
    </Svg>
  );
}