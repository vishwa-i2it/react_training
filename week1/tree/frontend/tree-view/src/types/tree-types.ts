interface TreeItemData {
  id: string;
  name: string;
  children?: TreeItemData[];
}

interface TreeDetailsProps {
  hoveredItem: TreeItemData | null;
}

interface TreeViewProps {
  data: TreeItemData[];
  onHover: (node: TreeItemData | null) => void;
}

interface TreeProps {
  setHoveredItem: (item: TreeItemData | null) => void;
}

interface TreeResponse {
  data: TreeItemData[];
  message: string;
  success: boolean;
}

export type { TreeItemData, TreeDetailsProps, TreeViewProps, TreeProps, TreeResponse };
