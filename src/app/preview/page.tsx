import { Suspense } from "react";
import PreviewClient from "./preview-client";
import Loader from "@/components/Loader/Loader";

export default function PreviewPage() {
  return (
    <Suspense fallback={<Loader />}>
      <PreviewClient />
    </Suspense>
  );
}
