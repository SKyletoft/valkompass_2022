// setTimeout(() => {location.reload(true);}, 500);

let AT = "start";

const QUESTION_DIV = document.getElementById("question");
const YES_DIV = document.getElementById("yes");
const NO_DIV = document.getElementById("no");
const IMAGE = document.getElementById("party_logo");

const QUESTIONS = {
	start: {
		text: "Jag är okej med att xenofobiska neonazister har ett stort direkt inflytande över riksdagen",
		yes: "xenophobia_2",
		no: "internet",
		display_options: true,
	},
	xenophobia_2: {
		text: "Jag tycker att xenofobiska neonazister ska sitta i regeringen",
		yes: "sd",
		no: "fa_nagot_gjort",
		display_options: true,
	},
	fa_nagot_gjort: {
		text: "Det är viktigare att allas åsikter representeras okompromisserat i riksdagen än att faktiskt få något gjort",
		yes: "m",
		no: "amerika",
		display_options: true,
	},
	amerika: {
		text: "Det Amerikanska sjukvårdssystemet funkar väl och Sverige borde eftersträva det",
		yes: "c",
		no: "l",
		display_options: true,
	},
	kompetens: {
		text: "Det är viktigare att våra riksdagsledamöter är engagerade och står för sina åsikter än att de faktiskt vet vad de gör och förstår vad deras förslag har för konsekvenser",
		yes: "mp",
		no: "v",
		display_options: true,
	},
	internet: {
		text: "Internet och yttrandefrihet är dåligt",
		yes: "s",
		no: "kompetens",
		display_options: true,
	},
	s: {
		text: "Du borde rösta på Sossarna",
		image: "https://upload.wikimedia.org/wikipedia/en/7/75/Swedish_Social_Democratic_Worker%27s_Party_logo.svg",
		display_options: false,
	},
	v: {
		text: "Du borde rösta på Vänstern",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/V%C3%A4nsterpartiet_logo.svg/1280px-V%C3%A4nsterpartiet_logo.svg.png",
		display_options: false,
	},
	mp: {
		text: "Du borde rösta på Miljöpartisterna",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Swedish_Green_Party_logo.svg/1920px-Swedish_Green_Party_logo.svg.png",
		display_options: false,
	},
	l: {
		text: "Du borde rösta på Folkpartisterna",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Folkpartiet_liberalerna_Teillogo.svg/1920px-Folkpartiet_liberalerna_Teillogo.svg.png",
		display_options: false,
	},
	c: {
		text: "Du borde rösta på Centern",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C_v1.svg/1280px-C_v1.svg.png",
		display_options: false,
	},
	m: {
		text: "Du borde rösta på Moderaterna",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/M_v1.svg/1280px-M_v1.svg.png",
		display_options: false,
	},
	sd: {
		text: "Du borde rösta på Sverigedemokraterna",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Parteiadler_Nationalsozialistische_Deutsche_Arbeiterpartei_%281933%E2%80%931945%29.svg/1920px-Parteiadler_Nationalsozialistische_Deutsche_Arbeiterpartei_%281933%E2%80%931945%29.svg.png",
		display_options: false,
	},
};

function hide(element) {
	element.innerText = "";
	element.style.height = 0;
	element.style.width = 0;
}

function show(image) {
	IMAGE.style.margin_bottom = "5%";
	IMAGE.src = image;
}

function next(answer) {
	let last_question = QUESTIONS[AT];
	AT = answer ? last_question.yes : last_question.no;
	let question = QUESTIONS[AT];
	QUESTION_DIV.innerText = question.text;

	if (!question.display_options) {
		hide(YES_DIV);
		hide(NO_DIV);
		show(question.image);
	}

}

QUESTION_DIV.innerText = QUESTIONS[AT].text;

