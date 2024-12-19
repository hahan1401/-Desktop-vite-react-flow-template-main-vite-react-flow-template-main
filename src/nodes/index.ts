import type { NodeTypes } from '@xyflow/react';

import { CustomNode } from './CustomNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  {
    id: 'a', type: 'custom-node', position: { x: -300, y: 0 }, data: {
      label: 'a', onClick: (id) => {
        console.log(`Node-${id} is clicked!!`)
      }
    }
  },
  {
    id: 'b',
    type: 'custom-node',
    position: { x: -100, y: 0 },
    data: { label: 'b' },
  },
  {
    id: 'c',
    type: 'custom-node', position: { x: 100, y: 0 }, data: { label: 'c' }
  },
  {
    id: 'd',
    type: 'custom-node',
    position: { x: 300, y: 0 },
    data: { label: 'd' },
  },
];

export const nodeTypes = {
  'custom-node': CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
