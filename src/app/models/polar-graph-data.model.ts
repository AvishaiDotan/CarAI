export type SeriesItem = {
	name: string;
	value: number;
};

export type PolarGraphItem = {
	name: string;
	series: SeriesItem[];
};