let employees = [
	{
		id: 1,
		name: 'Ivan Ivanov',
		position: 'CEO',
		assistants: [
			{
				id: 2,
				name: 'Petr Petrov',
				position: 'Assistant'
			},
			{
				id: 3,
				name: 'Semyon Semyonov',
				position: 'Assistant'
			},
			{
				id: 4,
				name: 'Vasiliy Vasiliev',
				position: 'Assistant'
			}
		],
		subordinates: [
			{
				id: 5,
				name: 'Eugene Eugeniev',
				position: 'HR Director',
				assistants: [
					{
						id: 8,
						name: 'Petr Petrov',
						position: 'Assistant'
					},
					{
						id: 9,
						name: 'Semyon Semyonov',
						position: 'Assistant'
					},
					{
						id: 10,
						name: 'Vasiliy Vasiliev',
						position: 'Assistant'
					}
				],
				subordinates: [
					{
						id: 17,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
					{
						id: 18,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
					{
						id: 19,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
				]
			},
			{
				id: 6,
				name: 'Dmitry Dmitriev',
				position: 'IT Director',
				assistants: [
					{
						id: 11,
						name: 'Petr Petrov',
						position: 'Assistant'
					},
					{
						id: 12,
						name: 'Semyon Semyonov',
						position: 'Assistant'
					},
					{
						id: 13,
						name: 'Vasiliy Vasiliev',
						position: 'Assistant'
					}
				],
				subordinates: [
					{
						id: 20,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
					{
						id: 21,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
					{
						id: 22,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
				]
			},
			{
				id: 7,
				name: 'Sergey Sergeev',
				position: 'Supply Director',
				assistants: [
					{
						id: 14,
						name: 'Petr Petrov',
						position: 'Assistant'
					},
					{
						id: 15,
						name: 'Semyon Semyonov',
						position: 'Assistant'
					},
					{
						id: 16,
						name: 'Vasiliy Vasiliev',
						position: 'Assistant'
					}
				],
				subordinates: [
					{
						id: 23,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
					{
						id: 24,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
					{
						id: 25,
						name: 'Vasiliy Pupkin',
						position: 'Manager',
					},
				]
			}],

	}
]
export default employees;
