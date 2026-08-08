import type { ChapterStepProps } from "../../registry/types";
import NarrativeChapter from "../../components/NarrativeChapter";
import "./CapabilityProof.css";

const beats = [
  { code: "01", title: "商品 JSON", detail: "/products/{handle}.js", meta: "PRODUCT PAGE" },
  { code: "02", title: "商品列表", detail: "/products.json + collection", meta: "STORE DISCOVERY" },
  { code: "03", title: "Headless 回退", detail: "响应头 → *.myshopify.com", meta: "REAL SHOP DOMAIN" },
  { code: "04", title: "媒体关系图", detail: "source · hash · size · product · variant", meta: "TRACEABLE MEDIA" },
  { code: "05", title: "公网图片", detail: "local file × / public HTTPS URL ✓", meta: "TIKTOK PHOTO" },
  { code: "06", title: "发布闸门", detail: "验证 · Bio Link · 授权 · 可访问性", meta: "PUBLISH_READY" },
];

export default function CapabilityProof({ step }: ChapterStepProps) {
  return <NarrativeChapter step={step} kicker="CAPABILITY PROOF" title="每一个限制，" accent="都变成发布闸门。" beats={beats} kind="ladder" rootClass="cp-scene" footer="Shopify evidence → TikTok publish_ready" />;
}
