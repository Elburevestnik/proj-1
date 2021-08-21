import React from 'react';

export type SvgWrapperProps = {
    src: string,
    className?: string
};

function SvgWrapper(props: SvgWrapperProps) {
    return (
        <img src={props.src}/>
    );
}

export default SvgWrapper;