import { ChartDataset } from 'chart.js';

export interface Article {
  title: string;
  articleURL: string;
  imageURL: string;
}

export interface TrendingDataset {
  name: string;
  lat: number;
  lng: number;
  war: {
    articles: Article[];
    weight: number;
  };
  protest: {
    weight: number;
  };
}

export interface WarDataset {
  name: string;
  todayDeaths: number;
  weeklyDeaths: number;
  totalDeaths: number;
  labels: string[];
  datasets: ChartDataset[];
}

export interface ProtestDataset {
  name: string;
  todayCasualties: number;
  weeklyCasualties: number;
  totalCasualties: number;
  labels: string[];
  datasets: ChartDataset[];
}

export const trendingDatasets: TrendingDataset[] = [
  {
    name: 'Kyiv city',
    lat: 50.423729,
    lng: 30.514446,
    war: {
      articles: [
        {
          title: `Russia's offensive in the Donbas can't make up for its failure in Kyiv`,
          articleURL: 'https://www.vox.com/policy-and-politics/2022/4/22/23034480/russia-donbas-new-phase-war-ukraine-explained',
          imageURL:
            'https://cdn.vox-cdn.com/thumbor/fuelswAz2LhG3TYtgK7xrK87TOs=/0x0:3500x2375/2570x1446/filters:focal(1470x908:2030x1468):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70781300/GettyImages_1240069549a.0.jpg',
        },
        {
          title: `Russia seeks 'control' of southern Ukraine and path to Moldova, commander says`,
          articleURL: 'https://www.vox.com/policy-and-politics/2022/4/22/23034480/russia-donbas-new-phase-war-ukraine-explained',
          imageURL:
            'https://www.washingtonpost.com/wp-stat/graphics/ai2html/KyivDonbasMap2022/DDLUOPBCFJBHTODA3M6UX4QJ2E/MoldovaDonbasMap2022-xsmall.jpg?v=7',
        },
        {
          title: `Explosions reported near Kyiv and Lviv; Mariupol's fate in balance`,
          articleURL: 'https://www.washingtonpost.com/world/2022/04/16/russia-ukraine-war-news-putin-live-updates/',
          imageURL:
            'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NCUSFLF5HZHCZPYJR6ZDQ4IDUQ.jpg&w=916',
        },
        {
          title: `Putin's 'probably given up' on Kyiv as Ukraine war enters new phase`,
          articleURL: 'https://www.defensenews.com/pentagon/2022/04/07/putins-probably-given-up-on-kyiv-as-ukraine-war-enters-new-phase/',
          imageURL:
            'https://www.defensenews.com/resizer/TZZvvyaEIHEomdnfvw-8RLCyD_8=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/mco/OEAHEVC7CNBGLF3ZDHXRFPCVL4.jpg',
        },
      ],
      weight: 7,
    },
    protest: {
      weight: 0,
    },
  },
  {
    name: 'Odessa',
    lat: 46.448736,
    lng: 30.71656,
    war: {
      articles: [
        {
          title: `Ukraine Accuses Russia of War Crimes as Air Strikes Hit Odessa`,
          articleURL: 'https://www.themoscowtimes.com/2022/04/03/ukraine-accuses-russia-of-war-crimes-as-air-strikes-hit-odessa-a77188',
          imageURL: 'https://static.themoscowtimes.com/image/article_1360/fe/000_327J3WG.jpg',
        },
        {
          title: `Odessa and Putin's imperial dream`,
          articleURL: 'https://www.japantimes.co.jp/opinion/2022/04/22/commentary/world-commentary/putin-wants-odessa/',
          imageURL: 'https://cdn-japantimes.com/wp-content/uploads/2022/04/np_file_154135.jpeg',
        },
        {
          title: `Ukrainian graffiti artists thumb their nose at war in Odessa`,
          articleURL: 'https://www.france24.com/en/live-news/20220414-ukrainian-graffiti-artists-thumb-their-nose-at-war-in-odessa',
          imageURL:
            'https://s.france24.com/media/display/f2af82e2-bbc1-11ec-8bcf-005056bf8594/w:1024/p:16x9/798d64210e2eb291633f53794d0167a843ad1a00.webp',
        },
        {
          title: `Passover in war-torn Odessa`,
          articleURL: 'https://unherd.com/2022/04/passover-in-wartorn-odessa/',
          imageURL: 'https://unherd.com/wp-content/uploads/2022/04/GettyImages-1239075763-copy-scaled-e1650384455658-1024x591.jpg',
        },
      ],
      weight: 5,
    },
    protest: {
      weight: 0,
    },
  },
  {
    name: 'Berdyansk',
    lat: 46.760374,
    lng: 36.803977,
    war: {
      articles: [
        {
          title: `Berdyansk: Life Under Russian Occupation`,
          articleURL: 'https://iwpr.net/global-voices/berdyansk-life-under-russian-occupation',
          imageURL:
            'https://cdn.shortpixel.ai/spai/q_glossy+ret_img/https://iwpr.net/sites/default/files/styles/grid_large_932_/public/images/story/ukraine-Berdyansk-warship_0.jpg',
        },
        {
          title: `THE RUSSO-UKRAINIAN WAR AT SEA: RETROSPECT AND PROSPECT`,
          articleURL: 'https://warontherocks.com/2022/04/the-russo-ukrainian-war-at-sea-retrospect-and-prospect/',
          imageURL: 'https://warontherocks.com/wp-content/uploads/2022/04/snake-island-stamp-3-1024x684.jpg',
        },
        {
          title: `'We Had This Peace with God': Ukrainian Family with 11 Foster Children Escapes After 42 Days in a Bunker`,
          articleURL:
            'https://www1.cbn.com/cbnnews/cwn/2022/april/we-had-this-peace-with-god-ukrainian-family-with-11-foster-children-escapes-after-42-days-in-a-bunker',
          imageURL: 'https://www1.cbn.com/sites/default/files/styles/image_xl_640x480/public/wgr1033ukraine04_si.jpg?itok=OOFAmJgR',
        },
        {
          title: `Ukraine pushes back on 'numerous' Russian advances in Donbas; Zelenskyy warns Mariupol situation is severe`,
          articleURL: 'https://www.cnbc.com/2022/04/19/russia-ukraine-live-updates.html',
          imageURL:
            'https://image.cnbcfm.com/api/v1/image/107048722-1650420754816-gettyimages-1240061479-RUSSIA-UKRAINE_CONFLICT.jpeg?v=1650420548&w=740&h=416&ffmt=webp',
        },
      ],
      weight: 4,
    },
    protest: {
      weight: 0,
    },
  },
  {
    name: 'Lysychansk',
    lat: 48.900567,
    lng: 38.444467,
    war: {
      articles: [
        {
          title: `Russia-Ukraine War News Highlights: Russia plans to seize land, destroy Ukraine's armed forces says Defence Ministry`,
          articleURL: 'https://indianexpress.com/article/world/russia-ukraine-war-live-updates-kyiv-mariupol-moscow-bucha-7872987/',
          imageURL: 'https://images.indianexpress.com/2022/04/ukraine-aztol.jpg',
        },
        {
          title: `Russia's Donbas offensive advances with fall of Kreminna`,
          articleURL: 'https://www.france24.com/en/live-news/20220419-russia-s-donbas-offensive-advances-with-fall-of-kreminna',
          imageURL:
            'https://s.france24.com/media/display/6b289304-bf86-11ec-bec0-005056bf8594/w:1024/p:16x9/0ba8d0c2230f8ebe85bb92605d4c547d967b2221.webp',
        },
        {
          title: `War means tough choices in Ukraine's vast child protection system`,
          articleURL: 'https://www.reuters.com/world/europe/war-means-tough-choices-ukraines-vast-child-protection-system-2022-03-28/',
          imageURL:
            'https://www.reuters.com/resizer/6v3OZX6OBVFAWI9k5JZFhSfFNVo=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SNVB7EFXAJMSBBQ2MYMTWOVOE4.jpg',
        },
        {
          title: `Live Updates | Celebrity chef's kitchen bombed in Kharkiv`,
          articleURL: 'https://apnews.com/article/russia-ukraine-kyiv-business-europe-religion-9b10ce4f2cfe5bdeed5658fe45373e54',
          imageURL: 'https://storage.googleapis.com/afs-prod/media/52af4e903f8a4154a561d53160af06f8/1000.jpeg',
        },
      ],
      weight: 3,
    },
    protest: {
      weight: 0,
    },
  },
  {
    name: 'Ismail Ukraine',
    lat: 45.351738,
    lng: 28.839387,
    war: {
      articles: [
        {
          title: `Ukraine to seize Russian ships undergoing rehaul in Izmail`,
          articleURL: 'https://www.ukrinform.net/rubric-economy/3451602-ukraine-to-seize-russian-ships-undergoing-rehaul-in-izmail.html',
          imageURL: 'https://static.ukrinform.com/photos/2022_02/thumb_files/630_360_1646057078-578.jpg',
        },
        {
          title: `How Should Malaysia React to the Russia-Ukraine Conflict?`,
          articleURL: 'https://thediplomat.com/2022/04/how-should-malaysia-react-to-the-russia-ukraine-conflict/',
          imageURL: 'https://thediplomat.com/wp-content/uploads/2022/04/sizes/large/thediplomat_2022-04-01-023324.jpg',
        },
        {
          title: `In Backdrop of Russia-Ukraine Conflict, US, Britain, And Australia Agree to Develop Hypersonic Missiles`,
          articleURL:
            'https://www.india.com/news/world/in-backdrop-of-russia-ukraine-conflict-us-britain-and-australia-agree-to-develop-hypersonic-missiles-5323709/',
          imageURL: 'https://static.india.com/wp-content/uploads/2022/04/hypersonic-22.jpg?impolicy=Medium_Widthonly&w=700&h=467',
        },
        {
          title: `Biden appears to accuse Putin of ‘genocide' in Ukraine`,
          articleURL: 'https://www.freemalaysiatoday.com/category/world/2022/04/13/biden-appears-to-accuse-putin-of-genocide-in-ukraine/',
          imageURL: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/04/AP22102620955450.jpg',
        },
      ],
      weight: 2,
    },
    protest: {
      weight: 0,
    },
  },
  {
    name: 'Seoul',
    lat: 37.5666805,
    lng: 126.9784147,
    war: {
      articles: [],
      weight: 0,
    },
    protest: {
      weight: 100,
    },
  },
];

export const warDatasets: WarDataset[] = [
  {
    name: 'Ukraine',
    todayDeaths: 1,
    weeklyDeaths: 2,
    totalDeaths: 3,
    labels: ['2022-03-03', '2022-03-17', '2022-03-24', '2022-03-25', '2022-04-12', '2022-04-18'],
    datasets: [
      {
        label: 'Total Deaths',
        data: [2000, 13500, 15000, 16000, 20000, 26000],
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderWidth: 4,
        pointRadius: 3,
      },
    ],
  },
];

export const protestDatasets: ProtestDataset[] = [
  {
    name: 'Seoul',
    todayCasualties: 1,
    weeklyCasualties: 2,
    totalCasualties: 3,
    labels: [
      '2022-04-19 Hyoja-dong',
      '2022-04-20 Yeouido-dong',
      '2022-04-21 Sincheon-dong',
      '2022-04-22 Dunchon-dong',
      '2022-04-23 Yeouido-dong',
      '2022-04-24 Sanggye-dong',
      '2022-04-25 Euljiro 6-ga',
    ],
    datasets: [
      {
        label: '',
        data: [1000, 1500, 1500, 299, 3000, 299, 701],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
      },
    ],
  },
];
