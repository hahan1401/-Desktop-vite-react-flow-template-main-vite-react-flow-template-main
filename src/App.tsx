import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  MarkerType,
  Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { edgeTypes, initialEdges } from "./edges";
import { Button } from "./components/ui/button";

const edgeOptions = {
  type: "customEdge",
  markerEnd: { type: MarkerType.ArrowClosed } satisfies Edge["markerEnd"],
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );
  console.log("====edges=====", edges);
  console.log("----nodes----------", nodes);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={(e) => {
        onNodesChange(e);
      }}
      edges={edges}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={edgeOptions}
      onEdgesChange={(e) => {
        onEdgesChange(e);
      }}
      onConnect={(e) => {
        onConnect(e);
      }}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
      <div className="absolute top-3 left-3 z-50">
        <Button
          onClick={() => {
            setNodes((prev) => [
              ...prev,
              {
                id: Math.random().toString(),
                type: "custom-node",
                position: { x: -100, y: -200 },
                data: { label: `node-${(prev.length + 1).toString()}` },
              },
            ]);
          }}
        >
          Create node
        </Button>
      </div>
    </ReactFlow>
  );
}
