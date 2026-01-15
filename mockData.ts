import { Experience, TeamMember, Review } from './types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Sun World Ba Na Hills Ticket in Da Nang',
    location: 'Da Nang',
    rating: 4.9,
    reviewsCount: 2400,
    price: 38.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8r7Nt96-8doqS6bBZsX5U9dBHeJn_nmpaZVsc2HjL6gpDDW2osR2obpcJPMASl-U4NxPp1xs89MBNOXmqcKQQYaaPJK5qkAvQwh_U7zKHYrM9E5iLhLY7v15G3BsqcPHCI7m9SUANvaN6UfI0LuDi-1kloeV7YX1wtuWyM-vD3ba6z7XaAuWN0RPrcNs9vw29WnbgYOnPhjZL0n2msek-AI8ZZYZ3IhhrVV6X6PvsuVG6Ug7c9r8hL1izfdJePvAwIBih7Krcdw',
    category: 'Attractions',
    badges: ['Best Seller'],
    description: 'Experience the famous Golden Bridge and enjoy limitless fun at the largest indoor fantasy park in Vietnam.'
  },
  {
    id: '2',
    title: 'Ha Long Bay Luxury Day Cruise from Hanoi',
    location: 'Ha Long Bay',
    rating: 4.8,
    reviewsCount: 1100,
    price: 55.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6sZQ3-JbyhC4Dt7SLy7cDwxgj-ulky_XZzMGjj3aX11U8YLI81rs706SOEOuDpERUJo5BMXcWYwbUoDO9_YTdj-Qto7oYTYM2qQ7kpqVe6WzdDhYcSjmktyPGDwAOLTvo_T9AGOzEELgSHuftVed8rGcLucBy546WMdujX-on2rsYc8Twz-5rqa7VXsJ5NqlhMjBx_wK_q_zZQ-pzhhmjafaY9twJQfThRBfBViJETXnQ-o0aQtlrKJbed5hPbgvZog-Jqo6PP7A',
    category: 'Tours',
    description: 'Sail through limestone karsts on a traditional luxury junk boat with lunch, kayaking and cave visits.'
  },
  {
    id: '3',
    title: 'Hanoi Street Food Tour by Motorbike',
    location: 'Hanoi',
    rating: 5.0,
    reviewsCount: 850,
    price: 29.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzF8aEuJ0ViXUlVpv-JKR-m6L89G4Qb3GxQYdVveVRIEP4Y6AIoju08rdTNznTLTTjF24jqlvxS2SY9NlY2xQeQ1zPNRp8YIeuPH65v9yuoVyySTyci63m3O7SZ83M66n0uebmqdNeoESCL0qzbtuMMNIBKFyf3zZr6YejPZhQpU5_4t8w2hkAEE4p5EuDGgefaebhNAYWNyRVOeG2fmjg68x96RcQpTIJPOGemGOjMqd1gpDljvqgteExmtCYX3SxIVnv0lmwWiE',
    category: 'Food',
    badges: ['Local Favorite'],
    description: 'Zipping through hidden alleys of Hanoi to taste the most authentic Pho, Bun Cha, and egg coffee.'
  },
  {
    id: '4',
    title: 'Luxury Overnight Cruise: Limestone Caves & Kayaking',
    location: 'Ha Long Bay',
    rating: 4.9,
    reviewsCount: 2400,
    price: 125.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkKS-FcDKpH8VD1ROuBsFp8v-6giuUBznnQeA3Z0TVWrJZUFvu2C7csOFKCYpFKX6fXgfhDJYHKf1gTnsljJ4zCrLpyqskwLJGmMNsyJK-49RxS_Y1ocUrwX9Li8RxixIbV_7M5dm5dqiGVaHegSlqR4ORx3osgpOs6mL-E3Wmu-HNT6j7U2O2jNtpXHKf_WwlL-kKj7wZ2VxAXUit9EtDxMRYjjineNC3ffxbpj6rU4DFUA1K4vOjs_OQ_94dltFZuMg0Rb8nP-Y',
    category: 'Tours',
    badges: ['Instant Confirmation']
  },
  {
    id: '5',
    title: 'Hanoi Midnight Street Food Tour by Vintage Vespa',
    location: 'Hanoi Old Quarter',
    rating: 4.8,
    reviewsCount: 1200,
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFGTJm-HzX_PWojIcyrojWvC2Q9tWGRhC6-wJSK9cH8ixlw6v1tyftLQQjYCOriBEexxdDd8zSDzFUvDW-XqrpKFKhBcoCcMNMCo7G8_x5nqi3HNvVQ8XjqBPIONssw17XzUJzmW_XPMKb4Ury6pPFp8i3HuxHZRwcKlre0jGuBGrwk5hExHNelOTZ5xea-_EmCSdc_ZhEPkxVMPCNF1yzjLQsWwCd1InXkpFBY6Kg7ZrvfBxZoJM9RWKyekRhC1fvX7o-x9-KDM4',
    category: 'Food',
    badges: ['Best Seller']
  },
  {
    id: '6',
    title: 'Bana Hills & Golden Bridge Day Trip with Lunch',
    location: 'Da Nang',
    rating: 4.7,
    reviewsCount: 856,
    price: 68.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK0PPqsYH88o1E79-NftYRdOzpp8qecfcnX0nU2QbnrTYfuYZqnZ1RSNs5AIghbnKDnAbmlkeYRbxIku96b7SQxgAYUMziFFq52k4l5ybzMhZoy7lOT7rjiQ_-pbNVBX4QK2UGEv2Ontg0-qIMSLE5xmH26lClOflBPxC82ghzkA2wF0lVORD5al_qOB1xd5sUpA8Qlvd_Wk0pVzSGoPGGUPKt6s8VNPYTpDlQM89RBymjOije4f_M6xmJJLVXW0O7yeT83W4lbFk',
    category: 'Tours',
    badges: ['Instant Confirmation']
  },
  {
    id: '7',
    title: 'Hoi An Ancient Town: Traditional Lantern Making Workshop',
    location: 'Hoi An',
    rating: 5.0,
    reviewsCount: 512,
    price: 18.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC1sp7s68QwoLZwwUbjVTX9K_qczFsjZVwWabR3cV-tNocOgvi0O8A0Zq0wEstHbEbzlF-yDpOakSd1CvfIhjDLHElsTvDrS9cAm8rvq5bbB8vWIA4hHJkmmcMtBiwgh16KQwjhKAj8z2mocWxtoxxBzx_bXrx7OoZxDCC3eZcNsNfBFRiZKcmMvaMzXDBby40HW89i5he9S8E61WbBT4UMsA9E_r1fK69dlFMmD0PX9AfBfRAVgy2U_-7Oximr1sFJEKVdixKFU4',
    category: 'Attractions'
  },
  {
    id: '8',
    title: 'Trang An Grottoes & Hoa Lu Ancient Capital Day Tour',
    location: 'Ninh Binh',
    rating: 4.9,
    reviewsCount: 1100,
    price: 55.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVPvy4UWxan_W3gnzwnzBcXSRzDEw-_OKqSXHgj6rNdVAaZh9X7X_JzpbB307y9ANdrFIWDIwSM9pHUFnrQgXmfcgrFdwqIZ73ZEmp9CJ_g2VpliUG1n58BCGLO0IpTm_3oSASswLacoO8hJDK546BpefttdBt2oX79b1YBTYhJRlEAXmlj-oh2YGkOCQyrP1xf4oJ8oVW4ODYSxWdRUPCL-DSdA4cgpNNd5htsO_3nNHtc9DJrhNuPcMgXI_PfVIPUWHcib5hkpg',
    category: 'Tours',
    badges: ['Instant Confirmation']
  },
  {
    id: '9',
    title: 'Cu Chi Tunnels Half-Day Guided Historical Tour',
    location: 'Ho Chi Minh City',
    rating: 4.6,
    reviewsCount: 3400,
    price: 29.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX35fHuZGIPBSQbKmotlEKOqdN7ZLkF85WDDw88fLmr5hlBLN2jM8AufGujvwBEod4cfDc15s7mJwTjVXkE4J484AZ51UKi9QqjVADDe9_Wb4WZGCj-NSMz8fvcEULydZzsAidSWgJM29-VdCfjisdgAIUtrNCYdgJQOUeal3XqVGii0WxvY49AvzNJvQ9Sk-DAfLyuyXfKRUS3l3sB3-3rUVxuvF_9qGO9fcSpfLWr23xKntJa_OXdoGNx-bhEfcKh1RLMrHeL_k',
    category: 'Tours'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Linh Tran',
    role: 'Hanoi Lead Expert',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZLhI7bh6J-5UmVoLXDAnU55hQ5GKOcOnk_Otne7awCuuAPYK_fNgkOyoXzkdP0ucy1W7veN5iLKAE8zexpeuX5bKJW2fu_CWSbK1BZZMTtU3-UOXh7r0p3MXd_9p_g6t_-bDcD1-AfrWoyb4ENpodFY9mYY2b3-SIDxiLi2VMgynMGmDcc6VWBPCZ_nUKx_IQ3iZIkqm9v-ZKJSadrC7YMlhHTYYH5KHSCi9Gu_m8etzujHjLS2AfrzIaPWjzDNIJJsb-I6Ulw_0',
    favoriteSpot: 'Hoan Kiem Lake at 5AM'
  },
  {
    id: '2',
    name: 'Minh Nguyen',
    role: 'Saigon Street Food Guide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwzz1LXkNFs9tNIpGqaZ2zPRB4KnkyxAC8kOEswEWnqdnrqUbP9BbIpw0HW_prX0C5HqfkMiSx-JEGJmKzA8aGYHTVjtCEx62SNNmG80q2H-4n0wzlno-vX4sjM23nXENubTEgweMecqsUpzB4cZGvSO9HzChwasUJguJ2BiHt8nv8d7nfPevnbCK-sXye8lSGyJ-yNTKo_sf-dJbXVC5T4Jd0SF2KOTok-VpI7M2dOCvehjYw0PVFgGqqZS8QTDd9PYN_cBDjyU0',
    favoriteSpot: 'District 4 Hidden Alleys'
  },
  {
    id: '3',
    name: 'Hana Le',
    role: 'Eco-Tourism Manager',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOn878JL0SPOXHF5BDLa0DR5UFeXnWCR0Q0K8N51OeuabsnQDb6Eb_m6EBUnsV6tdoX5sdka8gTNwxyXxN4y2jVQw6upiMxzq3SEXEtGTDavp3pyGeMIQrPipwoxlwhfioDt1uJMOeJyWauB9sCTdqwUMyyklYGWIdnbTDJxtNTgwdk-5H1rlIm3BYX5f4qdvIQ21blrs4UW8Ioqwve_qSc-INjkk7HtkbRUMbado1UWbicZfy4NbHRakbMs9FLJgLSo5eFl-uyzg',
    favoriteSpot: 'Tuyen Lam Lake Pine Forest'
  },
  {
    id: '4',
    name: 'Dung Pham',
    role: 'Cultural Historian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsgHagNTteayFZMj-VQENGwdzQoKv5XPjWae-97zcNN01tKHyJCUzIJWoxAG9W22kIwpmSx1I675Vxb1hzoUjj_K4WrHXrrKAroDKNl3bzU32Q-zKuex-cjgFJApb5Su1TZ4lroSxL3byN6Puc_Xo4v6PyTiQI8QWOZ_Pr99tfQPAuHu-Y2roltHm9m-xck9GG26LFMIBfE9IBAxM6v-6sGOb605-JlvT0LKKZ4LZuoIxpvtTTJdCF1CusmVF9qUjU0mSWW6yLQIE',
    favoriteSpot: 'The Citadel at Sunset'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    user: 'Sarah Jenkins',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Ors_4SKkJOQWdUAWB5wp2YH2XPZRBKr7CWlcXueUdgJlHiJGCSukfP-XtUgd6pRVIvyIsdI-k8UzHCu9hzfLy0PUQckm8J8kKuluSOpe5lJpWgrsnzFhoGxW-AYxQWOjxm75h5HFiB446Ia4oBQ0ZCcfkjd1Fql6m3O_cDoeQSwEg3GvqRCcMd2g5Ayskx3sNz9w4KXNJjWeDXn0Hl20PlPtm-pz2zJKzr8N6rC2OgN9yJBB7GXn8ttSxbgQXFSAjv7syerdCqI',
    rating: 5,
    text: '"The highlight of my Hanoi trip! Long, our guide, was so knowledgeable. That egg coffee in the hidden alley was magical. Highly recommend!"'
  },
  {
    id: '2',
    user: 'Marc Antoine',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-hX_Oo7q8Bxr4BeidUpH61Qn4-v8BDh8QxX6aKVORYIip5dR2AYYVic8dCDyvJjlonZOPfO93HwnAr1rqDFSzXRo7POxFl9cgjnE77rzflJYbHQ3k99cbV9g52dQbd2Ei3TAbUxQrKscVNDUOImBvFhzaG1jKMh3FuvMyyAZlICMY_BOXU2_SPF21tm6TOssuY4NvyuJIqn1EhJSipe0ITOXjx9X4meQFy_Iaa_zetkOurwCxtPMoqX75AfNyXTbegd-XkkESOvw',
    rating: 5,
    text: '"So much food! Make sure you don\'t eat lunch before you go. Every stop was better than the last. Great small group vibe."'
  }
];