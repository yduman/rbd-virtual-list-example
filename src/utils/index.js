let uniqueId = 0;

function getItems(count) {
  return Array.from({ length: count }, (val, key) => {
    const id = uniqueId++;
    return {
      id: `id:${id}`,
      text: `item ${id}`
    };
  });
}

const initial = {
  columns: {
    "column-0": {
      id: "column-0",
      title: "First column",
      items: getItems(1000)
    },
    "column-1": {
      id: "column-1",
      title: "Second column",
      items: getItems(1000)
    }
  },
  columnOrder: ["column-0", "column-1"]
};

export function getInitialData() {
  return initial;
}

export function reorderList(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export function getStyle({ draggableStyle, virtualStyle, isDragging }) {
  const grid = 8;

  const combined = {
    ...virtualStyle,
    ...draggableStyle
  };

  const result = {
    ...combined,
    height: isDragging ? combined.height : combined.height - grid,
    left: isDragging ? combined.left : combined.left + grid,
    width: isDragging
      ? draggableStyle.width
      : `calc(${combined.width} - ${grid * 2}px)`,
    marginBottom: grid
  };

  return result;
}
