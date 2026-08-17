import { notFound } from "next/navigation";
import { Metadata } from "next";
import { locations, getLocationBySlug } from "@/lib/locations-data";
import { LocationTemplate } from "@/components/sections/LocationTemplate";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: `Digital Marketing Agency in ${location.name}`,
    description: `5xSME runs ads, social, video, SEO, and technology for businesses in ${location.name}, ${location.city}. One team, every channel.`,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationTemplate location={location} />;
}
