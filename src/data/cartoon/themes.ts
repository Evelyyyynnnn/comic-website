export interface CartoonImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  bio?: string;
  lookingFor?: string;
  funFact?: string;
  tags?: string[];
}

export interface CartoonTheme {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishDate: string;
  coverImage: string;
  imageCount: number;
  images: CartoonImage[];
  tags: string[];
}

// 按照指定顺序重新排列主题
export const cartoonThemes: CartoonTheme[] = [
  // 1. Seasons in a Tea
  {
    id: "seasons-in-tea",
    title: "Seasons in a Tea",
    description: "Seasons in a Tea captures the harmony of nature and tradition, where each cup reflects the beauty of spring blossoms, summer breeze, autumn harvest, and winter serenity. A celebration of life's fleeting moments through the timeless ritual of tea.",
    category: "Traditional Art",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 30,
    images: [
      { id: 1, src: "cartoons/chinese-traditional-style/1.png", alt: "Spring Blossoms in Tea", caption: "Mochachunlan" },
      { id: 2, src: "cartoons/chinese-traditional-style/2.png", alt: "Summer Breeze Through Bamboo", caption: "Hupowanxia" },
      { id: 3, src: "cartoons/chinese-traditional-style/4.png", alt: "Winter Serenity", caption: "Chuxueqingyin" },
      { id: 4, src: "cartoons/chinese-traditional-style/5.png", alt: "Morning Dew on Lotus", caption: "Youxiangyehua" },
      { id: 5, src: "cartoons/chinese-traditional-style/6.png", alt: "Afternoon Tea Ceremony", caption: "Qingjingguang" },
      { id: 6, src: "cartoons/chinese-traditional-style/7.png", alt: "Evening Reflection", caption: "Songfengyulu" },
      { id: 7, src: "cartoons/chinese-traditional-style/8.png", alt: "Night Blooming Flowers", caption: "Lihechun" },
      { id: 8, src: "cartoons/chinese-traditional-style/9.png", alt: "Dawn Mist Rising", caption: "Honglouyimeng" },
      { id: 9, src: "cartoons/chinese-traditional-style/2421F0E5-B851-443E-B81D-B812411DC674.png", alt: "Butterflies in the Garden", caption: "Taoyaorenjian" },
      { id: 10, src: "cartoons/chinese-traditional-style/4B8F61C7-B98B-4099-B841-2C4293CA167F.png", alt: "Pine Trees in Winter", caption: "Songheyannian" },
      { id: 11, src: "cartoons/chinese-traditional-style/57FDDAF2-904C-49CC-AA28-CA8115BF8AD9.png", alt: "Plum Blossoms in Snow", caption: "Xueyefangge" },
      { id: 12, src: "cartoons/chinese-traditional-style/67D16B98-E91A-4596-B875-E55A29DFD69E.png", alt: "Bamboo Forest Path", caption: "Cuizhutingyu" },
      { id: 13, src: "cartoons/chinese-traditional-style/70024E06-A6AC-48A3-8589-F0DCA986C8D3.png", alt: "Tea House by the Lake", caption: "Qiushuichangtian" },
      { id: 14, src: "cartoons/chinese-traditional-style/7AD0C947-834E-4311-8745-AE70C1F45950.png", alt: "Floating Clouds", caption: "Fengheyueying" },
      { id: 15, src: "cartoons/chinese-traditional-style/D54E7770-4F88-4715-8DE3-9C09D517EF0C.png", alt: "Autumn Maple Leaves", caption: "Ziyuanmengjing" },
      { id: 16, src: "cartoons/chinese-traditional-style/D5F4CA3C-C2B4-4EB1-A17A-399EA06D5020.png", alt: "Winter Solitude", caption: "Yuexiaqingyin" },
      { id: 17, src: "cartoons/chinese-traditional-style/D7868A0D-D57E-442A-97CE-6174E4C218AA.png", alt: "Birds in Flight", caption: "Yunshuijianxin" },
      { id: 18, src: "cartoons/chinese-traditional-style/DCC0716B-B2E9-43F3-989C-BA399D987A02.png", alt: "Fish in the Stream", caption: "Yuyujiangnan" },
      { id: 19, src: "cartoons/chinese-traditional-style/E43D9C7E-1E0D-46D5-97BE-D03F088D0597.png", alt: "Dragon in the Clouds", caption: "Lantingqingzhuo" },
      { id: 20, src: "cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png", alt: "Phoenix Rising", caption: "Chuxueqingyin" }
    ],
    tags: ["Tea Culture", "Seasons", "Nature", "Tradition", "Harmony", "Zen", "Cultural Heritage"]
  },
  {
    id: "dating-objects",
    title: "Randomly Choose Your Dating Partners in NYC",
    description: "Love it—here are playful, Tinder-style bios for each character! Explore modern dating culture through these charming NYC personalities, each with their own unique story and dating style.",
    category: "Social Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 5,
    images: [
      { 
        id: 1, 
        src: "cartoons/dating-partner/A7E45C03-BC9E-4907-8EFE-B0DF0318261B.png", 
        alt: "Briefcase Gentleman", 
        caption: "Briefcase Gentleman",
        bio: "9–5 on paper, 7–11 for the people I love. I iron my shirts, pay my bills on time, and will always walk you to the subway.",
        lookingFor: "Someone who appreciates steady plans and sneaky weekend matinees.",
        funFact: "I still use a paper planner—and remember anniversaries.",
        tags: ["Reliable", "Traditional", "Quietly funny"]
      },
      { 
        id: 2, 
        src: "cartoons/dating-partner/IMG_0065.JPG", 
        alt: "OPT Warrior", 
        caption: "OPT Warrior",
        bio: "Visa in one hand, résumé in the other. Coffee-powered dreamer building a future that has both of us in it.",
        lookingFor: "A patient co-pilot who's cool with interviews, ramen, and late-night LinkedIn scrolls.",
        funFact: "Can turn any rejection into a growth story in under 30 seconds.",
        tags: ["Ambitious", "Resilient", "Soft-hearted"]
      },
      { 
        id: 3, 
        src: "cartoons/dating-partner/IMG_0066.JPG", 
        alt: "Supermarket King", 
        caption: "Supermarket King",
        bio: "Costco royalty. I come with bulk snacks, bulk kindness, and the best employee discount this side of Queens.",
        lookingFor: "Someone who laughs at dad jokes and isn't afraid of a 48-pack of LaCroix.",
        funFact: "I can navigate any aisle like Google Maps.",
        tags: ["Warm", "Approachable", "Community guy"]
      },
      { 
        id: 4, 
        src: "cartoons/dating-partner/IMG_0067.JPG", 
        alt: "PhD Research Type", 
        caption: "PhD Research Type",
        bio: "Lab by day, theories by night. I'll cite three papers to explain why you're amazing—and bring you coffee while I do it.",
        lookingFor: "A co-author for life who loves deep talks and museum dates.",
        funFact: "My idea of flirting is sending you a beautifully annotated PDF.",
        tags: ["Intellectual", "Thoughtful", "Low-key romantic"]
      },
      { 
        id: 5, 
        src: "cartoons/dating-partner/IMG_0068.JPG", 
        alt: "Candidate No. 4 (Plaid Academic)", 
        caption: "Candidate No. 4 (Plaid Academic)",
        bio: "Spreadsheet soul, plaid heart. I read the fine print so you don't have to.",
        lookingFor: "Someone steady, kind, and into cozy routines with occasional spontaneous dumpling runs.",
        funFact: "My love language is fixing your Wi-Fi and proofreading your texts.",
        tags: ["Practical", "Loyal", "Understated sweet"]
      }
    ],
    tags: ["Dating", "Modern Life", "Romance", "Social", "NYC", "Tinder", "Personalities", "Character Profiles"]
  },
  {
    id: "finding-ins-friends",
    title: "Finding Instagram Friends",
    description: "Building connections in the digital age through social media. This series explores the journey of making friends on Instagram, from discovering shared interests to building meaningful relationships in the virtual world. Each illustration captures the essence of modern friendship-building through digital platforms.",
    category: "Social Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 8,
    images: [
      { id: 1, src: "cartoons/finding-ins-friends/9A8F3E06-1A19-435E-BEFD-7669CB0F190B.png", alt: "Cultural Exchange Through Posts", caption: "Learning about different cultures through Instagram connections" },
      { id: 2, src: "cartoons/finding-ins-friends/0E698CE3-86D0-4CF5-B31B-559473891F6C.png", alt: "Instagram Story Discovery", caption: "Discovering new friends through Instagram stories and shared interests" },
      { id: 3, src: "cartoons/finding-ins-friends/11870280-7FBA-4076-AB9C-75BAE2F49796.png", alt: "Digital Conversation Starters", caption: "Creative ways to initiate conversations with potential Instagram friends" },
      { id: 4, src: "cartoons/finding-ins-friends/6931B17E-77F0-4855-8FF1-1BF5883DEA32.png", alt: "Virtual Meetup Planning", caption: "Planning real-life meetups with Instagram friends" },
      { id: 5, src: "cartoons/finding-ins-friends/87137005-9D99-40D5-858D-171D4C805A42.png", alt: "Social Media Etiquette", caption: "Navigating the unwritten rules of Instagram friendship" },
      { id: 6, src: "cartoons/finding-ins-friends/8D9585A1-5A13-4BB6-ABA3-0063856BDD7A.png", alt: "Building Trust Online", caption: "Developing trust and authenticity in digital friendships" },
      { id: 7, src: "cartoons/finding-ins-friends/9FC5F12A-8336-4651-8C16-6F42C81B71A2.png", alt: "Supportive Online Community", caption: "Finding emotional support and encouragement from Instagram friends" },
      { id: 8, src: "cartoons/finding-ins-friends/4692A1D3-F34A-4C40-9393-BCEB14510A99.png", alt: "Shared Hobby Connections", caption: "Finding friends through mutual interests and hobbies on social media" }
    ],
    tags: ["Social Media", "Instagram", "Friendship", "Digital", "Connection", "Modern Life", "Community Building", "Online Relationships", "Social Networking"]
  },

  {
    id: "roommate-experience",
    title: "Roommate Experience in North America",
    description: "Exploring the joys and challenges of shared living spaces in North America. This series captures the everyday moments, from kitchen sharing to bathroom schedules, that define the roommate experience for students and young professionals.",
    category: "Daily Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 5,
    images: [
      { id: 1, src: "cartoons/roommate-experience/8AD56EB0-9A57-4955-8778-B913DBE3F569.png", alt: "Roommate Experience - Kitchen Sharing", caption: "Navigating shared kitchen spaces and cooking schedules" },
      { id: 2, src: "cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png", alt: "Roommate Experience - Shared Living", caption: "The daily dynamics of sharing a living space with roommates" },
      { id: 3, src: "cartoons/roommate-experience/9DB4DEA1-C8F7-4415-B770-17154DAF3042.png", alt: "Roommate Experience - Living Room", caption: "Finding balance between personal space and communal areas" },
      { id: 4, src: "cartoons/roommate-experience/C1DFBD7C-8B27-4E2F-A366-F2B0E99EBEE8.png", alt: "Roommate Experience - Bathroom", caption: "Managing shared bathroom schedules and cleanliness" },
      { id: 5, src: "cartoons/roommate-experience/F4D98DC7-3EE6-4E18-B0FD-05EEF2F899A1.png", alt: "Roommate Experience - Bedroom", caption: "Personal space and privacy in shared housing" }
    ],
    tags: ["Roommates", "Shared Living", "Student Life", "Daily Life", "Social"]
  },
  {
    id: "wall-street-girl-life",
    title: "Wall Street Girl Life",
    description: "The unique experiences of women working in finance. This series captures the daily journey of professional women on Wall Street, from morning commutes to evening reflections, showcasing their resilience, leadership, and the challenges they overcome in the male-dominated finance industry.",
    category: "Work Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 15,
    images: [
      { id: 1, src: "cartoons/wall-street-girl-life/0090ECE5-5299-4F27-B22B-838D6FAC823A.png", alt: "Wall Street Girl - Subway Commute", caption: "Navigating the daily subway commute in business attire" },
      { id: 2, src: "cartoons/wall-street-girl-life/01F03960-1AC4-4C54-ADD6-CAD251BEE3D9.png", alt: "Wall Street Girl - Office Arrival", caption: "Starting the workday with confidence and style" },
      { id: 3, src: "cartoons/wall-street-girl-life/1A38D2A5-D59E-40AF-830F-8921ABCEA8E4.png", alt: "Wall Street Girl - Meeting Preparation", caption: "Preparing for important client meetings and presentations" },
      { id: 4, src: "cartoons/wall-street-girl-life/2E78E898-F558-4E60-BE98-288D64CEFD5E.png", alt: "Wall Street Girl - Networking", caption: "Building professional relationships in the finance world" },
      { id: 5, src: "cartoons/wall-street-girl-life/456717B5-FA56-453D-B900-A6134F7BF71E.png", alt: "Wall Street Girl - Lunch Break", caption: "Taking a well-deserved break during the busy workday" },
      { id: 6, src: "cartoons/wall-street-girl-life/46838EA2-DF4D-436A-B727-4543BF417A8B.png", alt: "Wall Street Girl - Client Interaction", caption: "Professional client service and relationship building" },
      { id: 7, src: "cartoons/wall-street-girl-life/4B013DE9-C975-46ED-85C6-E75A4272F9B0.png", alt: "Wall Street Girl - Team Collaboration", caption: "Working effectively with colleagues and team members" },
      { id: 8, src: "cartoons/wall-street-girl-life/62ED3F54-09FD-477F-A385-3FD692A6452D.png", alt: "Wall Street Girl - Market Analysis", caption: "Analyzing financial markets and making informed decisions" },
      { id: 9, src: "cartoons/wall-street-girl-life/9A84214A-9E06-483C-AABD-58867AE1F659.png", alt: "Wall Street Girl - Presentation Skills", caption: "Delivering compelling presentations to stakeholders" },
      { id: 10, src: "cartoons/wall-street-girl-life/9d874cef7e14e68b2bd54e3057c1a180.png", alt: "Wall Street Girl - Work-Life Balance", caption: "Finding harmony between career success and personal life" },
      { id: 11, src: "cartoons/wall-street-girl-life/CC7C7A4F-19B3-48B2-ABE5-3B1EE686678B.png", alt: "Wall Street Girl - Professional Growth", caption: "Continuous learning and career development in finance" },
      { id: 12, src: "cartoons/wall-street-girl-life/D0F46C77-6F5E-40B3-914C-4A41D778E523.png", alt: "Wall Street Girl - Leadership", caption: "Taking on leadership roles and mentoring others" },
      { id: 13, src: "cartoons/wall-street-girl-life/F04C2AAD-E4F4-4E30-8436-AFAA0C6ACA8D.png", alt: "Wall Street Girl - Evening Reflection", caption: "Reflecting on the day's achievements and challenges" },
      { id: 14, src: "cartoons/wall-street-girl-life/F362C9D8-CD2F-454C-B47A-AC34CD513655.png", alt: "Wall Street Girl - Weekend Planning", caption: "Planning weekend activities and personal time" },
      { id: 15, src: "cartoons/wall-street-girl-life/F362C9D8-CD2F-454C-B47A-AC34CD513655.png", alt: "Wall Street Girl - Future Goals", caption: "Setting and pursuing long-term career objectives" }
    ],
    tags: ["Wall Street", "Women in Finance", "Professional Women", "Career", "Finance"]
  },
  {
    id: "asian-market-freedom",
    title: "Asian Market Freedom",
    description: "The joy of shopping at Asian supermarkets in America",
    category: "Daily Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 4,
    images: [
      { id: 1, src: "cartoons/asian-market-freedom/1.png", alt: "Asian Market 1", caption: "Asian market freedom 1" },
      { id: 2, src: "cartoons/asian-market-freedom/2.png", alt: "Asian Market 2", caption: "Asian market freedom 2" },
      { id: 3, src: "cartoons/asian-market-freedom/3.png", alt: "Asian Market 3", caption: "Asian market freedom 3" },
      { id: 4, src: "cartoons/asian-market-freedom/4.png", alt: "Asian Market 4", caption: "Asian market freedom 4" }
    ],
    tags: ["Asian Market", "Food Shopping", "Cultural", "Daily Life", "America"]
  },
  {
    id: "boy-dare",
    title: "How Many Times Do Women Experience the Male Gaze",
    description: "Exploring the daily challenges women face with unwanted attention and the male gaze in professional and social settings. This series captures real moments of discomfort and resilience that many women experience.",
    category: "Social Topics",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 3,
    images: [
      { id: 1, src: "cartoons/boy-dare/1.png", alt: "Professional Woman Facing Unwanted Comments", caption: "A woman in business attire being told to 'smile more' while receiving inappropriate comments about her appearance" },
      { id: 2, src: "cartoons/boy-dare/2.png", alt: "Social Setting Male Gaze", caption: "Women navigating social situations where they feel objectified and uncomfortable" },
      { id: 3, src: "cartoons/boy-dare/3.png", alt: "Everyday Street Harassment", caption: "The reality of walking down the street and dealing with unwanted attention and comments" }
    ],
    tags: ["Female Experience", "Male Gaze", "Social Issues", "Gender Equality", "Professional Women", "Street Harassment", "Women's Rights", "Social Commentary"]
  },
  {
    id: "AI-Prompt",
    title: "AI Prompt Generated Artworks",
    description: "Creative artworks generated through AI prompts and digital tools. This collection showcases the intersection of human creativity and artificial intelligence, featuring diverse styles and themes from storybook illustrations to modern digital art.",
    category: "Digital Art",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 25,
    images: [
      { id: 1, src: "cartoons/AI-Prompt/F039D9E9-E0E4-428A-ADBA-BB57C8A87020.png", alt: "Storybook Reading Girl", caption: "A young woman with reddish-brown hair in a bun, wearing round glasses, reading a book with a gentle smile" },
      { id: 2, src: "cartoons/AI-Prompt/017360DA-CDB0-481C-8D3B-59ADA2D13694.png", alt: "Classic Portrait", caption: "Traditional portrait style artwork with elegant composition" },
      { id: 3, src: "cartoons/AI-Prompt/7987AF1D-1262-4C84-A1A6-B12D591C9F0F.png", alt: "Modern Digital Art", caption: "Contemporary digital artwork with vibrant colors and modern aesthetics" },
      { id: 4, src: "cartoons/AI-Prompt/21791287-CF1C-4AE8-9237-8EA102C3F42C.png", alt: "Abstract Composition", caption: "Abstract art piece exploring form and color relationships" },
      { id: 5, src: "cartoons/AI-Prompt/77B13207-2569-4F31-A5AC-C17650EA47BC.png", alt: "Nature Inspired Art", caption: "Artwork drawing inspiration from natural elements and landscapes" },
      { id: 6, src: "cartoons/AI-Prompt/50B391A5-3D98-4E4C-B806-3C5D5D0A6545.png", alt: "Urban Scene", caption: "Cityscape artwork capturing urban life and architecture" },
      { id: 7, src: "cartoons/AI-Prompt/05AD0F10-8751-4399-85E1-C2575B776F50.png", alt: "Fantasy Character", caption: "Imaginative character design with fantasy elements" },
      { id: 8, src: "cartoons/AI-Prompt/F6B1D574-4C8E-4AD7-BBCE-E83865F0E84E.png", alt: "Geometric Patterns", caption: "Modern geometric design with clean lines and shapes" },
      { id: 9, src: "cartoons/AI-Prompt/40DEDE89-6AE1-4BB7-B894-C4A2BAF6D9C4.png", alt: "Emotional Portrait", caption: "Expressive portrait conveying deep emotions and character" },
      { id: 10, src: "cartoons/AI-Prompt/DB2FA69A-E3FA-4BA4-AE1D-24213A6093A8.png", alt: "Surreal Landscape", caption: "Dreamlike landscape with surreal and imaginative elements" },
      { id: 11, src: "cartoons/AI-Prompt/2094D1AF-B9FA-4550-8962-FF24FDAFC91E.png", alt: "Cultural Art", caption: "Artwork reflecting cultural heritage and traditions" },
      { id: 12, src: "cartoons/AI-Prompt/C93F6AA7-34CE-4560-A4EE-E7E80EA15711.png", alt: "Minimalist Design", caption: "Clean minimalist artwork focusing on essential elements" },
      { id: 13, src: "cartoons/AI-Prompt/056867F2-5B68-44B4-9E0A-A322B48E954C.png", alt: "Dynamic Movement", caption: "Artwork capturing motion and dynamic energy" },
      { id: 14, src: "cartoons/AI-Prompt/7595E21C-DAC9-407B-ABFB-4F7C40D5542D.png", alt: "Textured Surface", caption: "Artwork emphasizing texture and surface qualities" },
      { id: 15, src: "cartoons/AI-Prompt/65210217-1538-491B-AF58-A8984D634CD9.png", alt: "Color Harmony", caption: "Artwork exploring color relationships and harmony" },
      { id: 16, src: "cartoons/AI-Prompt/188D701E-D4A9-4FFF-9CAC-F6F011D7F690.png", alt: "Organic Forms", caption: "Artwork featuring natural and organic shapes" },
      { id: 17, src: "cartoons/AI-Prompt/CA8D3475-BE54-4104-A74A-A39DD1C0153C.png", alt: "Architectural Detail", caption: "Detailed architectural artwork with precision and style" },
      { id: 18, src: "cartoons/AI-Prompt/3D334A8D-8D89-416F-BDA0-A7D5F7E099CF.png", alt: "Expressive Lines", caption: "Artwork emphasizing expressive line work and drawing" },
      { id: 19, src: "cartoons/AI-Prompt/81B184B9-F3C4-411C-A3C0-446813EA7176.png", alt: "Atmospheric Scene", caption: "Moody artwork with atmospheric lighting and ambiance" },
      { id: 20, src: "cartoons/AI-Prompt/89EF7B2D-8DE9-4BFA-8F65-7848A19E146C.png", alt: "Pattern Design", caption: "Intricate pattern artwork with repeating motifs" },
      { id: 21, src: "cartoons/AI-Prompt/947D3CED-1ADF-4F92-B1FB-29641F31D409.png", alt: "Light and Shadow", caption: "Artwork exploring dramatic lighting and shadow effects" },
      { id: 22, src: "cartoons/AI-Prompt/A6142553-85E1-41B5-8812-7357E646DC63.png", alt: "Contemporary Style", caption: "Modern contemporary artwork with current artistic trends" },
      { id: 23, src: "cartoons/AI-Prompt/887D7AAF-CD46-43B9-BAA8-F44E6EB34B56.png", alt: "Artistic Composition", caption: "Well-composed artwork with strong visual balance" },
      { id: 24, src: "cartoons/AI-Prompt/A6B72EDF-B4AB-40AF-B01D-42F2100424AF.png", alt: "Creative Expression", caption: "Artwork showcasing unique creative expression and style" },
      { id: 25, src: "cartoons/AI-Prompt/43500642-A6D1-492C-B5EB-A42270B8609E.png", alt: "Digital Innovation", caption: "Cutting-edge digital artwork demonstrating technological innovation" }
    ],
    tags: ["AI Art", "Digital Art", "Technology", "Innovation", "Creative Tools", "Contemporary Art", "Digital Innovation", "Artistic Expression"]
  },
  {
    id: "study-abroad-endings",
    title: "Study Abroad Endings",
    description: "The bittersweet moments of concluding study abroad experiences. This series captures the emotional journey of endings - from hidden freedoms discovered to final farewells, reflecting on transformative experiences and embracing new beginnings with wisdom gained from living abroad.",
    category: "Student Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 5,
    images: [
      { id: 1, src: "cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png", alt: "Study Abroad Ending - Hidden Freedom", caption: "隐藏結局:自由 - The bittersweet moment of finding unexpected freedom" },
      { id: 2, src: "cartoons/study-abroad-endings/7466338A-D3B5-458D-AE68-FEDF2B286085.png", alt: "Study Abroad Ending - Farewell", caption: "Saying goodbye to friends and memories made abroad" },
      { id: 3, src: "cartoons/study-abroad-endings/89E074B3-BA27-463F-9F4B-90BE0E2E6273.png", alt: "Study Abroad Ending - Last Days", caption: "Making the most of final moments in a foreign land" },
      { id: 4, src: "cartoons/study-abroad-endings/F691607C-6FC3-4128-A279-423442ED7958.png", alt: "Study Abroad Ending - Reflection", caption: "Looking back on the transformative journey completed" },
      { id: 5, src: "cartoons/study-abroad-endings/IMG_0057.JPG", alt: "Study Abroad Ending - New Beginning", caption: "Embracing the future with lessons learned abroad" }
    ],
    tags: ["Study Abroad", "Student Life", "International", "Education", "Cultural Exchange"]
  },
  {
    id: "wall-street-dual-life",
    title: "The Dual Life of Wall Street Women: Between Power Suits and Personal Dreams",
    description: "An intimate exploration of the complex duality that defines modern women in finance. This series captures the daily navigation between the high-stakes world of Wall Street and the deeply personal quest for fulfillment beyond the trading floor. From the morning subway commute in designer suits to the quiet moments of reflection, each image reveals the delicate balance of maintaining professional excellence while preserving one's authentic self in an industry that demands both strength and vulnerability.",
    category: "Work Life",
    author: "Evelyn",
    publishDate: "March 2024",
    coverImage: "", // 将自动设置为第一张图片
    imageCount: 31,
    images: [
      { id: 1, src: "cartoons/wall-street-dual-life/1.png", alt: "Morning Commute in Power Suit", caption: "The daily journey begins: a woman in designer attire navigating the subway, coffee in hand, ready to conquer Wall Street" },
      { id: 2, src: "cartoons/wall-street-dual-life/2.png", alt: "Serene Drive with Personal Touches", caption: "Finding peace in the chaos: personal moments of reflection during the commute, with flowers and candles creating a sanctuary" },
      { id: 3, src: "cartoons/wall-street-dual-life/3.png", alt: "Subway Contemplation", caption: "Amidst the crowded train, maintaining inner calm while others show stress - the art of emotional control" },
      { id: 4, src: "cartoons/wall-street-dual-life/4.png", alt: "Office Arrival", caption: "Stepping into the financial district with confidence, the transformation from commuter to professional begins" },
      { id: 5, src: "cartoons/wall-street-dual-life/5.png", alt: "Trading Floor Focus", caption: "In the heart of the action, where split-second decisions can mean millions - the pressure and the power" },
      { id: 6, src: "cartoons/wall-street-dual-life/6.png", alt: "Boardroom Presence", caption: "Commanding attention in high-stakes meetings, where every word and gesture matters" },
      { id: 7, src: "cartoons/wall-street-dual-life/7.png", alt: "Client Presentation", caption: "Building trust and relationships while maintaining professional boundaries and expertise" },
      { id: 8, src: "cartoons/wall-street-dual-life/8.png", alt: "Market Analysis", caption: "Deep focus on data and trends, where analytical skills meet intuitive decision-making" },
      { id: 9, src: "cartoons/wall-street-dual-life/9.png", alt: "Team Leadership", caption: "Guiding and mentoring others while advancing one's own career trajectory" },
      { id: 10, src: "cartoons/wall-street-dual-life/10.png", alt: "Networking Event", caption: "Building professional connections while staying true to personal values and authenticity" },
      { id: 11, src: "cartoons/wall-street-dual-life/11.png", alt: "After-Hours Strategy", caption: "The work doesn't end at 5 PM - late-night planning and preparation for tomorrow's challenges" },
      { id: 12, src: "cartoons/wall-street-dual-life/12.png", alt: "Personal Time Management", caption: "Balancing professional demands with personal needs - the constant juggling act" },
      { id: 13, src: "cartoons/wall-street-dual-life/13.png", alt: "Weekend Reflection", caption: "Finding moments of peace and personal growth outside the high-pressure work environment" },
      { id: 14, src: "cartoons/wall-street-dual-life/14.png", alt: "Career Milestone", caption: "Celebrating professional achievements while acknowledging the personal sacrifices made" },
      { id: 15, src: "cartoons/wall-street-dual-life/15.png", alt: "Work-Life Integration", caption: "Creating harmony between career ambitions and personal fulfillment" },
      { id: 16, src: "cartoons/wall-street-dual-life/16.png", alt: "Professional Identity", caption: "How the Wall Street persona shapes and sometimes conflicts with the authentic self" },
      { id: 17, src: "cartoons/wall-street-dual-life/17.png", alt: "Personal Growth", caption: "The journey of self-discovery and development beyond professional achievements" },
      { id: 18, src: "cartoons/wall-street-dual-life/18.png", alt: "Emotional Resilience", caption: "Building strength to handle the emotional demands of high-stakes finance" },
      { id: 19, src: "cartoons/wall-street-dual-life/19.png", alt: "Authentic Leadership", caption: "Leading with both professional competence and personal authenticity" },
      { id: 20, src: "cartoons/wall-street-dual-life/20.png", alt: "Boundary Setting", caption: "Learning to say no and maintain healthy work-life boundaries" },
      { id: 21, src: "cartoons/wall-street-dual-life/21.png", alt: "Personal Passions", caption: "Nurturing interests and hobbies that provide balance and joy" },
      { id: 22, src: "cartoons/wall-street-dual-life/22.png", alt: "Relationship Building", caption: "Maintaining meaningful connections while pursuing career success" },
      { id: 23, src: "cartoons/wall-street-dual-life/23.png", alt: "Self-Care Rituals", caption: "Essential practices for maintaining mental and physical well-being" },
      { id: 24, src: "cartoons/wall-street-dual-life/24.png", alt: "Future Planning", caption: "Balancing immediate career goals with long-term personal aspirations" },
      { id: 25, src: "cartoons/wall-street-dual-life/25.png", alt: "Inner Strength", caption: "The quiet confidence that comes from knowing one's worth beyond professional achievements" },
      { id: 26, src: "cartoons/wall-street-dual-life/26.png", alt: "Professional Evolution", caption: "How the career journey shapes and transforms personal identity" },
      { id: 27, src: "cartoons/wall-street-dual-life/27.png", alt: "Personal Values", caption: "Staying true to core beliefs while navigating complex professional environments" },
      { id: 28, src: "cartoons/wall-street-dual-life/28.png", alt: "Workplace Challenges", caption: "Facing and overcoming obstacles while maintaining personal integrity" },
      { id: 29, src: "cartoons/wall-street-dual-life/29.png", alt: "Success Redefined", caption: "Finding personal fulfillment beyond traditional measures of professional success" },
      { id: 30, src: "cartoons/wall-street-dual-life/30.png", alt: "Life Integration", caption: "The ongoing process of weaving together professional and personal aspirations" },
      { id: 31, src: "cartoons/wall-street-dual-life/31.png", alt: "Complete Woman", caption: "Embracing the full spectrum of identity - professional, personal, and everything in between" }
    ],
    tags: ["Wall Street", "Women in Finance", "Work-Life Balance", "Professional Excellence", "Personal Fulfillment", "Modern Femininity", "Career Ambition", "Inner Strength", "Financial Industry", "Dual Identity", "Professional Women", "Personal Dreams", "Workplace Challenges", "Self-Discovery"]
  }
];

// Helper functions
export const getThemeById = (id: string): CartoonTheme | undefined => {
  return cartoonThemes.find(theme => theme.id === id);
};

export const getThemesByCategory = (category: string): CartoonTheme[] => {
  return cartoonThemes.filter(theme => theme.category === category);
};

export const getRelatedThemes = (currentThemeId: string, limit: number = 3): CartoonTheme[] => {
  const currentTheme = getThemeById(currentThemeId);
  if (!currentTheme) return [];

  return cartoonThemes
    .filter(theme => theme.id !== currentThemeId && theme.category === currentTheme.category)
    .slice(0, limit);
};

// Auto-set cover image function
export const setCoverImage = (theme: CartoonTheme): CartoonTheme => {
  if (theme.images.length > 0) {
    return {
      ...theme,
      coverImage: theme.images[0].src // Auto-use first image as cover
    };
  }
  return theme;
};

// Get all themes with auto cover images
export const getAllThemesWithCover = (): CartoonTheme[] => {
  return cartoonThemes.map(theme => {
    // If coverImage is empty or undefined, auto-set it to first image
    if (!theme.coverImage && theme.images.length > 0) {
      return setCoverImage(theme);
    }
    return theme;
  });
};
