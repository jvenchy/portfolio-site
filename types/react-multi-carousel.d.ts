declare module 'react-multi-carousel' {
  import React, { ReactNode } from 'react';

  interface BreakpointConfig {
    breakpoint: { max: number; min: number };
    items: number;
    slidesToSlide?: number;
  }

  interface ResponsiveType {
    [key: string]: BreakpointConfig;
  }

  interface CarouselProps {
    children?: ReactNode; // Include children here
    additionalTransfrom?: number;
    arrows?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    centerMode?: boolean;
    className?: string;
    containerClass?: string;
    customLeftArrow?: React.ReactNode;
    customRightArrow?: React.ReactNode;
    customDot?: React.ReactNode;
    dotListClass?: string;
    draggable?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    itemClass?: string;
    keyBoardControl?: boolean;
    minimumTouchDrag?: number;
    pauseOnHover?: boolean;
    renderArrowsWhenDisabled?: boolean;
    renderButtonGroupOutside?: boolean;
    responsive: ResponsiveType;
    rewind?: boolean;
    rewindWithAnimation?: boolean;
    rtl?: boolean;
    shouldResetAutoplay?: boolean;
    showDots?: boolean;
    sliderClass?: string;
    slidesToSlide?: number;
    swipeable?: boolean;
    transitionDuration?: number;
    customTransition?: string;
  }

  const Carousel: React.ComponentType<CarouselProps>;
  export default Carousel;
}
