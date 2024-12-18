import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'aaaa' } },
  {
    id: 'b',
    position: { x: -100, y: 100 },
    data: { label: 'b' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'c' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'd' },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
