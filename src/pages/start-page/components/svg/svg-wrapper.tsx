import React from 'react';

export interface IconProps {
    src: string,
    name: string,
    alt?: string,
    className?: string,
    fillColor?: string,
    strokeColor?: string,
    widthSize?: string,
    heightSize?: string,
};

//TODO SVGProps
function Icon(props: IconProps) {
    return (
        <svg className={props.className}
             fill={props.fillColor}
             stroke={props.strokeColor}
             width={props.widthSize} height={props.heightSize}>
            <use xlinkHref={`${props.src}#${props.name}-icon`} />
        </svg>
    );
};

export default Icon;