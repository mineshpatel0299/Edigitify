import clients from "@/data/clients.json";
import work from "@/data/work";
import awards from "@/data/awards.json";
import insights from "@/data/insights.json";
import cities from "@/data/cities.json";

export type Client = (typeof clients)[number];
export type WorkItem = (typeof work)[number];
export type Award = (typeof awards)[number];
export type Insight = (typeof insights)[number];
export type City = (typeof cities)[number];

export const clientsData = clients as Client[];
export const workData = work as WorkItem[];
export const awardsData = awards as Award[];
export const insightsData = insights as Insight[];
export const citiesData = cities as City[];

export function getWorkBySlug(slug: string) {
  return workData.find((item) => item.slug === slug);
}
