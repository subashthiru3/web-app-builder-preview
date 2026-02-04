"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ComponentRenderer } from "@/components/ComponentRenderer/ComponentRenderer";
import { CanvasComponent } from "@/lib/types";
import { fetchJSONData } from "@/api";

export default function PreviewClient() {
  const searchParams = useSearchParams();
  const project = searchParams?.get("project");

  const [components, setComponents] = useState<CanvasComponent[]>([]);
  const [loading, setLoading] = useState(false);

  const getAppJSONData = async () => {
    setLoading(true);
    try {
      const res = await fetchJSONData("sample-project");
      if (res.data) {
        setComponents(res.data);
      } else {
        setComponents([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAppJSONData();
  }, []);

  // if (!project) return <div>No project specified</div>;
  if (loading) return <div>Loading preview...</div>;

  return (
    <div style={{ padding: 32 }}>
      {components.length === 0 ? (
        <div>No components to preview</div>
      ) : (
        components.map((c) => <ComponentRenderer key={c.id} component={c} />)
      )}
    </div>
  );
}
