global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "رضيع", level: 0 }, { name: "مبتدئ", level: 4 }, 
      { name: "ماهر", level: 8 }, { name: "القادر علي التحدي", level: 12 }, 
      { name: "يتقن", level: 16 }, { name: "المطرشم", level: 20 }, 
      { name: "بطل", level: 24 }, { name: "العالمي", level: 28 }, 
      { name: "اسطوره", level: 32 }, { name: "خرافة", level: 36 },
      { name: "ساحر", level: 48 }, { name: "الساحر القوي", level: 52 }, 
      { name: "حكيم", level: 56 }, { name: "فاحر", level: 60 }, 
      { name: "عم الكل", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}