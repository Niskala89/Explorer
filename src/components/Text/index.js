import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.scss';

const Text = props => {
  const { className, style, src, link, color } = props;

  let addedClasses = '';
  if (link) {
    addedClasses += styles.Link;

    return (
      <span
        className={`text ${styles[style]} ${styles[color]} ${addedClasses}`}
      >
        <a href={src} target="_blank">
          {props.children}
        </a>
      </span>
    );
  }

  return (
    <span className={`text ${styles[style]} ${styles[color]}`}>
      {props.children}
    </span>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOf([
    'H1',
    'H2',
    'H3',
    'H4',
    'CardHeading',
    'Body',
    'BodySmall',
    'FormLabel',
    'FormInvalid',
    'Alt'
  ]),
  src: PropTypes.string,
  link: PropTypes.boolean,
  color: PropTypes.string
};

Text.defaultProps = {
  size: 'body',
  src: '',
  link: false
};

export default Text;
