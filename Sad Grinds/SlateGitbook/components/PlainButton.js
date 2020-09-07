import React from "react";
import PropTypes from "prop-types";
import ToolbarButton from "./ToolbarButton";

const plainStrategy = (change, text) => change.insertText(text);

const PlainButton = ({ text, title, value, onChange }) => (
  <ToolbarButton
    text={text}
    title={title}
    onMouseDown={e => {
      return onChange(plainStrategy(value.change(), text));
    }}
  />
);

PlainButton.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PlainButton;
