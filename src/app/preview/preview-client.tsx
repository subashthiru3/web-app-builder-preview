"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ComponentRenderer } from "@/components/ComponentRenderer/ComponentRenderer";
import { CanvasComponent } from "@/lib/types";
import { fetchJSONData } from "@/api";
import Loader from "@/components/Loader/Loader";

export default function PreviewClient() {
  const searchParams = useSearchParams();
  const project = searchParams?.get("project");

  const [components, setComponents] = useState<CanvasComponent[]>([]);
  const [loading, setLoading] = useState(false);

  const getAppJSONData = async () => {
    setLoading(true);
    try {
      const res = await fetchJSONData(project ?? "");
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
  }, [project]);

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "1rem" }}>
      {components.length ? (
        components.map((c) => <ComponentRenderer key={c.id} component={c} />)
      ) : (
        <div>No components to preview</div>
      )}
    </div>
  );
}
