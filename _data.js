// 8 RPG 角色数据 — 名字(英文) + 中文绰号 + 中文背景 + 属性 + 4 视角图
window.CHARACTERS = [
  {
    id: "astronaut",
    name: "Vega-7",
    nick: "深空之盾",
    className: "坦克 / 先锋",
    role: "重装防御",
    color: "#00FF88",
    quote: "前线，永不后退。",
    bg: "身穿白甲的科幻老兵,曾是一名深空打捞飞行员。飞船在星云伏击中被摧毁后,他加入先锋军团,誓死守护边疆殖民地。",
    stats: {
      STR: 92, DEF: 88, AGI: 41, INT: 65, LCK: 53
    },
    skills: ["Plasma Shield", "Rocket Anchor", "Healing Pulse"],
    weapons: ["Plasma Rifle", "Energy Buckler"],
    apng: true,
    klingAnim: true,
  },
  {
    id: "street_kid",
    name: "Kai Hiro",
    nick: "霓虹小子",
    className: "主角 / 拾荒者",
    role: "全能战士",
    color: "#FFB300",
    quote: "这座城市罩着我,我罩着它。",
    bg: "出生在第七区的霓虹贫民窟,从小就会黑进自动售货机、躲避公司的安保无人机。如今是自由快递员,熟悉城市每一条暗巷。",
    stats: {
      STR: 55, DEF: 48, AGI: 78, INT: 71, LCK: 84
    },
    skills: ["Quick Hack", "Drone Deploy", "Dash"],
    weapons: ["EMP Pistol", "Grappling Hook"],
    apng: true,
    klingAnim: true,
  },
  {
    id: "mech_pilot",
    name: "Crimson Vex",
    nick: "血红怒火",
    className: "狂战士 / 格斗家",
    role: "近战输出",
    color: "#FF3366",
    quote: "疼痛,只是身体的反馈。",
    bg: "「鬼计划」的前军事实验体。项目关停后,她带着滚烫的红色神经植入物越狱而出——以及永不冷却的怒火。",
    stats: {
      STR: 95, DEF: 62, AGI: 67, INT: 38, LCK: 49
    },
    skills: ["Berserk Rage", "Roundhouse Kick", "Shoulder Charge"],
    weapons: ["Plasma Gauntlets", "Shock Tonfa"],
    klingAnim: true,
  },
  {
    id: "cyber_samurai_f",
    name: "Akari",
    nick: "月影剑姬",
    className: "输出 / 剑圣",
    role: "远近双修输出",
    color: "#FF6EC7",
    quote: "双刀在手,绝无犹豫。",
    bg: "月影一族最后的继承人——机械改造的浪人,把宗族的复仇带进了霓虹时代。手持陨石矿锻造的双子等离子武士刀。",
    stats: {
      STR: 81, DEF: 54, AGI: 92, INT: 69, LCK: 76
    },
    skills: ["Blade Cyclone", "Shadow Step", "Iaijutsu Strike"],
    weapons: ["Twin Plasma Katanas", "Smoke Bombs"],
    klingAnim: true,
  },
  {
    id: "mage",
    name: "Lyris Starweave",
    nick: "织星法师",
    className: "法师 / 元素使",
    role: "远程输出",
    color: "#00D4FF",
    quote: "星辰在听,我也在听。",
    bg: "12 岁就从以太学院毕业的天才少女,因研究禁忌的时间魔法被放逐。如今游走于荒野,带着她有意识的契约灵,绘制奥术地脉图。",
    stats: {
      STR: 24, DEF: 41, AGI: 58, INT: 98, LCK: 72
    },
    skills: ["Arcane Bolt", "Time Slow", "Starfall"],
    weapons: ["Crystal Staff", "Spellbook"],
    klingAnim: true,
  },
  {
    id: "archer",
    name: "Sylph Windrider",
    nick: "风语游侠",
    className: "游侠 / 神射手",
    role: "远程输出",
    color: "#88E0A0",
    quote: "我从无虚发。即使我想,也偏不了。",
    bg: "村落被焚毁后由森林精灵抚养长大。她精通森语,跨大陆追踪猎物,200 米外能一箭穿钥。",
    stats: {
      STR: 58, DEF: 49, AGI: 88, INT: 74, LCK: 80
    },
    skills: ["Aimed Shot", "Volley", "Eagle Eye"],
    weapons: ["Longbow 'Whisperwind'", "Quiver of Tracking Arrows"],
    klingAnim: true,
  },
  {
    id: "cleric",
    name: "Solace the Bright",
    nick: "黎明圣者",
    className: "牧师 / 治疗者",
    role: "辅助",
    color: "#FFD700",
    quote: "光明,总能找到出路。",
    bg: "来自黎明寺院的行脚僧侣。一次神谕让他看见即将降临的黑暗,他便出发召集同伴——誓保日落之后,仍有一盏灯不灭。",
    stats: {
      STR: 49, DEF: 64, AGI: 52, INT: 91, LCK: 78
    },
    skills: ["Heal", "Divine Shield", "Resurrect"],
    weapons: ["Golden Staff", "Holy Reliquary"],
    klingAnim: true,
  },
  {
    id: "rogue",
    name: "Vesper Quill",
    nick: "暮夜掠影",
    className: "盗贼 / 渗透者",
    role: "单体爆发",
    color: "#B967FF",
    quote: "你看不见我来,也看不见我走。",
    bg: "亡国前太子,如今是三块大陆上头号通缉窃贼。只偷贪官污吏,事成留一张紫色名片。",
    stats: {
      STR: 65, DEF: 47, AGI: 96, INT: 81, LCK: 87
    },
    skills: ["Backstab", "Smoke Bomb", "Stealth"],
    weapons: ["Twin Shadow Daggers", "Throwing Stars"],
    klingAnim: true,
  },
];
