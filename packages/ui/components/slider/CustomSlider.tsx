import { Slider } from 'antd';
import { SliderSingleProps } from 'antd/es/slider';
import './CustomSlider.scss';

interface CustomSliderProps extends SliderSingleProps {
}

export const CustomSlider = (props: CustomSliderProps) => {
    const { value, min, max, marks, step, dots, onChange, ...rest } = props;
    return (
        <Slider
            className='custom-slider'
            value={value}
            min={min}
            max={max}
            marks={marks}
            step={step}
            onChange={onChange}
            dots={dots}
            {...rest}
        />
    );
};
