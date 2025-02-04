import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, Position } from "reactflow";

import '@reactflow/node-resizer/dist/style.css';
import { useCallback } from "react";

export function Square({ selected, getInputData }: any) {

  const onCapture = useCallback((evt:any) => {
    const text = evt.target.value;
  }, []);

  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]" >
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" className="nodrag" />
      </div>
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 bg-blue-400/80"
      />
      <div>
      </div>
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 bg-blue-400/80"
      />
    </div>
  )
}