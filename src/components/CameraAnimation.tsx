"use client";

export default function CameraAnimation() {
  return (
    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
      <div className="absolute w-16 h-16 rounded-full border-4 border-[#c9a227]/40" />
      <div className="absolute w-12 h-12 rounded-full border-2 border-[#c9a227]" />
      <div className="absolute w-3 h-3 rounded-full bg-[#c9a227] animate-pulse" />
      <div
        className="absolute w-1 h-8 bg-[#c9a227]/60 rounded-full animate-camera-scan"
        style={{ top: "10%" }}
      />
    </div>
  );
}
