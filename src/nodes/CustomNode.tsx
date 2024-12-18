import { Handle, Position, type NodeProps } from '@xyflow/react';

import { type CustomNode as TCustomNode } from './types';
import { DialogDemo } from '@/components/Modal/DialogDemo';

export function CustomNode({
  data,
  id
}: NodeProps<TCustomNode>) {

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div onClick={() => {
        data.onClick?.(id)
      }}>{data.label}</div>}
      <DialogDemo />

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
