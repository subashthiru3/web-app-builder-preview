export type ComponentType = "mwlButton" | "mwlGrid";

export interface CanvasComponent {
  id: string;
  type: ComponentType;
  props: Record<string, any>;
}
