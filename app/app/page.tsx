"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    router.replace("com.turtil.student://" + params);
  }, []);

  return (
    <main>
      <h1>Turtil</h1>
    </main>
  );
}
