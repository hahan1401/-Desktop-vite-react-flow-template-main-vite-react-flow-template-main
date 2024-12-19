import { Handle, Position, type NodeProps } from "@xyflow/react";

import { type CustomNode as TCustomNode } from "./types";
import { DialogDemo } from "@/components/Modal/DialogDemo";

export function CustomNode({ data, id }: NodeProps<TCustomNode>) {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && (
        <div
          onClick={() => {
            data.onClick?.(id);
          }}
        >
          {data.label}
        </div>
      )}
      <DialogDemo />

      <Handle type="target" position={Position.Top} id={`-top_${id}`} />
      <Handle type="source" position={Position.Right} id={`-right_${id}`} />
      <Handle type="source" position={Position.Bottom} id={`-bottom_${id}`} />
      <Handle type="target" position={Position.Left} id={`-left_${id}`} />
    </div>
  );
}
