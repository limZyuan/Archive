// via https://github.com/ianstormtaylor/slate/blob/master/examples/tables/index.js
import React from "react";

const TablePlugin = () => ({
  renderNode(nodeProps) {
    const { attributes, node, children, editor } = nodeProps;

    if (node.type === "table") {
      const isTableBeingEdited = !!node.getDescendant(
        editor.state.value.anchorBlock.key
      );
      return (
        <table
          className={`${"slate_table"} ${
            isTableBeingEdited ? "table_active" : ""
          } ${node.data.get("className")}`}
          {...attributes}
        >
          <tbody>{children}</tbody>
        </table>
      );
    } else if (node.type === "table_row") {
      return <tr {...attributes}>{children}</tr>;
    } else if (node.type === "table_header") {
      return <th {...attributes}>{children}</th>;
    } else if (node.type === "table_cell") {
      const tag = node.data.get("header") ? "th" : "td";
      const align = node.data.get("align");
      const className = align ? `align_${align}` : null;

      return React.createElement(
        tag,
        Object.assign({ className }, attributes),
        children
      );
    }
    return null;
  }
});

export default TablePlugin;
