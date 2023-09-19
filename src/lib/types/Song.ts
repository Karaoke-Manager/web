export type Song = {
	title: string;
	artists: string[];
	genre: string;
	creator: string;
	language: string;
	year: number;
	comment: string;
	bpm: number;
	gap: number;
	melody: {
		mode: string;
	};
	uuid: string;
	duet: boolean;
	audio: object;
	video: object;
	cover: object;
	background: object;
};
