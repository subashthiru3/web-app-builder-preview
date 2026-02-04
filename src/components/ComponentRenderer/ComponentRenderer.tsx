"use client";

import * as React from "react";
import { CanvasComponent } from "@/lib/types";
import { MWLButton, MWLGrid } from "react-web-white-label";

interface ComponentRendererProps {
  component: CanvasComponent;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  component,
}) => {
  // Debug log to verify props are being passed
  switch (component.type) {
    case "mwlButton": {
      const buttonProps = component.props as any;
      return <MWLButton {...buttonProps} />;
    }
    case "mwlGrid": {
      const gridProps = component.props as any;
      return <MWLGrid {...gridProps} />;
    }

    default:
      return null;
  }
};
