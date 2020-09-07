import React from "react";
import PropTypes from "prop-types";
import ToolbarButton from "./ToolbarButton";

const blockStrategy = (value, type, data) =>
  value
    .change()
    .setBlock({ type, data })
    .unwrapBlock("paragraph")
    .unwrapBlock("heading-one")
    .unwrapBlock("heading-two");

const BlockButton = ({
  block,
  data,
  title,
  icon,
  value,
  onChange,
  insideTable
}) => (
  <ToolbarButton
    title={title}
    icon={icon}
    text={title}
    onMouseDown={e => {
      if (insideTable) {
        return null;
      }
      return onChange(blockStrategy(value, block, data));
    }}
  />
);

BlockButton.propTypes = {
  block: PropTypes.string.isRequired,
  data: PropTypes.object,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  insideTable: PropTypes.bool.isRequired
};

export default BlockButton;
