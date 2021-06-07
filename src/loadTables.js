// TODO: Fix this complete and utter mess
// I'm not a front-end dev so I don't really care, but it can be done better
// Starting with the giant blob of terms

function json2Table(json, inputName, tableName, disableTags) {
	let cols = Object.keys(json[0]);

	// map over columns (excluding "Tags"), make headers,join into string
	let headerRow = cols
	  .map((col, index) => {
		  if (disableTags === true)
		  {
			  if (col !== "Tags")
			  {
				  return `<th onclick="sortTable(${index}, '${tableName}')">${col}</th>`;
			  }
		  }
		  else
		  {
			  return `<th onclick="sortTable(${index}, '${tableName}')">${col}</th>`
		  }
	  })
	  .join("");

	// map over array of json objs, for each row(obj) map over column values (excluding the "Tags")
	// and return a td with the value of that object for its column
	// take that array of tds and join them
	// then return a row of the tds
	// finally join all the rows together
	let rows = json
	  .map(row => {
		let tds = cols.map(col => {
			if (disableTags === true)
			{
			  if (col !== "Tags")
			  {
				  return `<td>${row[col]}</td>`
			  }
			}
			else
			{
			  return `<td>${row[col]}</td>`
			}

	  }).join("");
		return `<tr>${tds}</tr>`;
	  })
	  .join("");

	// build the table
	const table = `
	<input type="search" class="form-control ds-input" id="${inputName}" placeholder="Search for terms...">
	  <table class="table table-striped table-bordered" id="${tableName}">
		  <thead class="thead-light">
			  <tr>${headerRow}</tr>
		  <thead>
		  <tbody>
			  ${rows}
		  <tbody>
	  <table>`;

	return table;
  }

  const wingChun = [
    {
        "English Name (From Cantonese)": "Baai Ying",
        "Trad. char.": "敗形",
        "Cantonese (Jyutping)": "baai6 jing4",
        "Simp. char.": "败形",
        "Mandarin (Pinyin)": "bài xíng",
        "Meaning(s) in English": "losing facing describes compromised angle, body structure, or loss of balance",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Baat Jaam Dou",
        "Trad. char.": "八斬刀",
        "Cantonese (Jyutping)": "baat3 zaam2 dou1",
        "Simp. char.": "八斩刀",
        "Mandarin (Pinyin)": "bā zhǎn dāo",
        "Meaning(s) in English": "eight slashing knives; eight chopping knives;",
        "Alternate romanizations/other meanings": "baat cham dao; bart jarm do",
        "Tags": "form, weapon"
    },
    {
        "English Name (From Cantonese)": "Baat Ji Dou Fa",
        "Trad. char.": "八字刀花",
        "Cantonese (Jyutping)": "baat3 zi6 dou1 faa1",
        "Simp. char.": "八字刀花",
        "Mandarin (Pinyin)": "bāzì dāo huā",
        "Meaning(s) in English": "character 8 knifes flower",
        "Alternate romanizations/other meanings": "see also \"tong do\"; baat jee do fa",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Bai Muk Chi Sau",
        "Trad. char.": "閉目黐手",
        "Cantonese (Jyutping)": "bai3 muk6 ci1 sau2",
        "Simp. char.": "闭目黐手",
        "Mandarin (Pinyin)": "bì mù chī shǒu",
        "Meaning(s) in English": "chi sau with closed eyes",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Bei Mo",
        "Trad. char.": "比武",
        "Cantonese (Jyutping)": "bei2 mou5",
        "Simp. char.": "比武",
        "Mandarin (Pinyin)": "bǐ wǔ",
        "Meaning(s) in English": "martial arts skill comparison",
        "Alternate romanizations/other meanings": "beimo",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Bing Hei Tou Lou",
        "Trad. char.": "兵器套路",
        "Cantonese (Jyutping)": "bing1 hei3 tou3 lou6",
        "Simp. char.": "兵器套路",
        "Mandarin (Pinyin)": "bīng qì tào lù",
        "Meaning(s) in English": "weapon form (or weapon kata)",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Biu Dou",
        "Trad. char.": "標刀",
        "Cantonese (Jyutping)": "biu1 dou1",
        "Simp. char.": "标刀",
        "Mandarin (Pinyin)": "biāo dāo",
        "Meaning(s) in English": "thrusting/spearing knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Biu Gwan",
        "Trad. char.": "鏢棍",
        "Cantonese (Jyutping)": "biu1 gwan3",
        "Simp. char.": "镖棍",
        "Mandarin (Pinyin)": "biāo gùn",
        "Meaning(s) in English": "darting pole",
        "Alternate romanizations/other meanings": "see also \"fong lung cheung\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Biu Ji",
        "Trad. char.": "鏢指",
        "Cantonese (Jyutping)": "biu1 zi2",
        "Simp. char.": "镖指",
        "Mandarin (Pinyin)": "biāo zhǐ",
        "Meaning(s) in English": "darting fingers; pointing fingers",
        "Alternate romanizations/other meanings": "biu jee; biu tze",
        "Tags": "form"
    },
    {
        "English Name (From Cantonese)": "Biu Jong Ma",
        "Trad. char.": "標樁馬",
        "Cantonese (Jyutping)": "biu1 zong1 maa5",
        "Simp. char.": "标桩马",
        "Mandarin (Pinyin)": "biāo zhuāng mǎ",
        "Meaning(s) in English": "thrusting horce stance",
        "Alternate romanizations/other meanings": "possibly the same as \"yap ma bo fat\"",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Biu Ma",
        "Trad. char.": "標馬",
        "Cantonese (Jyutping)": "biu1 maa5",
        "Simp. char.": "标马",
        "Mandarin (Pinyin)": "biāo mǎ",
        "Meaning(s) in English": "thrusting horce stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Biu Sau",
        "Trad. char.": "鏢手",
        "Cantonese (Jyutping)": "biu1 sau2",
        "Simp. char.": "镖手",
        "Mandarin (Pinyin)": "biāo shǒu",
        "Meaning(s) in English": "thrusting/spearing-hand attack/deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Bong Dou",
        "Trad. char.": "膀刀",
        "Cantonese (Jyutping)": "bong2 dou1",
        "Simp. char.": "膀刀",
        "Mandarin (Pinyin)": "bǎng dāo",
        "Meaning(s) in English": "wing knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Bong Gwan",
        "Trad. char.": "膀棍",
        "Cantonese (Jyutping)": "bong2 gwan3",
        "Simp. char.": "膀棍",
        "Mandarin (Pinyin)": "bǎng gùn",
        "Meaning(s) in English": "wing pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Bong Sau",
        "Trad. char.": "膀手",
        "Cantonese (Jyutping)": "bong2 sau2",
        "Simp. char.": "膀手",
        "Mandarin (Pinyin)": "bǎng shǒu",
        "Meaning(s) in English": "upper-arm deflection; wing arm",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Boon Je Lan",
        "Trad. char.": "半遮攔",
        "Cantonese (Jyutping)": "bun3 ze1 laan4",
        "Simp. char.": "半遮拦",
        "Mandarin (Pinyin)": "bàn zhēlán",
        "Meaning(s) in English": "half covering bar pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Bou Faat Tung Cho Ma",
        "Trad. char.": "步法同坐馬",
        "Cantonese (Jyutping)": "bou6 faat3 tung4 zo6/co5 maa5",
        "Simp. char.": "步法同坐马",
        "Mandarin (Pinyin)": "bù fǎ tóng zuò mǎ",
        "Meaning(s) in English": "footwork and stances",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Bun Jun Bo",
        "Trad. char.": "半進步",
        "Cantonese (Jyutping)": "bun3 zeon3 bou6",
        "Simp. char.": "半进步",
        "Mandarin (Pinyin)": "bàn jìnbù",
        "Meaning(s) in English": "half forward step",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Bun Jun Ma",
        "Trad. char.": "半進馬",
        "Cantonese (Jyutping)": "bun3 zeon3 maa5",
        "Simp. char.": "半进马",
        "Mandarin (Pinyin)": "bàn jìn mǎ",
        "Meaning(s) in English": "half forward stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Bun Tui Bo",
        "Trad. char.": "半退步",
        "Cantonese (Jyutping)": "bun3 teoi3 bou6",
        "Simp. char.": "半退步",
        "Mandarin (Pinyin)": "bàn tuìbù",
        "Meaning(s) in English": "half backwards step",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Bun Tui Ma",
        "Trad. char.": "半退馬",
        "Cantonese (Jyutping)": "bun3 teoi3 maa5",
        "Simp. char.": "半退马",
        "Mandarin (Pinyin)": "bàn tuì mǎ",
        "Meaning(s) in English": "half backwards stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Cham Kiu",
        "Trad. char.": "尋橋",
        "Cantonese (Jyutping)": "cam4 kiu4",
        "Simp. char.": "寻桥",
        "Mandarin (Pinyin)": "xún qiáo",
        "Meaning(s) in English": "seeking the bridge; finding the bridge",
        "Alternate romanizations/other meanings": "chum kiu",
        "Tags": "form"
    },
    {
        "English Name (From Cantonese)": "Cham Kiu",
        "Trad. char.": "沉橋",
        "Cantonese (Jyutping)": "cam4 kiu4",
        "Simp. char.": "沉橋",
        "Mandarin (Pinyin)": "chén qiáo",
        "Meaning(s) in English": "sinking bridge",
        "Alternate romanizations/other meanings": "chum kiu",
        "Tags": "form"
    },
    {
        "English Name (From Cantonese)": "Cham Kiu Biu Sau",
        "Trad. char.": "尋橋鏢手",
        "Cantonese (Jyutping)": "cam4 kiu4 biu1 sau2",
        "Simp. char.": "寻桥镖手",
        "Mandarin (Pinyin)": "xún qiáo biāo shǒu",
        "Meaning(s) in English": "thrusting/spearing-hand attack/deflection found in the opening section of cham kiu",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Cham Kiu Fook Sau",
        "Trad. char.": "尋橋伏手",
        "Cantonese (Jyutping)": "cam4 kiu4 fuk6 sau2",
        "Simp. char.": "寻桥伏手",
        "Mandarin (Pinyin)": "xún qiáo fú shǒu",
        "Meaning(s) in English": "outside-forearm-subduing-hand deflection found in cham kiu",
        "Alternate romanizations/other meanings": "cham kiu fuk sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Cham Kiu Ma",
        "Trad. char.": "尋橋馬",
        "Cantonese (Jyutping)": "cam4 kiu4 maa5",
        "Simp. char.": "寻桥马",
        "Mandarin (Pinyin)": "xún qiáo mǎ",
        "Meaning(s) in English": "refers to all footwork found in the \"cham kiu\" form",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chau Gwan",
        "Trad. char.": "抽棍",
        "Cantonese (Jyutping)": "cau1 gwan3",
        "Simp. char.": "抽棍",
        "Mandarin (Pinyin)": "chōu gùn",
        "Meaning(s) in English": "whipping/lashing/pulling out pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Chau Kyun",
        "Trad. char.": "抽拳",
        "Cantonese (Jyutping)": "cau1 kyun4",
        "Simp. char.": "抽拳",
        "Mandarin (Pinyin)": "chōu quán",
        "Meaning(s) in English": "lashing/whipping punch",
        "Alternate romanizations/other meanings": "sometimes referred to as \"cham kiu uppercut\"; chau kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Che Chaang Geuk",
        "Trad. char.": "斜撐腳",
        "Cantonese (Jyutping)": "ce4 caang1/caang3 goek3",
        "Simp. char.": "斜撑脚",
        "Mandarin (Pinyin)": "xié chēng jiǎo",
        "Meaning(s) in English": "stomping kick",
        "Alternate romanizations/other meanings": "che chang guk",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Che Cheung",
        "Trad. char.": "斜槍",
        "Cantonese (Jyutping)": "ce4 coeng1",
        "Simp. char.": "斜枪",
        "Mandarin (Pinyin)": "xié qiāng",
        "Meaning(s) in English": "descending spearing-action",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Che Gwan Kyun",
        "Trad. char.": "斜棍拳",
        "Cantonese (Jyutping)": "ce4 gwan3 kyun4",
        "Simp. char.": "斜棍拳",
        "Mandarin (Pinyin)": "xié gùn quán",
        "Meaning(s) in English": "pole pushing/pulling punches exercise",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Che Jeung",
        "Trad. char.": "斜掌",
        "Cantonese (Jyutping)": "ce4 zoeng2",
        "Simp. char.": "斜掌",
        "Mandarin (Pinyin)": "xié zhǎng",
        "Meaning(s) in English": "slanting/descending palm-strike",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Che Jin Chui",
        "Trad. char.": "扯箭搥",
        "Cantonese (Jyutping)": "ce2 zin3 ceoi4",
        "Simp. char.": "扯箭捶",
        "Mandarin (Pinyin)": "chě jiàn chuí",
        "Meaning(s) in English": "pulling arrow punch",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand, drill"
    },
    {
        "English Name (From Cantonese)": "Cheung Kiu Faat Lik",
        "Trad. char.": "長橋發力",
        "Cantonese (Jyutping)": "coeng4/zoeng2 kiu4 faat3 lik6",
        "Simp. char.": "长桥发力",
        "Mandarin (Pinyin)": "zhǎng qiáo fā lì",
        "Meaning(s) in English": "generating power from an extended position concept",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Chi Geuk",
        "Trad. char.": "黐腳",
        "Cantonese (Jyutping)": "ci1 goek3",
        "Simp. char.": "黐脚",
        "Mandarin (Pinyin)": "chī jiǎo",
        "Meaning(s) in English": "sticking legs exercise",
        "Alternate romanizations/other meanings": "chi guk; chi gerk",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Chi Gwan",
        "Trad. char.": "黐棍",
        "Cantonese (Jyutping)": "ci1 gwan3",
        "Simp. char.": "黐棍",
        "Mandarin (Pinyin)": "chī gùn",
        "Meaning(s) in English": "sticking poles exercise",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon, drill"
    },
    {
        "English Name (From Cantonese)": "Chi Sau",
        "Trad. char.": "黐手",
        "Cantonese (Jyutping)": "ci1 sau2",
        "Simp. char.": "黐手",
        "Mandarin (Pinyin)": "chī shǒu",
        "Meaning(s) in English": "sticking hands exercise",
        "Alternate romanizations/other meanings": "chi sao",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Chin Cho Ma",
        "Trad. char.": "前坐馬",
        "Cantonese (Jyutping)": "cin4 zo6/co5 maa5",
        "Simp. char.": "前坐马",
        "Mandarin (Pinyin)": "qián zuò mǎ",
        "Meaning(s) in English": "front stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chit Dou",
        "Trad. char.": "切刀",
        "Cantonese (Jyutping)": "cit3 dou1",
        "Simp. char.": "切刀",
        "Mandarin (Pinyin)": "qiè dāo",
        "Meaning(s) in English": "slicing knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Chiu Ying",
        "Trad. char.": "朝形",
        "Cantonese (Jyutping)": "ziu1 jing4",
        "Simp. char.": "朝形",
        "Mandarin (Pinyin)": "cháo xíng",
        "Meaning(s) in English": "square-on/facing concept",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Cho Gwan",
        "Trad. char.": "搓棍",
        "Cantonese (Jyutping)": "co1 gwan3",
        "Simp. char.": "搓棍",
        "Mandarin (Pinyin)": "cuō gùn",
        "Meaning(s) in English": "twisting pole exercise for conditioning the arms and wrists",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon, drill"
    },
    {
        "English Name (From Cantonese)": "Cho Ma",
        "Trad. char.": "坐馬",
        "Cantonese (Jyutping)": "zo6/co5 maa5",
        "Simp. char.": "坐马",
        "Mandarin (Pinyin)": "zuò mǎ",
        "Meaning(s) in English": "sitting in horse stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chyun Jun Bo",
        "Trad. char.": "全進步",
        "Cantonese (Jyutping)": "cyun4 zeon3 bou6",
        "Simp. char.": "全进步",
        "Mandarin (Pinyin)": "quán jìnbù",
        "Meaning(s) in English": "full forward step",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chyun Jun Ma",
        "Trad. char.": "全進馬",
        "Cantonese (Jyutping)": "cyun4 zeon3 maa5",
        "Simp. char.": "全进马",
        "Mandarin (Pinyin)": "quán jìn mǎ",
        "Meaning(s) in English": "forward stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chyun Kiu",
        "Trad. char.": "穿橋",
        "Cantonese (Jyutping)": "cyun1 kiu4",
        "Simp. char.": "穿桥",
        "Mandarin (Pinyin)": "chuān qiáo",
        "Meaning(s) in English": "threading bridge",
        "Alternate romanizations/other meanings": "see also \"chuen sau\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Chyun Sau",
        "Trad. char.": "穿手",
        "Cantonese (Jyutping)": "cyun1 sau2",
        "Simp. char.": "穿手",
        "Mandarin (Pinyin)": "chuān shǒu",
        "Meaning(s) in English": "threading hand",
        "Alternate romanizations/other meanings": "see also \"chuen kiu\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Chyun Tui Bo",
        "Trad. char.": "全退步",
        "Cantonese (Jyutping)": "cyun4 teoi3 bou6",
        "Simp. char.": "全退步",
        "Mandarin (Pinyin)": "quán tuìbù",
        "Meaning(s) in English": "full backwards step",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chyun Tui Ma",
        "Trad. char.": "全退馬",
        "Cantonese (Jyutping)": "cyun4 teoi3 maa5",
        "Simp. char.": "全退马",
        "Mandarin (Pinyin)": "quán tuì mǎ",
        "Meaning(s) in English": "backwards stance",
        "Alternate romanizations/other meanings": "as in intention to go backwards",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Chung Chui",
        "Trad. char.": "衝搥",
        "Cantonese (Jyutping)": "cung1 ceoi4",
        "Simp. char.": "冲捶",
        "Mandarin (Pinyin)": "chōngchuí",
        "Meaning(s) in English": "thrusting punch",
        "Alternate romanizations/other meanings": "same as \"yat ji chung kuen\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Cyun Jin",
        "Trad. char.": "寸勁",
        "Cantonese (Jyutping)": "cyun3 ging6",
        "Simp. char.": "寸劲",
        "Mandarin (Pinyin)": "cùn jìn",
        "Meaning(s) in English": "one inch punch",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Da Ga",
        "Trad. char.": "打架",
        "Cantonese (Jyutping)": "daa2 gaa3",
        "Simp. char.": "打架",
        "Mandarin (Pinyin)": "dǎ jià",
        "Meaning(s) in English": "fighting (as in a street fight)",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Da Gwan",
        "Trad. char.": "打棍",
        "Cantonese (Jyutping)": "daa2 gwan3",
        "Simp. char.": "打棍",
        "Mandarin (Pinyin)": "dǎ gùn",
        "Meaning(s) in English": "hitting pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Daan Chi Sau",
        "Trad. char.": "單黐手",
        "Cantonese (Jyutping)": "daan1 ci1 sau2",
        "Simp. char.": "单黐手",
        "Mandarin (Pinyin)": "dān chī shǒu",
        "Meaning(s) in English": "single hand \"chi sau\" exercise",
        "Alternate romanizations/other meanings": "daan chi sao",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Daan Sau",
        "Trad. char.": "彈手",
        "Cantonese (Jyutping)": "taan4/daan6/daan2 sau2",
        "Simp. char.": "弹手",
        "Mandarin (Pinyin)": "dàn shǒu",
        "Meaning(s) in English": "rebounding-hand deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Dai Biu Gwan",
        "Trad. char.": "低標棍",
        "Cantonese (Jyutping)": "dai1 biu1 gwan3",
        "Simp. char.": "低标棍",
        "Mandarin (Pinyin)": "dī biāo gùn",
        "Meaning(s) in English": "low-thrusting pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Dai Bong",
        "Trad. char.": "低膀",
        "Cantonese (Jyutping)": "dai1 bong2",
        "Simp. char.": "低膀",
        "Mandarin (Pinyin)": "dī bǎng",
        "Meaning(s) in English": "low-action bong sau deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Dai Jeung",
        "Trad. char.": "底掌",
        "Cantonese (Jyutping)": "dai2 zoeng2",
        "Simp. char.": "底掌",
        "Mandarin (Pinyin)": "dǐ zhǎng",
        "Meaning(s) in English": "underneath/lifting-palm deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Dai Ngaang Jau Chi Sau",
        "Trad. char.": "戴眼罩黐手",
        "Cantonese (Jyutping)": "daai3 ngaan5 zaau3 ci1 sau2",
        "Simp. char.": "戴眼罩黐手",
        "Mandarin (Pinyin)": "dài yǎnzhào chī shǒu",
        "Meaning(s) in English": "blind folded chi sau",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Dang Geuk",
        "Trad. char.": "蹬腳",
        "Cantonese (Jyutping)": "dang1 goek3",
        "Simp. char.": "蹬脚",
        "Mandarin (Pinyin)": "dēng jiǎo",
        "Meaning(s) in English": "ascending (basic heel) kick",
        "Alternate romanizations/other meanings": "dang guk; dan guk; dan gerk",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Dang Gwan",
        "Trad. char.": "彈棍",
        "Cantonese (Jyutping)": "daan6/daan2 gwan3",
        "Simp. char.": "弹棍",
        "Mandarin (Pinyin)": "dàn gùn",
        "Meaning(s) in English": "ascending pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Dang Gwan",
        "Trad. char.": "登棍",
        "Cantonese (Jyutping)": "dang1 gwan3",
        "Simp. char.": "登棍",
        "Mandarin (Pinyin)": "dēng gùn",
        "Meaning(s) in English": "ascending/lifting pole",
        "Alternate romanizations/other meanings": "see also \"tai gwan\" and \"dang gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Ding Gwan",
        "Trad. char.": "釘棍",
        "Cantonese (Jyutping)": "ding1/deng1 gwan3",
        "Simp. char.": "钉棍",
        "Mandarin (Pinyin)": "dīng gùn",
        "Meaning(s) in English": "nailing/subduing pole",
        "Alternate romanizations/other meanings": "same as \"fook gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Dit Da Jau",
        "Trad. char.": "跌打酒",
        "Cantonese (Jyutping)": "dit3 daa2 zau2",
        "Simp. char.": "跌打酒",
        "Mandarin (Pinyin)": "diē dǎ jiǔ",
        "Meaning(s) in English": "bone-setter liniment used for traumatic injuries",
        "Alternate romanizations/other meanings": "dit da jow",
        "Tags": "general"
    },
    {
        "English Name (From Cantonese)": "Diu Ma",
        "Trad. char.": "吊馬",
        "Cantonese (Jyutping)": "diu3 maa5",
        "Simp. char.": "吊马",
        "Mandarin (Pinyin)": "diào mǎ",
        "Meaning(s) in English": "hanging horse; cat stance",
        "Alternate romanizations/other meanings": "from the pole form",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Dui Gok Ma",
        "Trad. char.": "對角馬",
        "Cantonese (Jyutping)": "deoi3 gok3 maa5",
        "Simp. char.": "对角马",
        "Mandarin (Pinyin)": "duì jiǎo mǎ",
        "Meaning(s) in English": "angle facing horse stance; side-facing stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Duk Lap Ma",
        "Trad. char.": "獨立馬",
        "Cantonese (Jyutping)": "duk6 laap6 maa5",
        "Simp. char.": "独立马",
        "Mandarin (Pinyin)": "dúlì mǎ",
        "Meaning(s) in English": "single legged stance;",
        "Alternate romanizations/other meanings": "after finishing of a kick if not followed with a step",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Faan Sau",
        "Trad. char.": "反手",
        "Cantonese (Jyutping)": "faan2 sau2",
        "Simp. char.": "反手",
        "Mandarin (Pinyin)": "fǎn shǒu",
        "Meaning(s) in English": "reaction hands exercise",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Fat Sau",
        "Trad. char.": "拂手",
        "Cantonese (Jyutping)": "fat1 sau2",
        "Simp. char.": "拂手",
        "Mandarin (Pinyin)": "fú shǒu",
        "Meaning(s) in English": "whisking/whipping hand attack",
        "Alternate romanizations/other meanings": "fak sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Fei Jaang",
        "Trad. char.": "飛踭",
        "Cantonese (Jyutping)": "fei1 zaang1",
        "Simp. char.": "飞踭",
        "Mandarin (Pinyin)": "fēi zhēng",
        "Meaning(s) in English": "flying elbow describes incorrect elbow structure/position",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Fong Lung Cheung",
        "Trad. char.": "放龍槍",
        "Cantonese (Jyutping)": "fong3 lung4 coeng1",
        "Simp. char.": "放龙枪",
        "Mandarin (Pinyin)": "fàng lóng qiāng",
        "Meaning(s) in English": "releasing the dragon spearing-action",
        "Alternate romanizations/other meanings": "see also \"biu gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Fook Gwan",
        "Trad. char.": "伏棍",
        "Cantonese (Jyutping)": "fuk6 gwan3",
        "Simp. char.": "伏棍",
        "Mandarin (Pinyin)": "fú gùn",
        "Meaning(s) in English": "subduing/controlling pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Fook Sau",
        "Trad. char.": "伏手",
        "Cantonese (Jyutping)": "fuk6 sau2",
        "Simp. char.": "伏手",
        "Mandarin (Pinyin)": "fú shǒu",
        "Meaning(s) in English": "subduing hand ",
        "Alternate romanizations/other meanings": "fuk sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Fung Ngaan Chui",
        "Trad. char.": "鳳眼搥",
        "Cantonese (Jyutping)": "fung6 ngaan5 ceoi4",
        "Simp. char.": "凤眼捶",
        "Mandarin (Pinyin)": "fèng yǎn chuí",
        "Meaning(s) in English": "phoenix eye fist/punch",
        "Alternate romanizations/other meanings": "same as \"fung ngaan kyun\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Fung Ngaan Kyun",
        "Trad. char.": "鳳眼拳",
        "Cantonese (Jyutping)": "fung6 ngaan5 kyun4",
        "Simp. char.": "凤眼拳",
        "Mandarin (Pinyin)": "fèng yǎn quán",
        "Meaning(s) in English": "phoenix eye fist/punch",
        "Alternate romanizations/other meanings": "same as \"fung ngaan chui\"; fung ngaan kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gaam Sau",
        "Trad. char.": "減手",
        "Cantonese (Jyutping)": "gaam2 sau2",
        "Simp. char.": "减手",
        "Mandarin (Pinyin)": "jiǎn shǒu",
        "Meaning(s) in English": "pressing/covering palm deflection",
        "Alternate romanizations/other meanings": "Less commonly referred to as \"soh sau\"; gum sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gaan Dou",
        "Trad. char.": "間刀",
        "Cantonese (Jyutping)": "gaan1/gaan3 dou1",
        "Simp. char.": "间刀",
        "Mandarin (Pinyin)": "jiàn dāo",
        "Meaning(s) in English": "splitting/dividing-knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Gaan Sau",
        "Trad. char.": "間手",
        "Cantonese (Jyutping)": "gaan1/gaan3 sau2",
        "Simp. char.": "间手",
        "Mandarin (Pinyin)": "jiàn shǒu",
        "Meaning(s) in English": "splitting/dividing-hand deflection",
        "Alternate romanizations/other meanings": "More commonly referred to as \"gaang sau\"; gaun sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gaang Gwan",
        "Trad. char.": "耕棍",
        "Cantonese (Jyutping)": "gaang1 gwan3",
        "Simp. char.": "耕棍",
        "Mandarin (Pinyin)": "gēng gùn",
        "Meaning(s) in English": "cultivating/splitting pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Gaang Sau",
        "Trad. char.": "耕手",
        "Cantonese (Jyutping)": "gaang1 sau2",
        "Simp. char.": "耕手",
        "Mandarin (Pinyin)": "gēng shǒu",
        "Meaning(s) in English": "splitting/dividing-hand deflection; cultivating hand",
        "Alternate romanizations/other meanings": "Less commonly referred to as \"gaan sau\"; garn sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gam Sau",
        "Trad. char.": "撳手",
        "Cantonese (Jyutping)": "gam6 sau2",
        "Simp. char.": "揿手",
        "Mandarin (Pinyin)": "qìn shǒu",
        "Meaning(s) in English": "pressing/covering palm deflection",
        "Alternate romanizations/other meanings": "common name for the the same technique as soh sau/gaam sau/gum sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Geung Ji Kyun",
        "Trad. char.": "薑子拳",
        "Cantonese (Jyutping)": "goeng1 zi2 kyun4",
        "Simp. char.": "姜子拳",
        "Mandarin (Pinyin)": "jiāng zi quán",
        "Meaning(s) in English": "ginger fist",
        "Alternate romanizations/other meanings": "geung jee kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gong Sau Wong",
        "Trad. char.": "講手王",
        "Cantonese (Jyutping)": "gong2 sau2 wong4",
        "Simp. char.": "讲手王",
        "Mandarin (Pinyin)": "jiǎng shǒu wáng",
        "Meaning(s) in English": "King of Talking Hands (WSL nickname)",
        "Alternate romanizations/other meanings": "",
        "Tags": "general, name, practitioner"
    },
    {
        "English Name (From Cantonese)": "Goon",
        "Trad. char.": "舘",
        "Cantonese (Jyutping)": "gun2",
        "Simp. char.": "馆",
        "Mandarin (Pinyin)": "guǎn",
        "Meaning(s) in English": "obsolete name for school room; used by some to refer to a \"training hall or studio\"",
        "Alternate romanizations/other meanings": "kwoon; see also \"tong\"",
        "Tags": "general"
    },
    {
        "English Name (From Cantonese)": "Gung Bo",
        "Trad. char.": "弓步",
        "Cantonese (Jyutping)": "gung1 bou6",
        "Simp. char.": "弓步",
        "Mandarin (Pinyin)": "gōng bù",
        "Meaning(s) in English": "bow stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Gung Fu",
        "Trad. char.": "功夫",
        "Cantonese (Jyutping)": "gung1 fu1",
        "Simp. char.": "功夫",
        "Mandarin (Pinyin)": "gōng fu",
        "Meaning(s) in English": "any skill learned through great effort",
        "Alternate romanizations/other meanings": "kung fu; gung fu; gong fu; in Western culture, became synonymous with Chinese martial arts",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Gwa Gwan",
        "Trad. char.": "剮棍",
        "Cantonese (Jyutping)": "gwaa2 gwan3",
        "Simp. char.": "剐棍",
        "Mandarin (Pinyin)": "guǎ gùn",
        "Meaning(s) in English": "slice/stitching pole",
        "Alternate romanizations/other meanings": "same as \"tiu gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Gwa Jaang",
        "Trad. char.": "掛踭",
        "Cantonese (Jyutping)": "gwaa3 zaang1",
        "Simp. char.": "挂踭",
        "Mandarin (Pinyin)": "guà zhēng",
        "Meaning(s) in English": "hanging elbow deflection/attack",
        "Alternate romanizations/other meanings": "gwai jaang",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gwai Jaang",
        "Trad. char.": "跪踭",
        "Cantonese (Jyutping)": "gwai6 zaang1",
        "Simp. char.": "跪踭",
        "Mandarin (Pinyin)": "guì zhēng",
        "Meaning(s) in English": "kneeling elbow",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Gwan Dou",
        "Trad. char.": "滾刀",
        "Cantonese (Jyutping)": "gwan2 dou1",
        "Simp. char.": "滚刀",
        "Mandarin (Pinyin)": "gǔn dāo",
        "Meaning(s) in English": "rolling knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Gwoh Sau",
        "Trad. char.": "過手",
        "Cantonese (Jyutping)": "gwo3 sau2",
        "Simp. char.": "过手",
        "Mandarin (Pinyin)": "guò shǒu",
        "Meaning(s) in English": "hand passes through or free-attack \"chi sau\" exercise",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Hau Cho Ma",
        "Trad. char.": "後坐馬",
        "Cantonese (Jyutping)": "hau6 zo6/co5 maa5",
        "Simp. char.": "后坐马",
        "Mandarin (Pinyin)": "hòuzuò mǎ",
        "Meaning(s) in English": "back stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Hei Gung",
        "Trad. char.": "氣功",
        "Cantonese (Jyutping)": "hei3 gung1",
        "Simp. char.": "气功",
        "Mandarin (Pinyin)": "qìgōng",
        "Meaning(s) in English": "breathing/energy cultivating exercises",
        "Alternate romanizations/other meanings": "qigong; qigung; chigong; chigung",
        "Tags": "ma, general"
    },
    {
        "English Name (From Cantonese)": "Hei Sik",
        "Trad. char.": "起式",
        "Cantonese (Jyutping)": "hei2 sik1",
        "Simp. char.": "起式",
        "Mandarin (Pinyin)": "qǐ shì",
        "Meaning(s) in English": "starting/opening movements",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Hoi Jong",
        "Trad. char.": "開樁",
        "Cantonese (Jyutping)": "hoi1 zong1",
        "Simp. char.": "开桩",
        "Mandarin (Pinyin)": "kāi zhuāng",
        "Meaning(s) in English": "starting posture/form",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Hoi Ma",
        "Trad. char.": "開馬",
        "Cantonese (Jyutping)": "hoi1 maa5",
        "Simp. char.": "开马",
        "Mandarin (Pinyin)": "kāi mǎ",
        "Meaning(s) in English": "start/open horse stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Hyun Bo",
        "Trad. char.": "圈步",
        "Cantonese (Jyutping)": "hyun1 bou6",
        "Simp. char.": "圈步",
        "Mandarin (Pinyin)": "quān bù",
        "Meaning(s) in English": "circle stepping",
        "Alternate romanizations/other meanings": "huen bo",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Hyun Dou",
        "Trad. char.": "圈刀",
        "Cantonese (Jyutping)": "hyun1 dou1",
        "Simp. char.": "圈刀",
        "Mandarin (Pinyin)": "quān dāo",
        "Meaning(s) in English": "circling knives",
        "Alternate romanizations/other meanings": "huen do",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Hyun Goek",
        "Trad. char.": "圈腳",
        "Cantonese (Jyutping)": "hyun1 goek3",
        "Simp. char.": "圈脚",
        "Mandarin (Pinyin)": "quān jiǎo",
        "Meaning(s) in English": "circling/arching kick",
        "Alternate romanizations/other meanings": "huen goek",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Hyun Gwan",
        "Trad. char.": "圈棍",
        "Cantonese (Jyutping)": "hyun1 gwan3",
        "Simp. char.": "圈棍",
        "Mandarin (Pinyin)": "quān gùn",
        "Meaning(s) in English": "circling pole",
        "Alternate romanizations/other meanings": "huen gwan",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Hyun Ma",
        "Trad. char.": "圈馬",
        "Cantonese (Jyutping)": "hyun1 maa5",
        "Simp. char.": "圈马",
        "Mandarin (Pinyin)": "quān mǎ",
        "Meaning(s) in English": "exchanging/cirlce stance",
        "Alternate romanizations/other meanings": "huen ma",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Hyun Sau",
        "Trad. char.": "圈手",
        "Cantonese (Jyutping)": "hyun1 sau2",
        "Simp. char.": "圈手",
        "Mandarin (Pinyin)": "quān shǒu",
        "Meaning(s) in English": "circling-hand deflection",
        "Alternate romanizations/other meanings": "huen sau; huen sao",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Hyun Tek",
        "Trad. char.": "圈踢",
        "Cantonese (Jyutping)": "hyun1 tek3",
        "Simp. char.": "圈踢",
        "Mandarin (Pinyin)": "quān tī",
        "Meaning(s) in English": "circling/arching kick",
        "Alternate romanizations/other meanings": "huen tek",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Jaam Dou",
        "Trad. char.": "斬刀",
        "Cantonese (Jyutping)": "zaam2 dou1",
        "Simp. char.": "斩刀",
        "Mandarin (Pinyin)": "zhǎn dāo",
        "Meaning(s) in English": "slashing knives; chopping knives;",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Jaang Dai Biu Sau",
        "Trad. char.": "踭底鏢手",
        "Cantonese (Jyutping)": "zaang1 dai2 biu1 sau2",
        "Simp. char.": "踭底镖手",
        "Mandarin (Pinyin)": "zhēng dǐ biāo shǒu",
        "Meaning(s) in English": "under-elbow thrusting/spearing-hand attack",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jaang Faat",
        "Trad. char.": "踭法",
        "Cantonese (Jyutping)": "zaang1 faat3",
        "Simp. char.": "踭法",
        "Mandarin (Pinyin)": "zhēng fǎ",
        "Meaning(s) in English": "elbow techniques",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jak San Ma",
        "Trad. char.": "側身馬",
        "Cantonese (Jyutping)": "zak1 san1 maa5",
        "Simp. char.": "侧身马",
        "Mandarin (Pinyin)": "cèshēn mǎ",
        "Meaning(s) in English": "side neutral/side body stance; ",
        "Alternate romanizations/other meanings": "can also be left 左(jyutping: zo2; pinyin: zuǒ)  and right - 右(jyutping:jau6/jau2; pinyin: yòu)",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Jam Sau",
        "Trad. char.": "沉手",
        "Cantonese (Jyutping)": "cam4 sau2",
        "Simp. char.": "沉手",
        "Mandarin (Pinyin)": "chén shǒu",
        "Meaning(s) in English": "sinking-arm deflection",
        "Alternate romanizations/other meanings": "cham sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jat Dou",
        "Trad. char.": "窒刀",
        "Cantonese (Jyutping)": "zat6 dou1",
        "Simp. char.": "窒刀",
        "Mandarin (Pinyin)": "zhì dāo",
        "Meaning(s) in English": "jerking/dragging/obstructing knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Jat Gwan",
        "Trad. char.": "窒棍",
        "Cantonese (Jyutping)": "zat6 gwan3",
        "Simp. char.": "窒棍",
        "Mandarin (Pinyin)": "zhì gùn",
        "Meaning(s) in English": "jerking/dragging/obstructing pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Jat Sau",
        "Trad. char.": "窒手",
        "Cantonese (Jyutping)": "zat6 sau2",
        "Simp. char.": "窒手",
        "Mandarin (Pinyin)": "zhì shǒu",
        "Meaning(s) in English": "jerking/dragging/obstructing-hand deflection",
        "Alternate romanizations/other meanings": "jut sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Je Lik",
        "Trad. char.": "借力",
        "Cantonese (Jyutping)": "ze3 lik6",
        "Simp. char.": "借力",
        "Mandarin (Pinyin)": "jiè lì",
        "Meaning(s) in English": "stealing/borrowing power concept",
        "Alternate romanizations/other meanings": "jie lik",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Jeung Faat",
        "Trad. char.": "掌法",
        "Cantonese (Jyutping)": "zoeng2 faat3",
        "Simp. char.": "掌法",
        "Mandarin (Pinyin)": "zhǎng fǎ",
        "Meaning(s) in English": "palm techniques",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Ji Wai Sut",
        "Trad. char.": "自衞術",
        "Cantonese (Jyutping)": "zi6 wai6 seot6",
        "Simp. char.": "自卫术",
        "Mandarin (Pinyin)": "zì wèi shù",
        "Meaning(s) in English": "method of self-defence",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Ji Yau Bok Gik",
        "Trad. char.": "自由搏擊",
        "Cantonese (Jyutping)": "zi6 jau4 bok3 gik1",
        "Simp. char.": "自由搏击",
        "Mandarin (Pinyin)": "zì yóu bó jī",
        "Meaning(s) in English": "free sparring or free fighting between two sports fighters",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Jing Jeung",
        "Trad. char.": "正掌",
        "Cantonese (Jyutping)": "zing3/zeng3 zoeng2",
        "Simp. char.": "正掌",
        "Mandarin (Pinyin)": "zhèng zhǎng",
        "Meaning(s) in English": "vertical palm-strike",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jing Tek",
        "Trad. char.": "正踢",
        "Cantonese (Jyutping)": "zing3/zeng3 tek3",
        "Simp. char.": "正踢",
        "Mandarin (Pinyin)": "zhèng tī",
        "Meaning(s) in English": "front kick",
        "Alternate romanizations/other meanings": "",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Jip Sau",
        "Trad. char.": "接手",
        "Cantonese (Jyutping)": "zip3 sau2",
        "Simp. char.": "接手",
        "Mandarin (Pinyin)": "jiēshǒu",
        "Meaning(s) in English": "receiving hand",
        "Alternate romanizations/other meanings": "the arm break using \"tok sau\" and \"jat sau\" in cham kiu; same as \"jit sau\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jit Goek",
        "Trad. char.": "截腳",
        "Cantonese (Jyutping)": "zit6 goek3",
        "Simp. char.": "截脚",
        "Mandarin (Pinyin)": "jié jiǎo",
        "Meaning(s) in English": "intercepting kick",
        "Alternate romanizations/other meanings": "same as \"jit tek\"",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Jit Sau",
        "Trad. char.": "截手",
        "Cantonese (Jyutping)": "zit6 sau2",
        "Simp. char.": "截手",
        "Mandarin (Pinyin)": "jié shǒu",
        "Meaning(s) in English": "snapping-hands attack",
        "Alternate romanizations/other meanings": "the arm break using \"tok sau\" and \"jat sau\" in cham kiu; same as \"jip sau\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jit Tek",
        "Trad. char.": "截踢",
        "Cantonese (Jyutping)": "zit6 tek3",
        "Simp. char.": "截踢",
        "Mandarin (Pinyin)": "jié tī",
        "Meaning(s) in English": "intercepting kick",
        "Alternate romanizations/other meanings": "same as \"jit goek\"",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Juen Ma",
        "Trad. char.": "轉馬",
        "Cantonese (Jyutping)": "zyun2 maa5",
        "Simp. char.": "转马",
        "Mandarin (Pinyin)": "zhuǎn mǎ",
        "Meaning(s) in English": "pivoting/turning footwork",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Jui Ying",
        "Trad. char.": "追形",
        "Cantonese (Jyutping)": "zeoi1 jing4",
        "Simp. char.": "追形",
        "Mandarin (Pinyin)": "zhuī xíng",
        "Meaning(s) in English": "chasing concept",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Jun Ma Chui",
        "Trad. char.": "進馬搥",
        "Cantonese (Jyutping)": "zeon3 maa5 ceoi4",
        "Simp. char.": "进马捶",
        "Mandarin (Pinyin)": "jìn mǎ chuí",
        "Meaning(s) in English": "full front step punching action",
        "Alternate romanizations/other meanings": "same as \"jun ma kyun\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jun Ma Kyun",
        "Trad. char.": "進馬拳",
        "Cantonese (Jyutping)": "zeon3 maa5 kyun4",
        "Simp. char.": "进马拳",
        "Mandarin (Pinyin)": "jìn mǎ quán",
        "Meaning(s) in English": "full front step punching action",
        "Alternate romanizations/other meanings": "same as \"jun ma chuei\"; jun ma kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Jun Yap Gei Sut",
        "Trad. char.": "進入技術",
        "Cantonese (Jyutping)": "zeon3 jap6 gei6 seot6",
        "Simp. char.": "进入技术",
        "Mandarin (Pinyin)": "jìnrù jìshù",
        "Meaning(s) in English": "entry technique",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma, general"
    },
    {
        "English Name (From Cantonese)": "Jung Sam Sin",
        "Trad. char.": "中心線",
        "Cantonese (Jyutping)": "zung1 sam1 sin3",
        "Simp. char.": "中心线",
        "Mandarin (Pinyin)": "zhōng xīn xiàn",
        "Meaning(s) in English": "centreline concept",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Kaau Cha Shi Sau",
        "Trad. char.": "交叉黐手",
        "Cantonese (Jyutping)": "kaau1 caa1 ci1 sau2",
        "Simp. char.": "交叉黐手",
        "Mandarin (Pinyin)": "jiāochā chī shǒu",
        "Meaning(s) in English": "cross arms chi sau",
        "Alternate romanizations/other meanings": "can be random or predetermined",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Kam Gwan",
        "Trad. char.": "冚棍",
        "Cantonese (Jyutping)": "kam2 gwan3",
        "Simp. char.": "冚棍",
        "Mandarin (Pinyin)": "kǎn gùn",
        "Meaning(s) in English": "covering pole",
        "Alternate romanizations/other meanings": "see also \"fook gwan\" or \"tank gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Kap Jaang",
        "Trad. char.": "岌踭",
        "Cantonese (Jyutping)": "kap1 zaang1",
        "Simp. char.": "岌踭",
        "Mandarin (Pinyin)": "jí zhēng",
        "Meaning(s) in English": "perilous/covering elbow",
        "Alternate romanizations/other meanings": "biu ji elbows; same as: 扱踭/級踭",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Kap Jaang",
        "Trad. char.": "扱踭",
        "Cantonese (Jyutping)": "kap1 zaang1",
        "Simp. char.": "扱踭",
        "Mandarin (Pinyin)": "xī zhēng",
        "Meaning(s) in English": "perilous/covering elbow",
        "Alternate romanizations/other meanings": "biu ji elbows; same as: 岌踭/級踭",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Kap Jaang",
        "Trad. char.": "級踭",
        "Cantonese (Jyutping)": "kap1 zaang1",
        "Simp. char.": "级踭",
        "Mandarin (Pinyin)": "jí zhēng",
        "Meaning(s) in English": "perilous/covering elbow",
        "Alternate romanizations/other meanings": "biu ji elbows; same as: 岌踭/扱踭",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Kau Goek",
        "Trad. char.": "扣腳",
        "Cantonese (Jyutping)": "kau3 goek3",
        "Simp. char.": "扣脚",
        "Mandarin (Pinyin)": "kòu jiǎo",
        "Meaning(s) in English": "detaining leg/kick",
        "Alternate romanizations/other meanings": "",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Kau Sau",
        "Trad. char.": "扣手",
        "Cantonese (Jyutping)": "kau3 sau2",
        "Simp. char.": "扣手",
        "Mandarin (Pinyin)": "kòu shǒu",
        "Meaning(s) in English": "detaining hand",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Kiu Sau",
        "Trad. char.": "橋手",
        "Cantonese (Jyutping)": "kiu4 sau2",
        "Simp. char.": "桥手",
        "Mandarin (Pinyin)": "qiáo shǒu",
        "Meaning(s) in English": "bridge arm",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Kwan Sau",
        "Trad. char.": "綑手",
        "Cantonese (Jyutping)": "kwan2 sau2",
        "Simp. char.": "捆手",
        "Mandarin (Pinyin)": "kǔn shǒu",
        "Meaning(s) in English": "rotating-hands deflection; binding hands",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Kyun",
        "Trad. char.": "拳",
        "Cantonese (Jyutping)": "kyun4",
        "Simp. char.": "拳",
        "Mandarin (Pinyin)": "quán",
        "Meaning(s) in English": "fist, punch, or boxing",
        "Alternate romanizations/other meanings": "kuen",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Kyun Hok",
        "Trad. char.": "拳學",
        "Cantonese (Jyutping)": "kyun4 hok6",
        "Simp. char.": "拳学",
        "Mandarin (Pinyin)": "quán xué",
        "Meaning(s) in English": "science of pugilism. combat science",
        "Alternate romanizations/other meanings": "kuen hok",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Laan Dou",
        "Trad. char.": "攔刀",
        "Cantonese (Jyutping)": "laan4 dou1",
        "Simp. char.": "拦刀",
        "Mandarin (Pinyin)": "lán dāo",
        "Meaning(s) in English": "barring knives",
        "Alternate romanizations/other meanings": "lan dou; lan dao; see also \"yat jee do\"",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Laan Goek",
        "Trad. char.": "攔腳",
        "Cantonese (Jyutping)": "laan4 goek3",
        "Simp. char.": "拦脚",
        "Mandarin (Pinyin)": "lán jiǎo",
        "Meaning(s) in English": "barring leg/kick",
        "Alternate romanizations/other meanings": "",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Laan Sau",
        "Trad. char.": "攔手",
        "Cantonese (Jyutping)": "laan4 sau2",
        "Simp. char.": "拦手",
        "Mandarin (Pinyin)": "lán shǒu",
        "Meaning(s) in English": "barrier arm deflection",
        "Alternate romanizations/other meanings": "lan sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Laap Sau",
        "Trad. char.": "擸手",
        "Cantonese (Jyutping)": "laap3 sau2",
        "Simp. char.": "擸手",
        "Mandarin (Pinyin)": "liè shǒu",
        "Meaning(s) in English": "grabbing hand or warding off/deflecting hands exercise",
        "Alternate romanizations/other meanings": "lap sau, lap sao, laap sao, lop sau, lop sao",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Lai Geng Sau",
        "Trad. char.": "拉頸手",
        "Cantonese (Jyutping)": "laai1 geng2 sau2",
        "Simp. char.": "拉颈手",
        "Mandarin (Pinyin)": "lā jǐng shǒu",
        "Meaning(s) in English": "neck pulling hand",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Lat Sau",
        "Trad. char.": "甩手",
        "Cantonese (Jyutping)": "lat1 sau2",
        "Simp. char.": "甩手",
        "Mandarin (Pinyin)": "shuǎishǒu",
        "Meaning(s) in English": "loss of hand contact",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma, general"
    },
    {
        "English Name (From Cantonese)": "Lau Sau",
        "Trad. char.": "漏手",
        "Cantonese (Jyutping)": "lau6 sau2",
        "Simp. char.": "漏手",
        "Mandarin (Pinyin)": "lòu shǒu",
        "Meaning(s) in English": "slipping hand",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Lau Soi",
        "Trad. char.": "流水",
        "Cantonese (Jyutping)": "lau4 seoi2",
        "Simp. char.": "流水",
        "Mandarin (Pinyin)": "liúshuǐ",
        "Meaning(s) in English": "moving/stirring the water",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Leung Gai Duen Kuen Sut",
        "Trad. char.": "兩階段拳術",
        "Cantonese (Jyutping)": "loeng5 gaai1 dyun6 kyun4 seot6",
        "Simp. char.": "两阶段拳术",
        "Mandarin (Pinyin)": "liǎng jiēduàn quánshù",
        "Meaning(s) in English": "2 level punching",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Leung Yi",
        "Trad. char.": "兩移",
        "Cantonese (Jyutping)": "loeng5 ji4",
        "Simp. char.": "两移",
        "Mandarin (Pinyin)": "liǎng yí",
        "Meaning(s) in English": "two moves",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Leung Yi Gwan",
        "Trad. char.": "兩移棍",
        "Cantonese (Jyutping)": "loeng5 ji4 gwan3",
        "Simp. char.": "两移棍",
        "Mandarin (Pinyin)": "liǎng yí gùn",
        "Meaning(s) in English": "2 movement pole",
        "Alternate romanizations/other meanings": "\"fook gwan\" and \"jat gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Lik Chung Dei Hei",
        "Trad. char.": "力從地起",
        "Cantonese (Jyutping)": "lik6 cung4 dei6 hei2",
        "Simp. char.": "力从地起",
        "Mandarin (Pinyin)": "lì cóng dì qǐ",
        "Meaning(s) in English": "power comes from the ground upwards concept",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Lin Siu Daai Da",
        "Trad. char.": "連消帶打",
        "Cantonese (Jyutping)": "lin4 siu1 daai3 daa2",
        "Simp. char.": "连消带打",
        "Mandarin (Pinyin)": "lián xiāo dài dǎ",
        "Meaning(s) in English": "simultaneous attack and defend concept",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Lin Waan Saam Jing Jeung",
        "Trad. char.": "連環三正掌",
        "Cantonese (Jyutping)": "lin4 waan4 saam1 zing3/zeng3 zoeng2",
        "Simp. char.": "连环三正掌",
        "Mandarin (Pinyin)": "liánhuán sān zhèng zhǎng",
        "Meaning(s) in English": "chained 3 straight palms found in cham kiu form",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Lin Wan Kuen",
        "Trad. char.": "連環拳",
        "Cantonese (Jyutping)": "lin4 waan4 kyun4",
        "Simp. char.": "连环拳",
        "Mandarin (Pinyin)": "liánhuán quán",
        "Meaning(s) in English": "chain punch",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Loi Lau, Hoi Sung; Lat Sau Jik Chung",
        "Trad. char.": "來留去送,甩手直衝",
        "Cantonese (Jyutping)": "loi4 lau4 heoi3 sung3, lat1 sau2 zik6 cung1",
        "Simp. char.": "来留去送,甩手直冲",
        "Mandarin (Pinyin)": "lái liú qù sòng, shuǎi shǒu zhí chòng",
        "Meaning(s) in English": "intercept what comes, pursue what departs; when free of obstruction, attack instinctively concept/maxim",
        "Alternate romanizations/other meanings": "",
        "Tags": "concept"
    },
    {
        "English Name (From Cantonese)": "Luk Dim Boon Gwan",
        "Trad. char.": "六點半棍",
        "Cantonese (Jyutping)": "luk6 dim2 bun3 gwan3",
        "Simp. char.": "六点半棍",
        "Mandarin (Pinyin)": "liù diǎn bàn gùn",
        "Meaning(s) in English": "six and a half point pole",
        "Alternate romanizations/other meanings": "luk dim boon kwan; luk dim bun gwan; lok dim boon kwan",
        "Tags": "form, weapon"
    },
    {
        "English Name (From Cantonese)": "Luk Sau",
        "Trad. char.": "碌手",
        "Cantonese (Jyutping)": "luk1 sau2",
        "Simp. char.": "碌手",
        "Mandarin (Pinyin)": "lù shǒu",
        "Meaning(s) in English": "rolling hands",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Luk Sau",
        "Trad. char.": "轆手",
        "Cantonese (Jyutping)": "luk1 sau2",
        "Simp. char.": "辘手",
        "Mandarin (Pinyin)": "lù shǒu",
        "Meaning(s) in English": "rolling hands",
        "Alternate romanizations/other meanings": "same as \"luk sao\"",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Man Sau",
        "Trad. char.": "問手",
        "Cantonese (Jyutping)": "man6 sau2",
        "Simp. char.": "问手",
        "Mandarin (Pinyin)": "wèn shǒu",
        "Meaning(s) in English": "asking-hand deflection/attack",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Mou Dak",
        "Trad. char.": "武德",
        "Cantonese (Jyutping)": "mou5 dak1",
        "Simp. char.": "武德",
        "Mandarin (Pinyin)": "wǔ dé",
        "Meaning(s) in English": "martial arts virtues",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Mui Fa Bo Fat",
        "Trad. char.": "梅花步法",
        "Cantonese (Jyutping)": "mui4 faa1 bou6 faat3",
        "Simp. char.": "梅花步法",
        "Mandarin (Pinyin)": "méihuā bù fǎ",
        "Meaning(s) in English": "plum blossom footwork/steps",
        "Alternate romanizations/other meanings": "refers to the footwork in the Wing Chun system",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Muk Waan",
        "Trad. char.": "木環",
        "Cantonese (Jyutping)": "muk6 waan4",
        "Simp. char.": "木环",
        "Mandarin (Pinyin)": "mù hái",
        "Meaning(s) in English": "wooden ring. A wrist and forearm training tool",
        "Alternate romanizations/other meanings": "mook wan, muk wan",
        "Tags": "general, tool"
    },
    {
        "English Name (From Cantonese)": "Muk Yan Jong",
        "Trad. char.": "木人樁",
        "Cantonese (Jyutping)": "muk6 jan4 zong1",
        "Simp. char.": "木人桩",
        "Mandarin (Pinyin)": "mù rén zhuāng",
        "Meaning(s) in English": "wooden dummy; wooden man; wooden man post",
        "Alternate romanizations/other meanings": "mook yan jong",
        "Tags": "form, tool"
    },
    {
        "English Name (From Cantonese)": "Naat Sau",
        "Trad. char.": "捺手",
        "Cantonese (Jyutping)": "naat6 sau2",
        "Simp. char.": "捺手",
        "Mandarin (Pinyin)": "nà shǒu",
        "Meaning(s) in English": "pressing-down/extinguishing deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Ngau Gok Kuen",
        "Trad. char.": "牛角拳",
        "Cantonese (Jyutping)": "ngau4 gok3 kyun4",
        "Simp. char.": "牛角拳",
        "Mandarin (Pinyin)": "niújiǎo quán",
        "Meaning(s) in English": "cow/ox horn punch",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Ngau Kyun",
        "Trad. char.": "鉤拳",
        "Cantonese (Jyutping)": "ngau1 kyun4",
        "Simp. char.": "钩拳",
        "Mandarin (Pinyin)": "gōu quán",
        "Meaning(s) in English": "hooking punch",
        "Alternate romanizations/other meanings": "biu ji hook; ngau kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Paak Dou",
        "Trad. char.": "拍刀",
        "Cantonese (Jyutping)": "paak3 dou1",
        "Simp. char.": "拍刀",
        "Mandarin (Pinyin)": "pāi dāo",
        "Meaning(s) in English": "slapping knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Paak Sau",
        "Trad. char.": "拍手",
        "Cantonese (Jyutping)": "paak3 sau2",
        "Simp. char.": "拍手",
        "Mandarin (Pinyin)": "pāi shǒu",
        "Meaning(s) in English": "slapping hand exercise",
        "Alternate romanizations/other meanings": "same as the technique name",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Paak Sau",
        "Trad. char.": "拍手",
        "Cantonese (Jyutping)": "paak3 sau2",
        "Simp. char.": "拍手",
        "Mandarin (Pinyin)": "pāi shǒu",
        "Meaning(s) in English": "slapping hand deflection",
        "Alternate romanizations/other meanings": "paak sao; pak sau; pak sao",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Paau Bong",
        "Trad. char.": "拋膀",
        "Cantonese (Jyutping)": "paau1 bong2",
        "Simp. char.": "拋膀",
        "Mandarin (Pinyin)": "pāo bǎng",
        "Meaning(s) in English": "throwing bong sau deflection; throwing wing arm deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Pei Jaang",
        "Trad. char.": "披踭",
        "Cantonese (Jyutping)": "pei1 zaang1",
        "Simp. char.": "披踭",
        "Mandarin (Pinyin)": "pī zhēng",
        "Meaning(s) in English": "hacking elbow attack",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Pin San Ma",
        "Trad. char.": "偏身馬",
        "Cantonese (Jyutping)": "pin1 san1 maa5",
        "Simp. char.": "偏身马",
        "Mandarin (Pinyin)": "piān shēn mǎ",
        "Meaning(s) in English": "side neutral/side body stance; ",
        "Alternate romanizations/other meanings": "can also be left 左(jyutping: zo2; pinyin: zuǒ)  and right - 右(jyutping:jau6/jau2; pinyin: yòu)",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Ping Cheung",
        "Trad. char.": "平槍",
        "Cantonese (Jyutping)": "ping4 coeng1",
        "Simp. char.": "平枪",
        "Mandarin (Pinyin)": "píng qiāng",
        "Meaning(s) in English": "level spearing-action",
        "Alternate romanizations/other meanings": "see also \"ping gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Ping Gwan",
        "Trad. char.": "平棍",
        "Cantonese (Jyutping)": "ping4 gwan3",
        "Simp. char.": "平棍",
        "Mandarin (Pinyin)": "píng gùn",
        "Meaning(s) in English": "lateral pole",
        "Alternate romanizations/other meanings": "see also \"ping cheung\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Po Paai Jeung",
        "Trad. char.": "抱排掌",
        "Cantonese (Jyutping)": "pou5 paai4/paai2 zoeng2",
        "Simp. char.": "抱排掌",
        "Mandarin (Pinyin)": "bào pái zhǎng",
        "Meaning(s) in English": "in-line palms attack",
        "Alternate romanizations/other meanings": "po pai jeung",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Poon Sau",
        "Trad. char.": "盤手",
        "Cantonese (Jyutping)": "pun4 sau2",
        "Simp. char.": "盘手",
        "Mandarin (Pinyin)": "pán shǒu",
        "Meaning(s) in English": "rolling hands",
        "Alternate romanizations/other meanings": "same as \"luk sao\"",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Saam Gok Bo",
        "Trad. char.": "三角步",
        "Cantonese (Jyutping)": "saam1 gok3 bou6",
        "Simp. char.": "三角步",
        "Mandarin (Pinyin)": "sānjiǎo bù",
        "Meaning(s) in English": "triangular advancing/retreating footwork",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Saam Gok Ma",
        "Trad. char.": "三角馬",
        "Cantonese (Jyutping)": "saam1 gok3 maa5",
        "Simp. char.": "三角马",
        "Mandarin (Pinyin)": "sānjiǎo mǎ",
        "Meaning(s) in English": "triangular advancing/retreating stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Sap Dai Seung",
        "Trad. char.": "拾底上",
        "Cantonese (Jyutping)": "sap6 dai2 soeng6/soeng5",
        "Simp. char.": "拾底上",
        "Mandarin (Pinyin)": "shí dǐ shàng",
        "Meaning(s) in English": "lifting from below to above deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Sat Geng Sau",
        "Trad. char.": "殺頸手",
        "Cantonese (Jyutping)": "saat3 geng2 sau2",
        "Simp. char.": "杀颈手",
        "Mandarin (Pinyin)": "shā jǐng shǒu",
        "Meaning(s) in English": "neck killing hand",
        "Alternate romanizations/other meanings": "same as \"fat sau\";",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Sat Gik",
        "Trad. char.": "膝擊",
        "Cantonese (Jyutping)": "sat1 gik1",
        "Simp. char.": "膝击",
        "Mandarin (Pinyin)": "xī jī",
        "Meaning(s) in English": "kneeing attacks",
        "Alternate romanizations/other meanings": "",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Sau Kyun",
        "Trad. char.": "收拳",
        "Cantonese (Jyutping)": "sau1 kyun4",
        "Simp. char.": "收拳",
        "Mandarin (Pinyin)": "shōu quán",
        "Meaning(s) in English": "chamber the fist",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Sei Ping Daai Ma",
        "Trad. char.": "四平大馬",
        "Cantonese (Jyutping)": "sei3 ping4 daai6 maa5",
        "Simp. char.": "四平大马",
        "Mandarin (Pinyin)": "sì píng dà mǎ",
        "Meaning(s) in English": "four level wide stance; low horse stance.",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Seuk Sau",
        "Trad. char.": "削手",
        "Cantonese (Jyutping)": "soek3 sau2",
        "Simp. char.": "削手",
        "Mandarin (Pinyin)": "xuē shǒu",
        "Meaning(s) in English": "scraping/shaving-hand deflection",
        "Alternate romanizations/other meanings": "shuk sau; senk sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Seung Chi Sau",
        "Trad. char.": "雙黐手",
        "Cantonese (Jyutping)": "soeng1 ci1 sau2",
        "Simp. char.": "双黐手",
        "Mandarin (Pinyin)": "shuāng chī shǒu",
        "Meaning(s) in English": "double hand \"chi sau\" exercise",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Seung Ma",
        "Trad. char.": "上馬",
        "Cantonese (Jyutping)": "soeng5 maa5",
        "Simp. char.": "上马",
        "Mandarin (Pinyin)": "shàng mǎ",
        "Meaning(s) in English": "forward attacking footwork",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Seung Sau Chi Sau",
        "Trad. char.": "雙手黐手",
        "Cantonese (Jyutping)": "soeng1 sau2 ci1 sau2",
        "Simp. char.": "双手黐手",
        "Mandarin (Pinyin)": "shuāngshǒu chī shǒu",
        "Meaning(s) in English": "double arm chi sau",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill"
    },
    {
        "English Name (From Cantonese)": "Sifu",
        "Trad. char.": "師傅",
        "Cantonese (Jyutping)": "si1 fu2",
        "Simp. char.": "师傅",
        "Mandarin (Pinyin)": "shī fu",
        "Meaning(s) in English": "master or qualified worker. Taiwan: 師父",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Sik Wai",
        "Trad. char.": "食位",
        "Cantonese (Jyutping)": "sik6 wai6/wai2",
        "Simp. char.": "食位",
        "Mandarin (Pinyin)": "shí wèi",
        "Meaning(s) in English": "consume space",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Siu Nim Tau",
        "Trad. char.": "小念頭",
        "Cantonese (Jyutping)": "siu2 nim6 tau4",
        "Simp. char.": "小念头",
        "Mandarin (Pinyin)": "xiǎo niàn tou",
        "Meaning(s) in English": "young idea; little idea; tiny idea;",
        "Alternate romanizations/other meanings": "siu lim tao; siu nim tao; siu lim tau; siu leem tao",
        "Tags": "form"
    },
    {
        "English Name (From Cantonese)": "So Tui",
        "Trad. char.": "掃腿",
        "Cantonese (Jyutping)": "sou3 teoi2",
        "Simp. char.": "扫腿",
        "Mandarin (Pinyin)": "sǎo tuǐ",
        "Meaning(s) in English": "sweeping-leg kick",
        "Alternate romanizations/other meanings": "",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Soh Sau",
        "Trad. char.": "梭手",
        "Cantonese (Jyutping)": "so1 sau2",
        "Simp. char.": "梭手",
        "Mandarin (Pinyin)": "suō shǒu",
        "Meaning(s) in English": "pressing/covering palm deflection",
        "Alternate romanizations/other meanings": "same as \"gaam sau\"",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Taan Dou",
        "Trad. char.": "攤刀",
        "Cantonese (Jyutping)": "taan1 dou1",
        "Simp. char.": "摊刀",
        "Mandarin (Pinyin)": "tān dāo",
        "Meaning(s) in English": "spreading/spreading knives",
        "Alternate romanizations/other meanings": "tan dou; tan dao; taan dao",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Taan Gwan",
        "Trad. char.": "攤棍",
        "Cantonese (Jyutping)": "taan1 gwan3",
        "Simp. char.": "摊棍",
        "Mandarin (Pinyin)": "tān gùn",
        "Meaning(s) in English": "spreading-pole deflection",
        "Alternate romanizations/other meanings": "same as \"tang leung cheung\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Taan Sau",
        "Trad. char.": "攤手",
        "Cantonese (Jyutping)": "taan1 sau2",
        "Simp. char.": "摊手",
        "Mandarin (Pinyin)": "tān shǒu",
        "Meaning(s) in English": "spreading-hand deflection",
        "Alternate romanizations/other meanings": "tan sau; tan sao; taan sao",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Tai Gwan",
        "Trad. char.": "提棍",
        "Cantonese (Jyutping)": "tai4 gwan3",
        "Simp. char.": "提棍",
        "Mandarin (Pinyin)": "tí gùn",
        "Meaning(s) in English": "ascending/lifting pole",
        "Alternate romanizations/other meanings": "see also \"dang gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Tang Leung Cheung",
        "Trad. char.": "騰龍槍",
        "Cantonese (Jyutping)": "tang4 lung4 coeng1 ",
        "Simp. char.": "腾龙枪",
        "Mandarin (Pinyin)": "ténglóng qiāng",
        "Meaning(s) in English": "rising/soaring dragon spreading action",
        "Alternate romanizations/other meanings": "same as \"taan gwan\"",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Tit Jeung Gung",
        "Trad. char.": "鐵掌功",
        "Cantonese (Jyutping)": "tit3 zoeng2 gung1",
        "Simp. char.": "铁掌功",
        "Mandarin (Pinyin)": "tiě zhǎng gōng",
        "Meaning(s) in English": "iron palm training",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma, drill, hand"
    },
    {
        "English Name (From Cantonese)": "Tit Saa Ngoi Siu Tui",
        "Trad. char.": "鐵沙外小腿",
        "Cantonese (Jyutping)": "tit3 saa1 ngoi6 siu2 teoi2",
        "Simp. char.": "铁沙外小腿",
        "Mandarin (Pinyin)": "tiě shā wài xiǎotuǐ",
        "Meaning(s) in English": "iron shin training",
        "Alternate romanizations/other meanings": "",
        "Tags": "drill, leg"
    },
    {
        "English Name (From Cantonese)": "Tiu Gwan",
        "Trad. char.": "挑棍",
        "Cantonese (Jyutping)": "tiu1 gwan3",
        "Simp. char.": "挑棍",
        "Mandarin (Pinyin)": "tiāo gùn",
        "Meaning(s) in English": "pushing up pole",
        "Alternate romanizations/other meanings": "",
        "Tags": "pole, weapon"
    },
    {
        "English Name (From Cantonese)": "Tok Sau",
        "Trad. char.": "托手",
        "Cantonese (Jyutping)": "tok3 sau2",
        "Simp. char.": "托手",
        "Mandarin (Pinyin)": "tuōshǒu",
        "Meaning(s) in English": "uplifting hand",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Tong",
        "Trad. char.": "堂",
        "Cantonese (Jyutping)": "tong4",
        "Simp. char.": "堂",
        "Mandarin (Pinyin)": "táng",
        "Meaning(s) in English": "class or hall; used to refer to a training hall or studio, e.g., \"詠春堂\" (wing chun tong) used in signage",
        "Alternate romanizations/other meanings": "",
        "Tags": "general"
    },
    {
        "English Name (From Cantonese)": "Tong Dou",
        "Trad. char.": "劏刀",
        "Cantonese (Jyutping)": "tong1 dou1",
        "Simp. char.": "劏刀",
        "Mandarin (Pinyin)": "tāng dāo",
        "Meaning(s) in English": "butchering/slaughtering knives",
        "Alternate romanizations/other meanings": "",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Tou Lou",
        "Trad. char.": "套路",
        "Cantonese (Jyutping)": "tou3 lou6",
        "Simp. char.": "套路",
        "Mandarin (Pinyin)": "tào lù",
        "Meaning(s) in English": "\"taolu\" is the popular term for form (or kata) in wushu",
        "Alternate romanizations/other meanings": "",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Tso Gwat Sau",
        "Trad. char.": "錯骨手",
        "Cantonese (Jyutping)": "co3 gwat1 sau2",
        "Simp. char.": "错骨手",
        "Mandarin (Pinyin)": "cuò gǔ shǒu",
        "Meaning(s) in English": "interlocked bone hands",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Tui Ma",
        "Trad. char.": "退馬",
        "Cantonese (Jyutping)": "teoi3 maa5",
        "Simp. char.": "退马",
        "Mandarin (Pinyin)": "tuì mǎ",
        "Meaning(s) in English": "defensive (side-stepping/retreating) footwork",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork"
    },
    {
        "English Name (From Cantonese)": "Tyut Sau",
        "Trad. char.": "脫手",
        "Cantonese (Jyutping)": "tyut3 sau2",
        "Simp. char.": "脱手",
        "Mandarin (Pinyin)": "tuō shǒu",
        "Meaning(s) in English": "take off hand",
        "Alternate romanizations/other meanings": "tuet sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Waang Geuk",
        "Trad. char.": "橫腳",
        "Cantonese (Jyutping)": "waang4 goek3",
        "Simp. char.": "橫腳",
        "Mandarin (Pinyin)": "héng jiǎo",
        "Meaning(s) in English": "horizontal (side) kick",
        "Alternate romanizations/other meanings": "wang guk; wang gerk",
        "Tags": "leg"
    },
    {
        "English Name (From Cantonese)": "Waang Jeung",
        "Trad. char.": "橫掌",
        "Cantonese (Jyutping)": "waang4 zoeng2",
        "Simp. char.": "横掌",
        "Mandarin (Pinyin)": "héng zhǎng",
        "Meaning(s) in English": "horizontal palm-strike",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Waat Ngaan",
        "Trad. char.": "挖眼",
        "Cantonese (Jyutping)": "waa1 ngaan5",
        "Simp. char.": "挖眼",
        "Mandarin (Pinyin)": "wā yǎn",
        "Meaning(s) in English": "eye-gouge attack",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Wing Chun",
        "Trad. char.": "詠春",
        "Cantonese (Jyutping)": "wing6 ceon1",
        "Simp. char.": "咏春",
        "Mandarin (Pinyin)": "yǒng chūn",
        "Meaning(s) in English": "spring chant or singing spring",
        "Alternate romanizations/other meanings": "ving tsun",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Wing Chun Kyun",
        "Trad. char.": "詠春拳",
        "Cantonese (Jyutping)": "wing6 ceon1 kyun4",
        "Simp. char.": "咏春拳",
        "Mandarin (Pinyin)": "yǒng chūn quán",
        "Meaning(s) in English": "singing spring fist. Refers to the martial art \"wing chun\"",
        "Alternate romanizations/other meanings": "wing chun kuen; ving tsun kuen",
        "Tags": "ma"
    },
    {
        "English Name (From Cantonese)": "Wong Shun Leung",
        "Trad. char.": "黃淳樑",
        "Cantonese (Jyutping)": "wong4 seon4 loeng4",
        "Simp. char.": "黄淳梁",
        "Mandarin (Pinyin)": "Huáng Chún Liáng",
        "Meaning(s) in English": "Wong Seun Leung (1935-1997), was a notable student of Ip Man, having earned the nickname \"Gong Sau Wong\"",
        "Alternate romanizations/other meanings": "Wong Seun Leung",
        "Tags": "general, name, practitioner"
    },
    {
        "English Name (From Cantonese)": "Wu Sau",
        "Trad. char.": "護手",
        "Cantonese (Jyutping)": "wu6 sau2",
        "Simp. char.": "护手",
        "Mandarin (Pinyin)": "hù shǒu",
        "Meaning(s) in English": "guarding-hand deflection",
        "Alternate romanizations/other meanings": "woo sau",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Yap Ma Bo Fat",
        "Trad. char.": "入馬步法",
        "Cantonese (Jyutping)": "jap6 maa5 bou6 faat3",
        "Simp. char.": "入马步法",
        "Mandarin (Pinyin)": "rù mǎbùfǎ",
        "Meaning(s) in English": "entering horse footwork",
        "Alternate romanizations/other meanings": "found in the wooden dummy",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Yat Ji Dou",
        "Trad. char.": "一字刀",
        "Cantonese (Jyutping)": "jat1 zi6 dou1",
        "Simp. char.": "一字刀",
        "Mandarin (Pinyin)": "yī zì dāo",
        "Meaning(s) in English": "character 1 knives",
        "Alternate romanizations/other meanings": "see also \"lan do\"",
        "Tags": "swords, weapon"
    },
    {
        "English Name (From Cantonese)": "Yat Ji Jung Kyun",
        "Trad. char.": "日字縱拳",
        "Cantonese (Jyutping)": "jat6 zi6 zung3 kyun4",
        "Simp. char.": "日字纵拳",
        "Mandarin (Pinyin)": "rì zì zòng quán",
        "Meaning(s) in English": "sun-character (basic vertical) fist/punch",
        "Alternate romanizations/other meanings": "yat ji chung kuen; yat ji jung kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Yat Ji Kyun",
        "Trad. char.": "日字拳",
        "Cantonese (Jyutping)": "jat6 zi6 kyun4",
        "Simp. char.": "日字拳",
        "Mandarin (Pinyin)": "rì zì quán",
        "Meaning(s) in English": "sun-character fist/punch",
        "Alternate romanizations/other meanings": "yat ji kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Yi Bong",
        "Trad. char.": "移膀",
        "Cantonese (Jyutping)": "ji4 bong2",
        "Simp. char.": "移膀",
        "Mandarin (Pinyin)": "yí bǎng",
        "Meaning(s) in English": "shifting bong sau deflection; shifting wing arm deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Yi Gung Wai Sau",
        "Trad. char.": "以攻為守",
        "Cantonese (Jyutping)": "ji5 gung1 wai4/wai6 sau2",
        "Simp. char.": "以攻为守",
        "Mandarin (Pinyin)": "yǐ gōng wéi shǒu",
        "Meaning(s) in English": "proverb: attacking in order to defend",
        "Alternate romanizations/other meanings": "not to be confused with \"lin siu daai da\"",
        "Tags": "concept, proverb"
    },
    {
        "English Name (From Cantonese)": "Yi Ji Kim Yeung Ma",
        "Trad. char.": "二字拑羊馬",
        "Cantonese (Jyutping)": "ji6 zi6 kim4 joeng4 maa5",
        "Simp. char.": "二字钳羊马",
        "Mandarin (Pinyin)": "èr zì qián yáng mǎ",
        "Meaning(s) in English": "character-two goat gripping stance; goat clamping stance",
        "Alternate romanizations/other meanings": "",
        "Tags": "footwork, stance"
    },
    {
        "English Name (From Cantonese)": "Yi Sau Wai Gung",
        "Trad. char.": "以守為攻",
        "Cantonese (Jyutping)": "ji5 sau2 wai4/wai6 gung1",
        "Simp. char.": "以守为攻",
        "Mandarin (Pinyin)": "yǐ shǒu wéi gōng",
        "Meaning(s) in English": "defending in order to attack",
        "Alternate romanizations/other meanings": "variation of \"yi gung wai sau\"",
        "Tags": "concept, proverb"
    },
    {
        "English Name (From Cantonese)": "Yi Ying Sau",
        "Trad. char.": "移形手",
        "Cantonese (Jyutping)": "ji4 jing4 sau2",
        "Simp. char.": "移形手",
        "Mandarin (Pinyin)": "yí xíng shǒu",
        "Meaning(s) in English": "shape-recovering hand deflection",
        "Alternate romanizations/other meanings": "",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Yin Kuen",
        "Trad. char.": "弦拳",
        "Cantonese (Jyutping)": "jin4 kyun4",
        "Simp. char.": "弦拳",
        "Mandarin (Pinyin)": "xián quán",
        "Meaning(s) in English": "chord punch",
        "Alternate romanizations/other meanings": "suen kuen",
        "Tags": "hand"
    },
    {
        "English Name (From Cantonese)": "Yip Man",
        "Trad. char.": "葉問",
        "Cantonese (Jyutping)": "jip6 man6",
        "Simp. char.": "叶问",
        "Mandarin (Pinyin)": "Yè Wèn",
        "Meaning(s) in English": "Yip Man (1893-1972), or Ip Man, was a renowned martial arts practitioner of wing chun",
        "Alternate romanizations/other meanings": "",
        "Tags": "general, name, practitioner"
    }
];

var formsData = wingChun.filter(f => f.Tags.includes('form'));
var footworkData = wingChun.filter(f => f.Tags.includes('footwork'));
var handData = wingChun.filter(f => f.Tags.includes('hand'));
var legData = wingChun.filter(f => f.Tags.includes('leg'));
var drillsData = wingChun.filter(f => f.Tags.includes('drill'));
var conceptsData = wingChun.filter(f => f.Tags.includes('concept'));
var poleData = wingChun.filter(f => f.Tags.includes('pole'));
var swordsData = wingChun.filter(f => f.Tags.includes('swords'));
var maData = wingChun.filter(f => f.Tags.includes('ma'));
var generalData = wingChun.filter(f => f.Tags.includes('general'));

complete = document.getElementById('wingChunContainer');
if (complete !== null)
	complete.insertAdjacentHTML('beforeend',json2Table(wingChun, 'wingChunInput', 'wingChunTable', false));

forms = document.getElementById('formsContainer');
if (forms !== null)
	forms.insertAdjacentHTML('beforeend',json2Table(formsData, 'formsInput', 'formsTable', true));

footwork = document.getElementById('footworkContainer');
if (footwork !== null)
	footwork.insertAdjacentHTML('beforeend',json2Table(footworkData, 'footworkInput', 'footworkTable', true));

hand = document.getElementById('handTechniquesContainer');
if (hand !== null)
	hand.insertAdjacentHTML('beforeend',json2Table(handData, 'handTechniquesInput', 'handTechniquesTable', true));

leg = document.getElementById('legTechniquesContainer');
if (leg !== null)
	leg.insertAdjacentHTML('beforeend',json2Table(legData, 'legTechniquesInput', 'legTechniquesTable', true));

pole = document.getElementById('poleTechniquesContainer');
if (pole !== null)
	pole.insertAdjacentHTML('beforeend',json2Table(poleData, 'poleTechniquesInput', 'poleTechniquesTable', true));

swords = document.getElementById('swordsTechniquesContainer');
if (swords !== null)
	swords.insertAdjacentHTML('beforeend',json2Table(swordsData, 'swordsTechniquesInput', 'swordsTechniquesTable', true));

drills = document.getElementById('drillsContainer');
if (drills !== null)
	drills.insertAdjacentHTML('beforeend',json2Table(drillsData, 'drillsInput', 'drillsTable', true));

concepts = document.getElementById('conceptsContainer');
if (concepts !== null)
	concepts.insertAdjacentHTML('beforeend',json2Table(conceptsData, 'conceptsInput', 'conceptsTable', true));

ma = document.getElementById('martialArtsContainer');
if (ma !== null)
	ma.insertAdjacentHTML('beforeend',json2Table(maData, 'martialArtsInput', 'martialArtsTable', true));

general = document.getElementById('generalContainer');
if (general !== null)
	general.insertAdjacentHTML('beforeend',json2Table(generalData, 'generalInput', 'generalTable', true));
