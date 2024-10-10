export const chsData = [
	{
		chsNr: 0,
		chsBtn1: `Let's go back to Riga!`,
		chsBtn2: `That will not stand. Deus Vult!`,
		chsStory1: `You have entered the Eastern Lands.`,
		chsStory2: `"Not to be rude, but I'm warning you: You're not welcome there."`,
		chsImg: `ending_path.png`,
		nextChoice1: undefined,  // This could be an ending function or another choice ID
		nextChoice2: 1  // Leads to choice 1
	},
	{
		chsNr: 1,
		chsBtn1: `On the other hand, there might be many of them.`,
		chsBtn2: `East-stonians.. What they gon' do 'bout it?`,
		chsStory1: `For The Greatest, we shall liberate the land from pagans!`,
		chsStory2: `"Only warned ya'. Good luck!"`,
		chsImg: `end_of_path.png`,
		nextChoice1: undefined,  // Leads to ending or another scene
		nextChoice2: undefined   // Leads to ending or another scene
	}
];
