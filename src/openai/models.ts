export const CHAT_MODELS = {
	// GPT35: {
	// 	name: "gpt-3.5-turbo",
	// 	tokenLimit: 4096,
	// },
	// GPT35_16K: {
	// 	name: "gpt-3.5-turbo-16k",
	// 	tokenLimit: 16384,
	// },
	// GPT4: {
	// 	name: "gpt-4",
	// 	tokenLimit: 8000,
	// },
	GPT_4_0: {
		name: "gpt-4o",
		tokenLimit: 128000,
	},
	GPT_4_0_MINI: {
		name: "gpt-4o-mini",
		tokenLimit: 128000,
	},
	GPT_4_1106_PREVIEW: {
		name: "gpt-4-1106-preview",
		tokenLimit: 128000,
	},
	O3_MINI: {
		name: "o3-mini",
		tokenLimit: 200000,
	},
	O1: {
		name: "o1",
		tokenLimit: 200000,
	},
	// Updated O1 model with latest information
	// GPT4_32K: {
	// 	name: "gpt-4-32k",
	// 	tokenLimit: 32768,
	// },
};

export const IMAGE_MODELS = {
	DALL_E_2: {
		name: "dall-e-2",
		// tokenLimit: 128000,
	},
	DALL_E_3: {
		name: "dall-e-3",
		// tokenLimit: 128000,
	},
};
export function chatModelByName(name: string) {
	return Object.values(CHAT_MODELS).find((model) => model.name === name);
}
