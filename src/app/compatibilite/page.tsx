import type { Metadata } from "next";
import { CompatibilityPicker } from "@/components/compatibility/picker";

export const metadata: Metadata = {
  title: "Compatibilité fauteuil, testez DISTANZ en 6 étapes",
  description:
    "Choisissez votre fauteuil, puis dites-nous votre poids, votre motricité et le matériau de votre châssis. Un conseiller DISTANZ vous rappelle.",
};

export default function CompatibilitePage() {
  return <CompatibilityPicker />;
}
