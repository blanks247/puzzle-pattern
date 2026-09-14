const CAMPAIGN_LEVELS = [
    {
        "level": 1,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 1",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 2,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 2",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 3,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 3",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 4,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 4",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 5,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 5",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 6,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 6",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 7,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 7",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 8,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 8",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 9,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 9",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 10,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 10",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 11,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 11",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 12,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 12",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 13,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 13",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 14,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 14",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 15,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 15",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 16,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 16",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 17,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 17",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 18,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 18",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 19,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 19",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 20,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 20",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 21,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 21",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 22,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 22",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 23,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 23",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 24,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 24",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 25,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 25",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 26,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 26",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 27,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 27",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 28,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 28",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 29,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 29",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 30,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 30",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 31,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 31",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 32,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 32",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 33,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 33",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 34,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 34",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 35,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 35",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 36,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 36",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 37,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 37",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 38,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 38",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 39,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 39",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 40,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 40",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 41,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 41",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 42,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 42",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 43,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 43",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 44,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 44",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 45,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 45",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 46,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 46",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 47,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 47",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 48,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 48",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 49,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 49",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 50,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 50",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 51,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 51",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 52,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 52",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 53,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 53",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 54,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 54",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 55,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 55",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 56,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 56",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 57,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 57",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 58,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 58",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 59,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 59",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 60,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 60",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 61,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 61",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 62,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 62",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 63,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 63",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 64,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 64",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 65,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 65",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 66,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 66",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 67,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 67",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 68,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 68",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 69,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 69",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 70,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 70",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 71,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 71",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 72,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 72",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 73,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 73",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 74,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 74",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 75,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 75",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 76,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 76",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 77,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 77",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 78,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 78",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 79,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 79",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 80,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 80",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 81,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 81",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 82,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 82",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 83,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 83",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 84,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 84",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 85,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 85",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 86,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 86",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 87,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 87",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 88,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 88",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 89,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 89",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 90,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 90",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 91,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 91",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 92,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 92",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 93,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 93",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 94,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 94",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 95,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 95",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 96,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 96",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 97,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 97",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 98,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 98",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 99,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 99",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 100,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 100",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 101,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 101",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 102,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 102",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 103,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 103",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 104,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 104",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 105,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 105",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 106,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 106",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 107,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 107",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 108,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 108",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 109,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 109",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 110,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 110",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 111,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 111",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 112,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 112",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 113,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 113",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 114,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 114",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 115,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 115",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 116,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 116",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 117,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 117",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 118,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 118",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 119,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 119",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 120,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 120",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 121,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 121",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 122,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 122",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 123,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 123",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 124,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 124",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 125,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 125",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 126,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 126",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 127,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 127",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 128,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 128",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 129,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 129",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 130,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 130",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 131,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 131",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 132,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 132",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 133,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 133",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 134,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 134",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 135,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 135",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 136,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 136",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 137,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 137",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 138,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 138",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 139,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 139",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 140,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 140",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 141,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 141",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 142,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 142",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 143,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 143",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 144,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 144",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 145,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 145",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 146,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 146",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 147,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 147",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 148,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 148",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 149,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 149",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 150,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 150",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 151,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 151",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 152,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 152",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 153,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 153",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 154,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 154",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 155,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 155",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 156,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 156",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 157,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 157",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 158,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 158",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 159,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 159",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 160,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 160",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 161,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 161",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 162,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 162",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 163,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 163",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 164,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 164",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 165,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 165",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 166,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 166",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 167,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 167",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 168,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 168",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 169,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 169",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 170,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 170",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 171,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 171",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 172,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 172",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 173,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 173",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 174,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 174",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 175,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 175",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 176,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 176",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 177,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 177",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 178,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 178",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 179,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 179",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 180,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 180",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 181,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 181",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 182,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 182",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 183,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 183",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 184,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 184",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 185,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 185",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 186,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 186",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 187,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 187",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 188,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 188",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 189,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 189",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 190,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 190",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 191,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 191",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 192,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 192",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 193,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 193",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 194,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 194",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 195,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 195",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 196,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 196",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 197,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 197",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 198,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 198",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 199,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 199",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 200,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 200",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 201,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 201",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 202,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 202",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 203,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 203",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 204,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 204",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 205,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 205",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 206,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 206",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 207,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 207",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 208,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 208",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 209,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 209",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 210,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 210",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 211,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 211",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 212,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 212",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 213,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 213",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 214,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 214",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 215,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 215",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 216,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 216",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 217,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 217",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 218,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 218",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 219,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 219",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 220,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 220",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 221,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 221",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 222,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 222",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 223,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 223",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 224,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 224",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 225,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 225",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 226,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 226",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 227,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 227",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 228,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 228",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 229,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 229",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 230,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 230",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 231,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 231",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 232,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 232",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 233,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 233",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 234,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 234",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 235,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 235",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 236,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 236",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 237,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 237",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 238,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 238",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 239,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 239",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 240,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 240",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 241,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 241",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 242,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 242",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 243,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 243",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 244,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 244",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 245,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 245",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 246,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 246",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 247,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 247",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 248,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 248",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 249,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 249",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 250,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 250",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 251,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 251",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 252,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 252",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 253,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 253",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 254,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 254",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 255,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 255",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 256,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 256",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 257,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 257",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 258,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 258",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 259,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 259",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 260,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 260",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 261,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 261",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 262,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 262",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 263,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 263",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 264,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 264",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 265,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 265",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 266,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 266",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 267,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 267",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 268,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 268",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 269,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 269",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 270,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 270",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 271,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 271",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 272,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 272",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 273,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 273",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 274,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 274",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 275,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 275",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 276,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 276",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 277,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 277",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 278,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 278",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 279,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 279",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 280,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 280",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 281,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 281",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 282,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 282",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 283,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 283",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 284,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 284",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 285,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 285",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 286,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 286",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 287,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 287",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 288,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 288",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 289,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 289",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 290,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 290",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 291,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 291",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 292,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 292",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 293,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 293",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 294,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 294",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 295,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 295",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 296,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 296",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 297,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 297",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 298,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 298",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 299,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 299",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 300,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 300",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 301,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 301",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 302,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 302",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 303,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 303",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 304,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 304",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 305,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 305",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 306,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 306",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 307,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 307",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 308,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 308",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 309,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 309",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 310,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 310",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 311,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 311",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 312,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 312",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 313,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 313",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 314,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 314",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 315,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 315",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 316,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 316",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 317,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 317",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 318,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 318",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 319,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 319",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 320,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 320",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 321,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 321",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 322,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 322",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 323,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 323",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 324,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 324",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 325,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 325",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 326,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 326",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 327,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 327",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 328,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 328",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 329,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 329",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 330,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 330",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 331,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 331",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 332,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 332",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 333,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 333",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 334,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 334",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 335,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 335",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 336,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 336",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 337,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 337",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 338,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 338",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 339,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 339",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 340,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 340",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 341,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 341",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 342,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 342",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 343,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 343",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 344,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 344",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 345,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 345",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 346,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 346",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 347,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 347",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 348,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 348",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 349,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 349",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 350,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 350",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 351,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 351",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 352,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 352",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 353,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 353",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 354,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 354",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 355,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 355",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 356,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 356",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 357,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 357",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 358,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 358",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 359,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 359",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 360,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 360",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 361,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 361",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 362,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 362",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 363,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 363",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 364,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 364",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 365,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 365",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 366,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 366",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 367,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 367",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 368,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 368",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 369,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 369",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 370,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 370",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 371,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 371",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 372,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 372",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 373,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 373",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 374,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 374",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 375,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 375",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 376,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 376",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 377,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 377",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 378,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 378",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 379,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 379",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 380,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 380",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 381,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 381",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 382,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 382",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 383,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 383",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 384,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 384",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 385,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 385",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 386,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 386",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 387,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 387",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 388,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 388",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 389,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 389",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 390,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 390",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 391,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 391",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 392,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 392",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 393,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 393",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 394,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 394",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 395,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 395",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 396,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 396",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 397,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 397",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 398,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 398",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 399,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 399",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 400,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 400",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 401,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 401",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 402,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 402",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 403,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 403",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 404,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 404",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 405,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 405",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 406,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 406",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 407,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 407",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 408,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 408",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 409,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 409",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 410,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 410",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 411,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 411",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 412,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 412",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 413,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 413",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 414,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 414",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 415,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 415",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 416,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 416",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 417,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 417",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 418,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 418",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 419,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 419",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 420,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 420",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 421,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 421",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 422,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 422",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 423,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 423",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 424,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 424",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 425,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 425",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 426,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 426",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 427,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 427",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 428,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 428",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 429,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 429",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 430,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 430",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 431,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 431",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 432,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 432",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 433,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 433",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 434,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 434",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 435,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 435",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 436,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 436",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 437,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 437",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 438,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 438",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 439,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 439",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 440,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 440",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 441,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 441",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 442,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 442",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 443,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 443",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 444,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 444",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 445,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 445",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 446,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 446",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 447,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 447",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 448,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 448",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 449,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 449",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 450,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 450",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 451,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 451",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 452,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 452",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 453,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 453",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 454,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 454",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 455,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 455",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 456,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 456",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 457,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 457",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 458,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 458",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 459,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 459",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 460,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 460",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 461,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 461",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 462,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 462",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 463,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 463",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 464,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 464",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 465,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 465",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 466,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 466",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 467,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 467",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 468,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 468",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 469,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 469",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 470,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 470",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 471,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 471",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 472,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 472",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 473,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 473",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 474,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 474",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 475,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 475",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 476,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 476",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 477,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 477",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 478,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 478",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 479,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 479",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 480,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 480",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 481,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 481",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 482,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 482",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 483,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 483",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 484,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 484",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 485,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 485",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 486,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 486",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 487,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 487",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 488,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 488",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 489,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 489",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 490,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 490",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 491,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 491",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 492,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 492",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 493,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 493",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 494,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 494",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 495,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 495",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 496,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 496",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 497,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 497",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 498,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 498",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 499,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 499",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 500,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 500",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 501,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 501",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 502,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 502",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 503,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 503",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 504,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 504",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 505,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 505",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 506,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 506",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 507,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 507",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 508,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 508",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 509,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 509",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 510,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 510",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 511,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 511",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 512,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 512",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 513,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 513",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 514,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 514",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 515,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 515",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 516,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 516",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 517,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 517",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 518,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 518",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 519,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 519",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 520,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 520",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 521,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 521",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 522,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 522",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 523,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 523",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 524,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 524",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 525,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 525",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 526,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 526",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 527,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 527",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 528,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 528",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 529,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 529",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 530,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 530",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 531,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 531",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 532,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 532",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 533,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 533",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 534,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 534",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 535,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 535",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 536,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 536",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 537,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 537",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 538,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 538",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 539,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 539",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 540,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 540",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 541,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 541",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 542,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 542",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 543,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 543",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 544,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 544",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 545,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 545",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 546,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 546",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 547,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 547",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 548,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 548",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 549,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 549",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 550,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 550",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 551,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 551",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 552,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 552",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 553,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 553",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 554,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 554",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 555,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 555",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 556,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 556",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 557,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 557",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 558,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 558",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 559,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 559",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 560,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 560",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 561,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 561",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 562,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 562",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 563,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 563",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 564,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 564",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 565,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 565",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 566,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 566",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 567,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 567",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 568,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 568",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 569,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 569",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 570,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 570",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 571,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 571",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 572,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 572",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 573,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 573",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 574,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 574",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 575,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 575",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 576,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 576",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 577,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 577",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 578,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 578",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 579,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 579",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 580,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 580",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 581,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 581",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 582,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 582",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 583,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 583",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 584,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 584",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 585,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 585",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 586,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 586",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 587,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 587",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 588,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 588",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 589,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 589",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 590,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 590",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 591,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 591",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 592,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 592",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 593,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 593",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 594,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 594",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 595,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 595",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 596,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 596",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 597,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 597",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 598,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 598",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 599,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 599",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 600,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 600",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 601,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 601",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 602,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 602",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 603,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 603",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 604,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 604",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 605,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 605",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 606,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 606",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 607,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 607",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 608,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 608",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 609,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 609",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 610,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 610",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 611,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 611",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 612,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 612",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 613,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 613",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 614,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 614",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 615,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 615",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 616,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 616",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 617,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 617",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 618,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 618",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 619,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 619",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 620,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 620",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 621,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 621",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 622,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 622",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 623,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 623",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 624,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 624",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 625,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 625",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 626,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 626",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 627,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 627",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 628,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 628",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 629,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 629",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 630,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 630",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 631,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 631",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 632,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 632",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 633,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 633",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 634,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 634",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 635,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 635",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 636,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 636",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 637,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 637",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 638,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 638",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 639,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 639",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 640,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 640",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 641,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 641",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 642,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 642",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 643,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 643",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 644,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 644",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 645,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 645",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 646,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 646",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 647,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 647",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 648,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 648",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 649,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 649",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 650,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 650",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 651,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 651",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 652,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 652",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 653,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 653",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 654,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 654",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 655,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 655",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 656,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 656",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 657,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 657",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 658,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 658",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 659,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 659",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 660,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 660",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 661,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 661",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 662,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 662",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 663,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 663",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 664,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 664",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 665,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 665",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 666,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 666",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 667,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 667",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 668,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 668",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 669,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 669",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 670,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 670",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 671,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 671",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 672,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 672",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 673,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 673",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 674,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 674",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 675,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 675",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 676,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 676",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 677,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 677",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 678,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 678",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 679,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 679",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 680,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 680",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 681,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 681",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 682,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 682",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 683,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 683",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 684,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 684",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 685,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 685",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 686,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 686",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 687,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 687",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 688,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 688",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 689,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 689",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 690,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 690",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 691,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 691",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 692,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 692",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 693,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 693",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 694,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 694",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 695,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 695",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 696,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 696",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 697,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 697",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 698,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 698",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 699,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 699",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 700,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 700",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 701,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 701",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 702,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 702",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 703,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 703",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 704,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 704",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 705,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 705",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 706,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 706",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 707,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 707",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 708,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 708",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 709,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 709",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 710,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 710",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 711,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 711",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 712,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 712",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 713,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 713",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 714,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 714",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 715,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 715",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 716,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 716",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 717,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 717",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 718,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 718",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 719,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 719",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 720,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 720",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 721,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 721",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 722,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 722",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 723,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 723",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 724,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 724",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 725,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 725",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 726,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 726",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 727,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 727",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 728,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 728",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 729,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 729",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 730,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 730",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 731,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 731",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 732,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 732",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 733,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 733",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 734,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 734",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 735,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 735",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 736,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 736",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 737,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 737",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 738,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 738",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 739,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 739",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 740,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 740",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 741,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 741",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 742,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 742",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 743,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 743",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 744,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 744",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 745,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 745",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 746,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 746",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 747,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 747",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 748,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 748",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 749,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 749",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 750,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 750",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 751,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 751",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 752,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 752",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 753,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 753",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 754,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 754",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 755,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 755",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 756,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 756",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 757,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 757",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 758,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 758",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 759,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 759",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 760,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 760",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 761,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 761",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 762,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 762",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 763,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 763",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 764,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 764",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 765,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 765",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 766,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 766",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 767,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 767",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 768,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 768",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 769,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 769",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 770,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 770",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 771,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 771",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 772,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 772",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 773,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 773",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 774,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 774",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 775,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 775",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 776,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 776",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 777,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 777",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 778,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 778",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 779,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 779",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 780,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 780",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 781,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 781",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 782,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 782",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 783,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 783",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 784,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 784",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 785,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 785",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 786,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 786",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 787,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 787",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 788,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 788",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 789,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 789",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 790,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 790",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 791,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 791",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 792,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 792",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 793,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 793",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 794,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 794",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 795,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 795",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 796,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 796",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 797,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 797",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 798,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 798",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 799,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 799",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 800,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 800",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 801,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 801",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 802,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 802",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 803,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 803",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 804,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 804",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 805,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 805",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 806,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 806",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 807,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 807",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 808,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 808",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 809,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 809",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 810,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 810",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 811,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 811",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 812,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 812",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 813,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 813",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 814,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 814",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 815,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 815",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 816,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 816",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 817,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 817",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 818,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 818",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 819,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 819",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 820,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 820",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 821,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 821",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 822,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 822",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 823,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 823",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 824,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 824",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 825,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 825",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 826,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 826",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 827,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 827",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 828,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 828",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 829,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 829",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 830,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 830",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 831,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 831",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 832,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 832",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 833,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 833",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 834,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 834",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 835,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 835",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 836,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 836",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 837,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 837",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 838,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 838",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 839,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 839",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 840,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 840",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 841,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 841",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 842,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 842",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 843,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 843",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 844,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 844",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 845,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 845",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 846,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 846",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 847,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 847",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 848,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 848",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 849,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 849",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 850,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 850",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 851,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 851",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 852,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 852",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 853,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 853",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 854,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 854",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 855,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 855",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 856,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 856",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 857,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 857",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 858,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 858",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 859,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 859",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 860,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 860",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 861,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 861",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 862,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 862",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 863,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 863",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 864,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 864",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 865,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 865",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 866,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 866",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 867,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 867",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 868,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 868",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 869,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 869",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 870,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 870",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 871,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 871",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 872,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 872",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 873,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 873",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 874,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 874",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 875,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 875",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 876,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 876",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 877,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 877",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 878,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 878",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 879,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 879",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 880,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 880",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 881,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 881",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 882,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 882",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 883,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 883",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 884,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 884",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 885,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 885",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 886,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 886",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 887,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 887",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 888,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 888",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 889,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 889",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 890,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 890",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 891,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 891",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 892,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 892",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 893,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 893",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 894,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 894",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 895,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 895",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 896,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 896",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 897,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 897",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 898,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 898",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 899,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 899",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 900,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 900",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 901,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 901",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 902,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 902",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 903,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 903",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 904,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 904",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 905,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 905",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 906,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 906",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 907,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 907",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 908,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 908",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 909,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 909",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 910,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 910",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 911,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 911",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 912,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 912",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 913,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 913",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 914,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 914",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 915,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 915",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 916,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 916",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 917,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 917",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 918,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 918",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 919,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 919",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 920,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 920",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 921,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 921",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 922,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 922",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 923,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 923",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 924,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 924",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 925,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 925",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 926,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 926",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 927,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 927",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 928,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 928",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 929,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 929",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 930,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 930",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 931,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 931",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 932,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 932",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 933,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 933",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 934,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 934",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 935,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 935",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 936,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 936",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 937,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 937",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 938,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 938",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 939,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 939",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 940,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 940",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 941,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 941",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 942,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 942",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 943,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 943",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 944,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 944",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 945,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 945",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 946,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 946",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 947,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 947",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 948,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 948",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 949,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 949",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 950,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 950",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 951,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 951",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 952,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 952",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 953,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 953",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 954,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 954",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 955,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 955",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 956,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 956",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 957,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 957",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 958,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 958",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 959,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 959",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 960,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 960",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 961,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 961",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 962,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 962",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 963,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 963",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 964,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 964",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 965,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 965",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 966,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 966",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 967,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 967",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 968,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 968",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 969,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 969",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 970,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 970",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 971,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 971",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 972,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 972",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 973,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 973",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 974,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 974",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 975,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 975",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 976,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 976",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 977,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 977",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 978,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 978",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 979,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 979",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 980,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 980",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 981,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 981",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 982,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 982",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 983,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 983",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 984,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 984",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 985,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 985",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 986,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 986",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 987,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 987",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 988,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 988",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 989,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 989",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 990,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 990",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 991,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 991",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 992,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 992",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 993,
        "size": 4,
        "numMotifs": 4,
        "title": "Level 993",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 994,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 994",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 995,
        "size": 5,
        "numMotifs": 5,
        "title": "Level 995",
        "difficulty": "Skilled",
        "fixedCount": 0
    },
    {
        "level": 996,
        "size": 3,
        "numMotifs": 4,
        "title": "Level 996",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 997,
        "size": 6,
        "numMotifs": 6,
        "title": "Level 997",
        "difficulty": "Expert",
        "fixedCount": 1
    },
    {
        "level": 998,
        "size": 3,
        "numMotifs": 3,
        "title": "Level 998",
        "difficulty": "Beginner",
        "fixedCount": 0
    },
    {
        "level": 999,
        "size": 4,
        "numMotifs": 5,
        "title": "Level 999",
        "difficulty": "Casual",
        "fixedCount": 0
    },
    {
        "level": 1000,
        "size": 5,
        "numMotifs": 6,
        "title": "Level 1000",
        "difficulty": "Skilled",
        "fixedCount": 0
    }
];

window.CAMPAIGN_LEVELS = CAMPAIGN_LEVELS;
