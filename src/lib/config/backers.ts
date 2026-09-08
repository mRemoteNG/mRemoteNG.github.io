export interface Backer {
	name: string;
	tier: 'tier1' | 'tier2' | 'tier3'; // tier1: Constant/top backers, tier2: Generous backers, tier3: Supporters
	year: number;
}

export const backersList: Backer[] = [
	// 2023
	{ name: 'Jason Davis', tier: 'tier1', year: 2023 },
	{ name: 'Schwarz Fabrice', tier: 'tier1', year: 2023 },
	{ name: 'James Hart', tier: 'tier1', year: 2023 },
	{ name: 'Meetstream USA', tier: 'tier1', year: 2023 },
	{ name: 'Ivan Vaselli', tier: 'tier2', year: 2023 },
	{ name: 'Cory Theurer', tier: 'tier2', year: 2023 },
	{ name: 'Brenton Homer', tier: 'tier2', year: 2023 },
	{ name: 'Michael Gricksch', tier: 'tier2', year: 2023 },
	{ name: 'Denis Iakunin', tier: 'tier3', year: 2023 },
	{ name: 'Vito Mattera', tier: 'tier3', year: 2023 },
	{ name: 'Sören Calvert', tier: 'tier3', year: 2023 },
	{ name: 'Shaun Cronin', tier: 'tier3', year: 2023 },
	{ name: 'Matteo Menozzi', tier: 'tier3', year: 2023 },
	{ name: 'Russell Thompson', tier: 'tier3', year: 2023 },
	{ name: 'Marlon Diering', tier: 'tier3', year: 2023 },

	// 2022
	{ name: 'Gerald Osterkon', tier: 'tier1', year: 2022 },
	{ name: 'Daniel Anthes', tier: 'tier1', year: 2022 },
	{ name: 'Daniel Rusek', tier: 'tier2', year: 2022 },
	{ name: 'Paweł Iżykowski', tier: 'tier2', year: 2022 },
	{ name: 'Joel Grimes', tier: 'tier2', year: 2022 },
	{ name: 'Jürgen Busch', tier: 'tier3', year: 2022 },
	{ name: 'Łukasz Milata', tier: 'tier3', year: 2022 },
	{ name: 'Charles Fletcher', tier: 'tier3', year: 2022 },
	{ name: 'Frank Mandrell', tier: 'tier3', year: 2022 },
	{ name: 'Michal Krupa', tier: 'tier3', year: 2022 },
	{ name: 'Tianpeng Wang', tier: 'tier3', year: 2022 },

	// 2021 & earlier
	{ name: 'Dylan Giovanni Gambino', tier: 'tier1', year: 2021 },
	{ name: 'Michael Gaul', tier: 'tier1', year: 2021 },
	{ name: 'Andrew Warham', tier: 'tier2', year: 2021 },
	{ name: 'Sergei Shir', tier: 'tier2', year: 2021 },
	{ name: 'Magnus Fagertun', tier: 'tier2', year: 2021 },
	{ name: 'Loeper Matthias', tier: 'tier3', year: 2021 },
	{ name: 'Dosinas.net WEb creations', tier: 'tier3', year: 2021 },
	{ name: 'Cristina Guevarra', tier: 'tier3', year: 2021 },
	{ name: 'Ziga Jenko', tier: 'tier3', year: 2021 },
	{ name: 'Sylvain Pepoli', tier: 'tier3', year: 2021 },
	{ name: 'Bart De Boeck', tier: 'tier3', year: 2021 },
	{ name: 'Charles Veillon', tier: 'tier3', year: 2021 },
	{ name: 'Christopher Letcher', tier: 'tier3', year: 2021 },
	{ name: 'Pietro Luca Savorosi', tier: 'tier3', year: 2021 },
	{ name: 'Marc Gutt', tier: 'tier3', year: 2021 },
	{ name: 'Richard Abogado', tier: 'tier3', year: 2021 },
	{ name: 'Marcelo Ferreira da Costa', tier: 'tier3', year: 2021 },
	{ name: 'David Teske', tier: 'tier3', year: 2021 },
	{ name: 'Kilian Rauner', tier: 'tier3', year: 2021 },
	{ name: 'Eckard Wille', tier: 'tier3', year: 2021 },
	{ name: 'Elliott Marvin', tier: 'tier3', year: 2021 },
	{ name: 'Benjamin Truninger', tier: 'tier3', year: 2021 },
	{ name: 'Kai Ulrich', tier: 'tier3', year: 2021 },
	{ name: 'Sean Nelson', tier: 'tier3', year: 2021 },
	{ name: 'Guy Lincoln', tier: 'tier3', year: 2021 },
	{ name: 'Stephen Friedl', tier: 'tier3', year: 2021 },
	{ name: 'Jeremy Holder', tier: 'tier3', year: 2021 },
	{ name: 'Daniel Khumalo', tier: 'tier3', year: 2021 },
	{ name: 'Danatas Gervi', tier: 'tier3', year: 2021 },
	{ name: 'John Harrison', tier: 'tier3', year: 2021 },
	{ name: 'Neilhighley.com ltd.', tier: 'tier3', year: 2021 },
	{ name: 'Rafał Kurc', tier: 'tier3', year: 2021 },
	{ name: 'Sebastian Ulrich', tier: 'tier3', year: 2021 },
	{ name: 'Profi-KOM ltd.', tier: 'tier3', year: 2021 }
];