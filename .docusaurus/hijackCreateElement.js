
  import { createElement as _createElement } from 'react';
  import { convertUnit } from 'style-unit';

  function isObject(obj) {
    return typeof obj === 'object';
  }

  // From @ice/jsx-runtime
  function hijackElementProps(props) {
    if (props && 'style' in props) {
      const { style } = props;
      if (isObject(style)) {
        const result = Object.assign({}, props);
        const convertedStyle = {};
        for (const prop in style) {
          convertedStyle[prop] = convertUnit(style[prop]);
        }
        result['style'] = convertedStyle;
        return result;
      }
    }
    return props;
  }

  export default function createElement(component, props, ...children) {
    return _createElement(component, hijackElementProps(props), ...children);
  }
  