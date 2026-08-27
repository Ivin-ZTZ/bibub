const ANIME_CATALOG = [
      {
        id: "turn-a-gundam",
        title: "Turn A Gundam",
        meta: "Sci-Fi, Mecha • 1999 • Yoshiyuki Tomino",
        cover: "https://img.mandarake.co.jp/aucimg/7/3/3/5/0001727335.octet-stream",
        episodes: [
          { title: "Episode 1: Howl at the Moon", fileId: "1cOzKMoX8ATciFq6TNdg3RPuXjpRHtLlg" },
          { title: "Episode 2: The Coming of Age Ceremony", fileId: "18ZQmBNTwpExS4Hv7M5yJwCCj6OI9JNtY" },
          { title: "Episode 3: The Ghost of Swan", fileId: "1ECID3lyamlmbVREx5VxrbFvQXOLQqJye" },
          { title: "Episode 4: Scar of Homing", fileId: "1eBQ47NL-xmdUBKoK9qyOOZ8oIgV0dIm2" },
          { title: "Episode 5: Diary of Lauren", fileId: "1v_AZzEnDZCDNTb-SARoprjnO_KGr3aVL" },
          { title: "Episode 6: The Green River", fileId: "1sTeppmSjxP89kxjkO4lWsxf5wff0veu0" },
          { title: "Episode 7: Kihel and Diana", fileId: "1op29bauBG4jq1-l8KbdJMLFUkIp6s3iP" },
          { title: "Episode 8: Laura's Cow", fileId: "1FTtY76kH-Y4rt8ajWh7NYc0PV2gbi19M" },
          { title: "Episode 9: Corin's Demise", fileId: "1qFcdeyFLBNpcOxJ3OqKpU7ODCP7eIxCU" },
          { title: "Episode 10: Visit to a Grave", fileId: "1hgo9voH-KIWZehCnzHWuO98l66XkJrvQ" },
          { title: "Episode 11: Fall of Nocis", fileId: "1YN7cd5qypGND_Dh57MOlTyd22GP3jyhv" },
          { title: "Episode 12: Underground Underground", fileId: "1OkX29_PtPdFk1p4WYg0VKVqXNT8OoTQQ" },
          { title: "Episode 13: An Old Partner", fileId: "1nWz5rFvlcr3KsTC-D5LZ5yVh-tDZWNCJ" },
          { title: "Episode 14: Separate Ways", fileId: "1klC_6vIgQqwytFKSxcwxKJq4XVKse3dC" },
          { title: "Episode 15: Memory of Odelo", fileId: "1HMSbwRP_vyVo4NfPKwt9AsDuGBqduKuo" },
          { title: "Episode 16: All About Turn A", fileId: "1dcom3l5FZLojzyAFkMr5vNMEzI6w4DVm" },
          { title: "Episode 17: Dust of Blowback", fileId: "1lAWkNFrVxdxnhHrAAEXkGV5_h42QOAvJ" },
          { title: "Episode 18: Past in the Depths", fileId: "1eQfbtp0CLD08CKyePvxl0YV77E01Fkvk" },
          { title: "Episode 19: Sochie's War", fileId: "1fEc4fiSgEKpZy8rdB3Bj8R-cLxWwId0o" },
          { title: "Episode 20: Visual Matchup", fileId: "1bHc5yWzFLMVTqV775vmdw0bdrkHhi0bh" },
          { title: "Episode 21: Diana's Hard Fight", fileId: "1KwBkKNy9isOND_zYTxNN8J_Mmebkve6P" },
          { title: "Episode 22: Harry's Disaster", fileId: "1LJhkQlSlg3b1W0sTqW7p9xBUeFnSm7vU" },
          { title: "Episode 23: Teteth's Last Moments", fileId: "1z720cnJW-s5GgW-_Gz3hakbB3A053Ybz" },
          { title: "Episode 24: Lauren's Scream", fileId: "1BfHRvH8e-NIWpkB1vsuqpRwjCsm62J6J" },
          { title: "Episode 25: Willghem's Flight", fileId: "1b_1zEa-g-7pOIN1WkhCHDCD0PWUFvQu4" },
          { title: "Episode 26: Satoru's Memory", fileId: "1DGU1JELIWiO0LC4e7NyVGIrqzrminbxB" },
          { title: "Episode 27: Midnight Sunrise", fileId: "1A_iUtKE1MVsr2sHxwl22e167OEdv8SGM" },
          { title: "Episode 28: Entrusted Truth", fileId: "1ksdlNq4B7Xay00LBGUXFE1YXYXQ6OIg7" },
          { title: "Episode 29: Milisha Flying", fileId: "1nNSixP61mpXHAru07zcLJJfWKHpwcPlO" },
          { title: "Episode 30: Setting In", fileId: "1M0QsqdHB0D-mKoDmtsOcOmDoUia2fk_e" },
          { title: "Episode 31: To the Earth Again", fileId: "1wgFwXOS8ILYuuXBuMGpPccodWtECoriQ" },
          { title: "Episode 32: The King of Myth", fileId: "11IAVynzZwcLcGWT6mHGEBDEE8fLQNSYk" },
          { title: "Episode 33: Capture of Dianna", fileId: "1dkjf1V0-W2O_KzZ-GIDsCMRJBRkvIVbh" },
          { title: "Episode 34: Fly High, Turn A", fileId: "1ZoAefNie9Uc45dn7avjjDGL1K_AWHl_F" },
          { title: "Episode 35: Zacktrager", fileId: "1KO6DEBnaExHoF7UHiox5-45I-Nx9dLlx" },
          { title: "Episode 36: Ghingham's Raid", fileId: "1H8F0Is2FL5cVMS4XFKWkOKfsu3m5L0w-" },
          { title: "Episode 37: Turn X Activated", fileId: "1L4E5fgV5ID-U7yX4rhD01XBnGt64X0rC" },
          { title: "Episode 38: God's Door", fileId: "1-RjuGlESX8GxHxMLUc_Bz8neGoLVs8-C" },
          { title: "Episode 39: Aggressive Ghingham", fileId: "1DaVx0eLrhD64epz_LH_oIht-P5WMuCKh" },
          { title: "Episode 40: Sea Battle", fileId: "1oGjIWiR4p6tfgJFvSRP4zDyAzyJUnlJ7" },
          { title: "Episode 41: Conflict on the Moon", fileId: "1D3rpfV0i8K-MDoV4hK2KcXT8-k0ip6z0" },
          { title: "Episode 42: Showdown on Turn A", fileId: "1DKKE0GbLiRO4o2ttQvbDHhgX0w8Owql6" },
          { title: "Episode 43: Shock Wave", fileId: "1b03f3a8bnC1TuBe2bDksnIC1X8yMPqL_" },
          { title: "Episode 44: Enemy Reborn", fileId: "1rHYQHo-NKtjFThayaRm5WsBOI4LP4N_f" },
          { title: "Episode 45: Betrayal of Gym", fileId: "1YKcT6PNqljawg8rJ9nSqsKETyVh2vrmM" },
          { title: "Episode 46: Back to the Future", fileId: "1eSJHpsN4hj8qTMpY5d_ZHZpCmLhaNolP" },
          { title: "Episode 47: The Sword of Ghingham", fileId: "1nuBpjniwIafjGFkg7mEW06wI5Racnm5s" },
          { title: "Episode 48: Return of Moonrace", fileId: "1NCYoIGGBf0LSHCIS7z3viwPCiDZo2ioI" },
          { title: "Episode 49: Moonlight Butterfly", fileId: "17dssRlXkvOlH8ShXq1SOulCQYmbgy7uF" },
          { title: "Episode 50: Golden Autumn", fileId: "19u0E027KbYtKf6AfodBKx5gKjr2D2gum" }
        ]
      },
      {
        id: "cowboy-bebop",
        title: "Cowboy Bebop",
        meta: "Space Western, Noir • 1998 • Shinichirō Watanabe",
        cover: "https://i.ebayimg.com/images/g/qyEAAOSw4BlmgrWK/s-l1200.jpg", 
        episodes: [
          { title: "Session 1: Asteroid Blues", fileId: "1hI13gJ0mXMzUtfLXn3KMxYTvNrWS8WZ5" },
          { title: "Session 2: Stray Dog Strut", fileId: "1nocE3wiBTBJRwYJdJ7EL4I14GlD49Xif" },
          { title: "Session 3: Honky Tonk Women", fileId: "1TQziccG87yT0sMle9B8DkuYpSvJF6-Xk" },
          { title: "Session 4: Gateway Shuffle", fileId: "1fOFNQJhOMHFrdPyXQhNMYLk1vaP67aIJ" },
          { title: "Session 5: Ballad of Fallen Angels", fileId: "1QzaMpkpf-YM4mjSCPm9ZJ1z9dqyN1Dv1" },
          { title: "Session 6: Sympathy for the Devil", fileId: "1FAJw5ogPkiAtp1lM6x1Lassgm7SNeTtM" },
          { title: "Session 7: Heavy Metal Queen", fileId: "19Syw-PVPj-YABIfzBmY6yjkuQGaDkony" },
          { title: "Session 8: Waltz for Venus", fileId: "1wxRWpt5Qj6kwLy_ytigCEXKz_6xt7azr" },
          { title: "Session 9: Jamming with Edward", fileId: "11h6yjhCpO4XkCEJdzN88QDoVc0ShgEK0" },
          { title: "Session 10: Ganymede Elegy", fileId: "1Z9TUlQtiqma6s2rkXCERp0yprUkN9olJ" },
          { title: "Session 11: Toys in the Attic", fileId: "1jWN-JFBvFAAVyQkyJughLD6pdlS86Nh0" },
          { title: "Session 12: Jupiter Jazz (Part 1)", fileId: "1i2H8BRoEvSPT3XvEhOICDGGDzzErS1Xk" },
          { title: "Session 13: Jupiter Jazz (Part 2)", fileId: "1761UfvQbwmBltzc4kjrcjVQu92eJrqFM" },
          { title: "Session 14: Bohemian Rhapsody", fileId: "1z53_WhXHjnYTK2cyhU_X4uqhWPzbet4X" },
          { title: "Session 15: My Funny Valentine", fileId: "1MH-hw60GyV5XKubMG0ggUHzvm31-pv2n" },
          { title: "Session 16: Black Dog Serenade", fileId: "1BueOjo1UoxoFV15s0lPUptMK0Hp2G2Dg" },
          { title: "Session 17: Mushroom Samba", fileId: "1tg4FVcLigbafg4ow20uwrYmV1RREI0cz" },
          { title: "Session 18: Speak Like a Child", fileId: "1UGhH8j6WrmPoFQcGlFNVKw42qjZTntRx" },
          { title: "Session 19: Wild Horses", fileId: "1KS26cLunUblJ83FcsSmmtJc_autze_ZR" },
          { title: "Session 20: Pierrot le Fou", fileId: "1gwd0OS8qyA2Uahj7SFx2uRGjU1Kz9eSR" },
          { title: "Session 21: Boogie Woogie Feng Shui", fileId: "1jO_LWOoBcs3BI377zqyo8K8kJTQSBGck" },
          { title: "Session 22: Cowboy Funk", fileId: "1VQyU_APv5FBDbyRpY6Dsiv7qxU3tRc-u" },
          { title: "Session 23: Brain Scratch", fileId: "1yBjzesrDqO17NrSKEna4KmEFme9jfMXn" },
          { title: "Session 24: Hard Luck Woman", fileId: "16JEPQLgpIwHGURZ4lGtnZWtkLpNtsPxV" },
          { title: "Session 25: The Real Folk Blues (Part 1)", fileId: "1JstPeyjBM0UUuxXPNrm5qfbd9guwaLVR" },
          { title: "Session 26: The Real Folk Blues (Part 2)", fileId: "17gwJpzyLDAflyL2WPL9JQRkAfsmmtdfv" }
        ]
      },
      {
        id: "gundam-thunderbolt-movie-1",
        title: "Mobile Suit Gundam Thunderbolt: December Sky",
        meta: "Sci-Fi, Mecha, Movie • 2016 • Kou Matsuo",
        cover: "https://gundam-official.com/media/GTB_DC_KEY_R_d8f048d4c8/GTB_DC_KEY_R_d8f048d4c8.jpg",
        episodes: [
          { title: "Play Movie (BD 480P)", fileId: "1jSdzY3qrppPGjxaVIx6CewqWPS41Bese" }
        ]
      },
      {
        id: "gundam-thunderbolt-movie-2",
        title: "Mobile Suit Gundam Thunderbolt: Bandit Flower",
        meta: "Sci-Fi, Mecha, Movie • 2017 • Kou Matsuo",
        cover: "https://m.media-amazon.com/images/M/MV5BOGM1ZWRhZGItZmJlYi00MjdkLWIzZTctOWUzNmUyNzE4YTdhXkEyXkFqcGc@._V1_.jpg",
        episodes: [
          { title: "Play Movie (BD 480P)", fileId: "1XgmIIKH__1rnR5ofnq-DcmkMPAFF2hlG" }
        ]
      },
      {
        id: "gundam-g-reco-movie-1",
        title: "Gundam G no Reconguista Movie I: Ike! Core Fighter",
        meta: "Sci-Fi, Mecha, Movie • 2019 • Yoshiyuki Tomino",
        cover: "https://m.media-amazon.com/images/M/MV5BMDJlOGY4Y2UtZGJlYy00NDE3LTg3YmEtNmJlN2E1NDA0NTJmXkEyXkFqcGc@._V1_.jpg",
        episodes: [
          { title: "Play Movie (BD 480P)", fileId: "1Q4ZGUjC2PLD_RNxCAP2liUk8dPO_Oxyu" }
        ]
      },
      {
        id: "gundam-g-reco-movie-2",
        title: "Gundam G no Reconguista Movie II: Kanzan no Kioku",
        meta: "Sci-Fi, Mecha, Movie • 2020 • Yoshiyuki Tomino",
        cover: "https://gundam-official.com/media/2_KV_1c16567053/2_KV_1c16567053.png",
        episodes: [
          { title: "Play Movie (BD 480P)", fileId: "11PLNsvIXHGv6fHi60u_FxikDXLyDqyEZ" }
        ]
      },
      {
        id: "gundam-g-reco-movie-3",
        title: "Gundam G no Reconguista Movie III: Uchu kara no Isan",
        meta: "Sci-Fi, Mecha, Movie • 2021 • Yoshiyuki Tomino",
        cover: "https://gundam-official.com/media/3_KV_366a41ee97/3_KV_366a41ee97.jpg",
        episodes: [
          { title: "Play Movie (BD 480P)", fileId: "1GfWOu4j-ubtbNHYdMl6hdL3yd8fqMOYx" }
        ]
      },
      {
        id: "gundam-g-reco-movie-4",
        title: "Gundam G no Reconguista Movie IV: Gekito ni Sakebu Ai",
        meta: "Sci-Fi, Mecha, Movie • 2022 • Yoshiyuki Tomino",
        cover: "https://cdn.myanimelist.net/images/anime/1133/124283.jpg",
        episodes: [
          { title: "Play Movie (BD 480P)", fileId: "1IKqITBm5PD2XRhXAfsg4jMtvEzxH_CEi" }
        ]
      },
      {
        id: "gundam-cucuruz-doaland",
        title: "Mobile Suit Gundam: Cucuruz Doaland's Island",
        meta: "Sci-Fi, Mecha, Movie • 2022 • Yoshikazu Yasuhiko",
        cover: "https://i.redd.it/ani55m973vka1.jpg",
        episodes: [
          { title: "Play Movie (BD 720P/1080P)", fileId: "1wuPv3g1YW3uYIGk5f5UBhiluFHIYg2Ci" }
        ]
      },
 {
    id: "gundam-hathaway-sorcery-of-nymph-circe",
    title: "Mobile Suit Gundam Hathaway: The Sorcery of Nymph Circe",
    meta: "Sci-Fi, Mecha, Movie • 2026 • Sunrise",
    cover: "https://cdn.myanimelist.net/images/anime/1983/154129.jpg", 
    episodes: [
      { 
        title: "Play Movie (BD 720P/1080P)", fileId: "11JKGY4Uz_5BOZNlQzTEb7OFex0Z9E8BS" }
    ]
  },
      {
    id: "gundam-wing",
    title: "Mobile Suit Gundam Wing",
    meta: "Sci-Fi, Mecha, Action • 1995 • Sunrise",
    cover: "https://m.media-amazon.com/images/M/MV5BMjA4ZGYzMDMtN2ViNC00M2I4LTkyYjUtY2I3Y2E3OGExZjA2XkEyXkFqcGc@._V1_.jpg", // Anda bisa mengganti URL cover ini dengan poster pilihan Anda
    episodes: [
      {
        title: "Episode 01 - Shooting Star She Saw",
        sources: [
          { name: "Server 1 (GDrive 720p)", fileId: "1-C1bphpV_lQs4M46K5ZK7P4pW7Ms6tlo" },
          { name: "Server 2 (Archive 720p)", url: "https://archive.org/download/kusonime-mobile-suit-gundam-wing-bd-ep-01/Kusonime_Mobile_Suit_Gundam_Wing_BD_Ep01.mp4" }
        ]
      }
    ]
  },
    ];
