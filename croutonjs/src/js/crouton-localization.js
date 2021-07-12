var words;

function CroutonLocalization(language) {
	this.language = language;
	words = {
		"da-DK": {
			"days_of_the_week": ["", "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
			"weekday": 'Ugedag',
			"city": "By",
			"cities": "Byer",
			"groups": "Grupper",
			"areas": "Områder",
			"locations": "Lokalite",
			"counties": "Amter",
			"states": "Provinser",
			"postal_codes": "Post nummer",
			"formats": "Struktur",
			"map": "Kort",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"de-DE":{
			"days_of_the_week": ["", "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Frietag", "Samstag"],
			"weekday": 'Wochentag',
			"city": "Stadt",
			"cities": "Städte",
			"groups": "Gruppen",
			"areas": "Gebiete",
			"locations": "Orte",
			"counties": "Landkreise",
			"states": "Bundesländer",
			"postal_codes": "PLZ",
			"formats": "Formate",
			"map": "Karte",
			"neighborhood": "Nachbarschaft",
			"near_me": "In meiner Nähe",
			"text_search": "Textsuche",
			"click_search": "Klicksuche",
			"pan_and_zoom": "Schwenken + Zoomen",
			"languages": "Sprachen",
			"venue_types": "Treffpunktarten",
			"venue_type_choices": {
				IN_PERSON: "Präsens-Meetings",
				VIRTUAL: "Online-Meetings",
			},
			"share": "share",
		},
		"en-AU": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"en-CA": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "Provinces",
			"postal_codes" : "Postal Codes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"en-NZ": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"en-UK": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"en-US": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Zips",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"es-US": {
			"days_of_the_week" : ["", "Domingo", " Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			"weekday" : "Día de la semana",
			"city" : "Ciudad",
			"cities" : "Ciudades",
			"groups" : "Grupos",
			"areas" : "Areas",
			"locations" : "Ubicaciones",
			"counties" : "Condados",
			"states" : "Estados",
			"postal_codes" : "Codiagos postales",
			"formats" : "Formatos",
			"map" : "Mapa",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"fa-IR": {
			"days_of_the_week" : ["", 'یَکشَنب', 'دوشَنبه', 'سه‌شنبه', 'چهار شنبه', 'پَنج شَنبه', 'جُمعه', 'شَنبه'],
			"weekday" : "روز هفته",
			"city" : "شهر",
			"cities" : "شهرها",
			"groups" : "گروه ها",
			"areas" : "نواحی",
			"locations" : "آدرسها",
			"counties" : "بخشها",
			"states" : "ایالات",
			"postal_codes":"کد پستی",
			"formats" : "فورمت ها",
			"map" : "نقشه",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"fr-CA": {
			"days_of_the_week" : ["", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			"weekday" : "Journée",
			"city" : "Ville",
			"cities" : "Villes",
			"groups" : "Groupes",
			"areas" : "CSL",
			"locations" : "Emplacements",
			"counties" : "Régions",
			"states" : "Provinces",
			"postal_codes" : "Codes postaux",
			"formats" : "Formats",
			"map" : "Carte",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"it-IT": {
			"days_of_the_week" : ["", "Domenica", " Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
			"weekday" : "Giorno",
			"city" : "Città",
			"cities" : "Città",
			"groups" : "Gruppi",
			"areas" : "Aree",
			"locations" : "Località",
			"counties" : "Province",
			"states" : "Regioni",
			"postal_codes" : "CAP",
			"formats" : "Formati",
			"map" : "Mappa",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
		},
		"nl-NL": {
			"days_of_the_week" : ["", "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
			"weekday" : "Dag van de week",
			"city" : "Stad",
			"cities" : "Steden",
			"groups" : "Groepen",
			"areas" : "Gebieden",
			"locations" : "Locaties",
			"counties" : "Landen",
			"states" : "Provincies",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Kaart",
			"neighborhood": "Buurt",
			"near_me": "Bij mij in de buurt",
			"text_search": "Zoek op tekst",
			"click_search": "Klik om te zoeken",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Talen",
			"venue_types": "Soorten locaties",
			"venue_type_choices": {
				IN_PERSON: "Fysiek",
				VIRTUAL: "Online",
			},
			"share": "share",
		},
		"pl-PL": {
			"days_of_the_week" : ["", "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
			"weekday" : "Dzień tygodnia",
			"city" : "Miasto",
			"cities" : "Miasta",
			"groups" : "Grupy",
			"areas" : "Okręgi",
			"locations" : "Lokalizacje",
			"counties" : "Powiaty",
			"states" : "Województwa",
			"postal_codes" : "Kody pocztowe",
			"formats" : "Formaty",
			"map" : "Mapa",
			"neighborhood": "Sąsiedztwo",
			"near_me": "Blisko Mnie",
			"text_search": "Wpisz",
			"click_search": "Kliknij na mapie",
			"pan_and_zoom": "Przesuń powiększ",
			"languages": "Języki",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"pt-BR": {
			"days_of_the_week" : ["", "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
			"weekday" : "Dia da semana",
			"city" : "Cidade",
			"cities" : "Cidades",
			"groups" : "Grupos",
			"areas" : "Áreas",
			"locations" : "Localizações",
			"counties" : "Municípios",
			"states" : "Estados",
			"postal_codes" : "CEPs",
			"formats" : "Formatos",
			"map" : "Mapa",
			"neighborhood": "Bairro",
			"near_me": "Minha Localização",
			"text_search": "Buscar por Texto",
			"click_search": "Clique no local",
			"pan_and_zoom": "Panorâmico + Zoom",
			"languages": "Languages",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"ru-RU": {
			"days_of_the_week" : ["", "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
			"weekday" : "будний день",
			"city" : "Город",
			"cities" : "Города",
			"groups" : "Группы",
			"areas" : "Зоны",
			"locations" : "Локации",
			"counties" : "Страны",
			"states" : "Штаты",
			"postal_codes" : "Индексы (почтовые)",
			"formats" : "Форматы",
			"map" : "Карта",
			"neighborhood": "Соседство",
			"near_me": "Около меня",
			"text_search": "Поиск текста",
			"click_search": "Нажмите Поиск",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Языки",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		},
		"sv-SE": {
			"days_of_the_week" : ["", "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
			"weekday" : "Veckodag",
			"city" : "Stad",
			"cities" : "Städer",
			"groups" : "Grupper",
			"areas" : "Distrikt",
			"locations" : "Plats",
			"counties" : "Land",
			"states" : "Stater",
			"postal_codes" : "Postnummer",
			"formats" : "Format",
			"map" : "Karta",
			"neighborhood": "Region",
			"near_me": "Nära mig",
			"text_search": "Söktext",
			"click_search": "Sök",
			"pan_and_zoom": "Panorera + Zooma",
			"languages": "Språk",
			"venue_types": "Venue Types",
			"venue_type_choices": {
				IN_PERSON: "In Person",
				VIRTUAL: "Virtual",
			},
			"share": "share",
		}
	};
}

CroutonLocalization.prototype.getDayOfTheWeekWord = function(day_id) {
	return words[this.language]['days_of_the_week'][day_id];
};

CroutonLocalization.prototype.getWord = function(word) {
	return words[this.language][word.toLowerCase()];
};

CroutonLocalization.prototype.getVenueType = function(type) {
	return words[this.language]['venue_type_choices'][type];
}
