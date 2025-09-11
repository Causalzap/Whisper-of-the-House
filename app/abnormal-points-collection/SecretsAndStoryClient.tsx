// app/abnormal-points-collection/SecretsAndStoryClient.tsx
'use client';

import React, { useState } from 'react';
import '../../styles/globals.css';

const SecretsAndStoryClient = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Simulated 49 game scene images data
  const gameScenes = [
    {
      id: 1,
      title: 'NO. 01 Stone Lion',
      description: 'A unique anomaly in the game, unlocked early in the game at a specific location.',
      image: '/images/whisper_of_the_house_abnormal_point_01_stone_lion.png',
      alt: 'Whisper of the House Abnormal Point #01: Stone Lion - A unique anomaly in the game, unlocked early in the game at a specific location.',
    },
    {
      id: 2,
      title: 'NO. 02 Museum Front Deer',
      description: 'A unique anomaly located at the front of the museum, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_02_museum_front_deer.png',
      alt: 'Whisper of the House Abnormal Point #02: Museum Front Deer - A unique anomaly located at the front of the museum, unlocked early in the game.',
    },
    {
      id: 3,
      title: 'NO. 03 NPC in front of the Library',
      description: 'A unique anomaly located in front of the library, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_03_npc_library.png',
      alt: 'Whisper of the House Abnormal Point #03: NPC in front of the Library - A unique anomaly located in front of the library, unlocked early in the game.',
    },
    {
      id: 4,
      title: 'NO. 04 Night-only Basketball Court Ball',
      description: 'A special anomaly in the basketball court that appears only at night.',
      image: '/images/whisper_of_the_house_abnormal_point_04_night_basketball_ball.png',
      alt: 'Whisper of the House Abnormal Point #04: Night-only Basketball Court Ball - A special anomaly in the basketball court that appears only at night.',
    },
    {
      id: 5,
      title: 'NO. 05 Park Fountain Statue',
      description: 'A unique anomaly located at the park fountain, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_05_park_fountain_statue.png',
      alt: 'Whisper of the House Abnormal Point #05: Park Fountain Statue - A unique anomaly located at the park fountain, unlocked early in the game.',
    },
    {
      id: 6,
      title: 'NO. 06 Residential Area Small Scroll',
      description: 'A unique anomaly found in the residential area, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_06_residential_scroll.png',
      alt: 'Whisper of the House Abnormal Point #06: Residential Area Small Scroll - A unique anomaly found in the residential area, unlocked early in the game.',
    },
    {
      id: 7,
      title: 'NO. 07 Construction Site Crane',
      description: 'A special anomaly near the construction site, visible when following specific steps.',
      image: '/images/whisper_of_the_house_abnormal_point_07_construction_crane.png',
      alt: 'Whisper of the House Abnormal Point #07: Construction Site Crane - A special anomaly near the construction site, visible when following specific steps.',
    },
    {
      id: 8,
      title: 'NO. 08 Plaza Fire Hydrant',
      description: 'A fire hydrant anomaly located in the plaza, triggered by a specific action.',
      image: '/images/whisper_of_the_house_abnormal_point_08_plaza_fire_hydrant.png',
      alt: 'Whisper of the House Abnormal Point #08: Plaza Fire Hydrant - A fire hydrant anomaly located in the plaza, triggered by a specific action.',
    },
    {
      id: 9,
      title: 'NO. 09 Train Station Front Entrance',
      description: 'A unique anomaly near the entrance to the train station, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_09_train_station_entrance.png',
      alt: 'Whisper of the House Abnormal Point #09: Train Station Front Entrance - A unique anomaly near the entrance to the train station, unlocked early in the game.',
    },
    {
      id: 10,
      title: 'NO. 10 Graveyard Water Well',
      description: 'A unique anomaly located near the water well in the graveyard, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_10_graveyard_well.png',
      alt: 'Whisper of the House Abnormal Point #10: Graveyard Water Well - A unique anomaly located near the water well in the graveyard, unlocked early in the game.',
    },
    {
      id: 11,
      title: 'NO. 11 Cinema Arcade Machine',
      description: 'A special anomaly inside the cinema involving an arcade machine, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_11_cinema_arcade.png',
      alt: 'Whisper of the House Abnormal Point #11: Cinema Arcade Machine - A special anomaly inside the cinema involving an arcade machine, unlocked early in the game.',
    },
    {
      id: 12,
      title: 'NO. 12 Lighthouse',
      description: 'A unique anomaly located at the lighthouse, visible only at night.',
      image: '/images/whisper_of_the_house_abnormal_point_12_lighthouse.png',
      alt: 'Whisper of the House Abnormal Point #12: Lighthouse - A unique anomaly located at the lighthouse, visible only at night.',
    },
    {
      id: 13, // ← 修复：原先是 iid: 13
      title: 'NO. 13 Lighthouse Base',
      description:
        'A unique anomaly found below the lighthouse at the far right of the map, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_13_lighthouse_base.png',
      alt: 'Whisper of the House Abnormal Point #13: Lighthouse Base - A unique anomaly found below the lighthouse at the far right of the map, unlocked early in the game.',
    },
    {
      id: 14,
      title: 'NO. 14 Pier Area Boat',
      description: 'A unique anomaly located near the boat at the pier area, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_14_pier_area_boat.png',
      alt: 'Whisper of the House Abnormal Point #14: Pier Area Boat - A unique anomaly located near the boat at the pier area, unlocked early in the game.',
    },
    {
      id: 15,
      title: 'NO. 15 Park Area Fountain Columns',
      description:
        'A unique anomaly located near the fountain in the park area, unlocked early in the game.',
      image: '/images/whisper_of_the_house_abnormal_point_15_park_area_fountain_columns.png',
      alt: 'Whisper of the House Abnormal Point #15: Park Area Fountain Columns - A unique anomaly located near the fountain in the park area, unlocked early in the game.',
    },
    {
        "id": 16,
        "title": "NO. 16 Police Station Phone Booth",
        "description": "A unique anomaly located beneath the phone booth near the police station, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_16_police_station_phone_booth.png",
        "alt": "Whisper of the House Abnormal Point #16: Police Station Phone Booth - A unique anomaly located beneath the phone booth near the police station, unlocked early in the game."
    },
    {
        "id": 17,
        "title": "NO. 17 Luna's House Bathroom Footprints",
        "description": "In Luna's bathroom, mysterious wet footprints may randomly appear on the floor. This anomaly is located near the bathtub and can be triggered while cleaning or closely inspecting the bathroom, hinting at an unusual presence.",
        "image": "/images/whisper_of_the_house_abnormal_point_17_luna_bathroom_footprints.png",
        "alt": "Whisper of the House Abnormal Point #17: Luna's House Bathroom Footprints - Strange footprints appear on the bathroom floor near the bathtub, which can be triggered during cleaning."
    },
    {
        "id": 18,
        "title": "NO. 18 Bathroom Rubber Duck",
        "description": "A unique anomaly found in the bathtub with a rubber duck, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_18_bathroom_rubber_duck.png",
        "alt": "Whisper of the House Abnormal Point #18: Bathroom Rubber Duck - A unique anomaly found in the bathtub with a rubber duck, unlocked early in the game."
    },
    {
        "id": 19,
        "title": "NO. 19 Mansion Room Painting Keyhole",
        "description": "A unique anomaly found behind the painting in the mansion room, unlocked by moving the painting. Discover this secret early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_19_mansion_room_painting_keyhole.png",
        "alt": "Whisper of the House Abnormal Point #19: Mansion Room Painting Keyhole - A unique anomaly found behind the painting in the mansion room, unlocked by moving the painting. Discover this secret early in the game."
    },
    {
        "id": 20,
        "title": "NO. 20 Bakery Workshop Sheep Horn Bread",
        "description": "A unique anomaly found in the bakery workshop after placing the sheep horn bread in the oven three times. Unlocked during early game stages.",
        "image": "/images/whisper_of_the_house_abnormal_point_20_bakery_workshop_sheep_horn_bread.png",
        "alt": "Whisper of the House Abnormal Point #20: Bakery Workshop Sheep Horn Bread - A unique anomaly found in the bakery workshop after placing the sheep horn bread in the oven three times. Unlocked during early game stages."
      }
      ,
      {
        "id": 21,
        "title": "NO. 21 Bakery Workshop Bedroom Mysterious Orb",
        "description": "A unique anomaly found in the bedroom of the bakery workshop. This orb appears when clicked directly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_21_bakery_workshop_bedroom_mysterious_orb.png",
        "alt": "Whisper of the House Abnormal Point #21: Bakery Workshop Bedroom Mysterious Orb - A unique anomaly found in the bedroom of the bakery workshop. This orb appears when clicked directly, unlocked early in the game."
      }
      ,
      {
        "id": 22,
        "title": "NO. 22 Bakery Workshop Bedroom Water Crystal Ball",
        "description": "A unique anomaly found in the bedroom of the bakery workshop. This large natural water crystal ball appears when clicked directly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_22_bakery_workshop_bedroom_water_crystal_ball.png",
        "alt": "Whisper of the House Abnormal Point #22: Bakery Workshop Bedroom Water Crystal Ball - A unique anomaly found in the bedroom of the bakery workshop. This large natural water crystal ball appears when clicked directly, unlocked early in the game."
      }
      ,
      {
        "id": 23,
        "title": "NO. 23 Flower Shop Flower Theft",
        "description": "A unique anomaly found in the flower shop. This anomaly is triggered by clicking directly on the plants, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_23_flower_shop_flower_theft.png",
        "alt": "Whisper of the House Abnormal Point #23: Flower Shop Flower Theft - A unique anomaly found in the flower shop. This anomaly is triggered by clicking directly on the plants, unlocked early in the game."
      }
      ,
      {
        "id": 24,
        "title": "NO. 24 Music Store Bass Guitar",
        "description": "A unique anomaly found in the music store, where the bass guitar emits a strange glow when clicked directly. Unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_24_music_store_bass_guitar.png",
        "alt": "Whisper of the House Abnormal Point #24: Music Store Bass Guitar - A unique anomaly found in the music store, where the bass guitar emits a strange glow when clicked directly. Unlocked early in the game."
      }
      ,
      {
        "id": 25,
        "title": "NO. 25 Seaside Hut Wooden Plank",
        "description": "A unique anomaly found in the seaside hut, triggered by clicking on the wooden plank. Unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_25_seaside_hut_wooden_plank.png",
        "alt": "Whisper of the House Abnormal Point #25: Seaside Hut Wooden Plank - A unique anomaly found in the seaside hut, triggered by clicking on the wooden plank. Unlocked early in the game."
      }
      ,
      {
        "id": 26,
        "title": "NO. 26 Seaside Hut Watercolor",
        "description": "A unique anomaly found in the seaside hut. This watercolor-like anomaly is triggered by clicking directly on the colorful pattern, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_26_seaside_hut_watercolor.png",
        "alt": "Whisper of the House Abnormal Point #26: Seaside Hut Watercolor - A unique anomaly found in the seaside hut. This watercolor-like anomaly is triggered by clicking directly on the colorful pattern, unlocked early in the game."
      }
      ,
      {
        "id": 27,
        "title": "NO. 27 Alchemy Workshop Couple Portrait",
        "description": "A unique anomaly found in the alchemy workshop. This couple portrait reveals a hidden secret when clicked directly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_27_alchemy_workshop_couple_portrait.png",
        "alt": "Whisper of the House Abnormal Point #27: Alchemy Workshop Couple Portrait - A unique anomaly found in the alchemy workshop. This couple portrait reveals a hidden secret when clicked directly, unlocked early in the game."
      }
      ,
      {
        "id": 28,
        "title": "NO. 28 Alchemy Workshop Experiment Smoke Flower",
        "description": "A unique anomaly found in the alchemy workshop. The smoke flower is created by combining fire flowers and a special catalyst in the experiment chamber, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_28_alchemy_workshop_experiment_smoke_flower.png",
        "alt": "Whisper of the House Abnormal Point #28: Alchemy Workshop Experiment Smoke Flower - A unique anomaly found in the alchemy workshop. The smoke flower is created by combining fire flowers and a special catalyst in the experiment chamber, unlocked early in the game."
      }
      ,
      {
        "id": 29,
        "title": "NO. 29 Alchemy Workshop Experiment Broom",
        "description": "A unique anomaly found in the alchemy workshop. The broom is created by combining the feather pen and a special model star in the experiment chamber, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_29_alchemy_workshop_experiment_broom.png",
        "alt": "Whisper of the House Abnormal Point #29: Alchemy Workshop Experiment Broom - A unique anomaly found in the alchemy workshop. The broom is created by combining the feather pen and a special model star in the experiment chamber, unlocked early in the game."
      }
      ,
      {
        "id": 30,
        "title": "NO. 30 Alchemy Workshop Space Prism",
        "description": "A unique anomaly found in the alchemy workshop. The space prism is created by combining moon flowers, silver fern, and silver leaf herb in the experiment chamber, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_30_alchemy_workshop_space_prism.png",
        "alt": "Whisper of the House Abnormal Point #30: Alchemy Workshop Space Prism - A unique anomaly found in the alchemy workshop. The space prism is created by combining moon flowers, silver fern, and silver leaf herb in the experiment chamber, unlocked early in the game."
      }
      ,
      {
        "id": 31,
        "title": "NO. 31 Grand Bazaar Tea Shopkeeper",
        "description": "A unique anomaly found at the grand bazaar. The tea shopkeeper, shrouded in mystery, can be revealed by clicking directly on the stall, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_31_grand_bazaar_tea_shopkeeper.png",
        "alt": "Whisper of the House Abnormal Point #31: Grand Bazaar Tea Shopkeeper - A unique anomaly found at the grand bazaar. The tea shopkeeper, shrouded in mystery, can be revealed by clicking directly on the stall, unlocked early in the game."
      }
      ,
      {
        "id": 32,
        "title": "NO. 32 Grand Bazaar Cat in the Wool",
        "description": "A unique anomaly found at the grand bazaar. The cat in the wool can be triggered by clicking directly on the hanging display, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_32_grand_bazaar_cat_in_the_wool.png",
        "alt": "Whisper of the House Abnormal Point #32: Grand Bazaar Cat in the Wool - A unique anomaly found at the grand bazaar. The cat in the wool can be triggered by clicking directly on the hanging display, unlocked early in the game."
      }
      ,
      {
        "id": 33,
        "title": "NO. 33 Convenience Store Large Freezer",
        "description": "A unique anomaly found in the convenience store. The large freezer reveals a hidden pattern when clicked directly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_33_convenience_store_large_freezer.png",
        "alt": "Whisper of the House Abnormal Point #33: Convenience Store Large Freezer - A unique anomaly found in the convenience store. The large freezer reveals a hidden pattern when clicked directly, unlocked early in the game."
      }
      ,
      {
        "id": 34,
        "title": "NO. 34 Seaside Hut Falling Lamp",
        "description": "A unique anomaly found in the seaside hut. The falling lamp appears when clicked directly after retrieving it from the shelf, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_34_seaside_hut_falling_lamp.png",
        "alt": "Whisper of the House Abnormal Point #34: Seaside Hut Falling Lamp - A unique anomaly found in the seaside hut. The falling lamp appears when clicked directly after retrieving it from the shelf, unlocked early in the game."
      }
      ,
      {
        "id": 35,
        "title": "NO. 35 Bar Ice Box",
        "description": "A unique anomaly found at the bar. The ice box reveals a hidden pattern when clicked directly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_35_bar_ice_box.png",
        "alt": "Whisper of the House Abnormal Point #35: Bar Ice Box - A unique anomaly found at the bar. The ice box reveals a hidden pattern when clicked directly, unlocked early in the game."
      }
      ,
      {
        "id": 36,
        "title": "NO. 36 Aigis Lab Basement Card Puzzle",
        "description": "A unique anomaly found in the Aigis lab basement. Solve the card puzzle by inserting one box into the slot and pulling another to activate the anomaly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_36_aigis_lab_basement_card_puzzle.png",
        "alt": "Whisper of the House Abnormal Point #36: Aigis Lab Basement Card Puzzle - A unique anomaly found in the Aigis lab basement. Solve the card puzzle by inserting one box into the slot and pulling another to activate the anomaly, unlocked early in the game."
      }
      ,
      {
        "id": 37,
        "title": "NO. 37 Grandpa's Time Capsule",
        "description": "A unique anomaly found at Grandpa's house. The time capsule can be triggered by clicking directly on the object near the garden, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_37_grandpas_time_capsule.png",
        "alt": "Whisper of the House Abnormal Point #37: Grandpa's Time Capsule - A unique anomaly found at Grandpa's house. The time capsule can be triggered by clicking directly on the object near the garden, unlocked early in the game."
      }
      ,
      {
        "id": 38,
        "title": "NO. 38 Grandpa's House Tree in the Courtyard",
        "description": "A unique anomaly found in Grandpa's house. Clicking on the tree in the courtyard activates the anomaly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_38_grandpas_house_tree_in_the_courtyard.png",
        "alt": "Whisper of the House Abnormal Point #38: Grandpa's House Tree in the Courtyard - A unique anomaly found in Grandpa's house. Clicking on the tree in the courtyard activates the anomaly, unlocked early in the game."
      }
      ,
      {
        "id": 39,
        "title": "NO. 39 Scholar's Study Brush Rack",
        "description": "A unique anomaly found in the scholar's study room. Clicking on the brush rack activates the anomaly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_39_scholars_study_brush_rack.png",
        "alt": "Whisper of the House Abnormal Point #39: Scholar's Study Brush Rack - A unique anomaly found in the scholar's study room. Clicking on the brush rack activates the anomaly, unlocked early in the game."
      }
      ,
      {
        "id": 40,
        "title": "NO. 40 Scholar's Study Incense Burner",
        "description": "A unique anomaly found in the scholar's study room. Clicking on the incense burner activates the anomaly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_40_scholars_study_incense_burner.png",
        "alt": "Whisper of the House Abnormal Point #40: Scholar's Study Incense Burner - A unique anomaly found in the scholar's study room. Clicking on the incense burner activates the anomaly, unlocked early in the game."
      }
      ,
      {
        "id": 41,
        "title": "NO. 41 Scholar's Study Pentagram Print",
        "description": "A unique anomaly found in the scholar's study room. Clicking on the large printer and printing a pentagram shape activates this anomaly, unlocked early in the game.",
        "image": "/images/whisper_of_the_house_abnormal_point_41_scholars_study_pentagram_print.png",
        "alt": "Whisper of the House Abnormal Point #41: Scholar's Study Pentagram Print - A unique anomaly found in the scholar's study room. Clicking on the large printer and printing a pentagram shape activates this anomaly, unlocked early in the game."
      }
      ,
      {
        "id": 42,
        "title": "NO. 42 Convenience Store Ice Cream",
        "description": "A unique anomaly found in the convenience store section. Place an egg in the ice cream machine, and it will create an ice cream cone, triggering the anomaly.",
        "image": "/images/whisper_of_the_house_abnormal_point_42_convenience_store_ice_cream.png",
        "alt": "Whisper of the House Abnormal Point #42: Convenience Store Ice Cream - A unique anomaly found in the convenience store section. Place an egg in the ice cream machine, and it will create an ice cream cone, triggering the anomaly."
      }
      ,
      {
        "id": 43,
        "title": "NO. 43 Xiu Nia's Home Second Floor Bed",
        "description": "A unique anomaly found in Xiu Nia's home. The second-floor bed can be clicked to trigger an anomaly.",
        "image": "/images/whisper_of_the_house_abnormal_point_43_xiu_nia_home_second_floor_bed.png",
        "alt": "Whisper of the House Abnormal Point #43: Xiu Nia's Home Second Floor Bed - A unique anomaly found in Xiu Nia's home. The second-floor bed can be clicked to trigger an anomaly."
      }
      ,
      {
        "id": 44,
        "title": "NO. 44 Hospital Bulletin",
        "description": "An abnormal point found in the hospital area, where a bulletin on preventing stray cats from spreading diseases can be clicked to trigger the anomaly.",
        "image": "/images/whisper_of_the_house_abnormal_point_44_hospital_bulletin.png",
        "alt": "Whisper of the House Abnormal Point #44: Hospital Bulletin - A bulletin on preventing stray cats from spreading diseases. Clicking it triggers an anomaly."
      }
      ,
      {
        "id": 45,
        "title": "NO. 45 Hospital Window Cat Feeder",
        "description": "An anomaly can be triggered by clicking on the cat feeder outside the hospital window.",
        "image": "/images/whisper_of_the_house_abnormal_point_45_hospital_window_cat_feeder.png",
        "alt": "Whisper of the House Abnormal Point #45: Hospital Window Cat Feeder - Click to trigger anomaly."
      }
      ,
      {
        "id": 46,
        "title": "NO. 46 Graveyard Photo Wall",
        "description": "An anomaly can be triggered by clicking on the photo wall in the graveyard.",
        "image": "/images/whisper_of_the_house_abnormal_point_46_graveyard_photo_wall.png",
        "alt": "Whisper of the House Abnormal Point #46: Graveyard Photo Wall - Click to trigger anomaly."
      }
      ,
      {
        "id": 47,
        "title": "NO. 47 Graveyard Grave Stone",
        "description": "An anomaly can be triggered by moving the photo of the grave to the grave stone.",
        "image": "/images/whisper_of_the_house_abnormal_point_47_graveyard_grave_stone.png",
        "alt": "Whisper of the House Abnormal Point #47: Graveyard Grave Stone - Click to trigger anomaly."
      }
      ,
      {
        "id": 48,
        "title": "NO. 48 Graveyard Tower First Floor Lamp",
        "description": "An anomaly can be triggered by clicking on the first floor lamp in the Graveyard Tower.",
        "image": "/images/whisper_of_the_house_abnormal_point_48_graveyard_tower_first_floor_lamp.png",
        "alt": "Whisper of the House Abnormal Point #48: Graveyard Tower First Floor Lamp - Click to trigger anomaly."
      }
      ,
      {
        "id": 49,
        "title": "NO. 49 Flower Shop Planting Flower",
        "description": "An anomaly unlocked by planting flowers in the Flower Shop.",
        "image": "/images/whisper_of_the_house_abnormal_point_49_flower_shop_planting_flower.png",
        "alt": "Whisper of the House Abnormal Point #49: Flower Shop Planting Flower - Unlock anomaly by planting flowers."
      },
      {
        "id": 50,
        "title": "NO. 50 Flower Shop Planting Flower Guide",
        "description": "A guide showing the flower planting recipes in the Flower Shop, including various flower types and required materials.",
        "image": "/images/whisper_of_the_house_abnormal_point_50_flower_shop_planting_flower_guide.png",
        "alt": "Whisper of the House Abnormal Point #50: Flower Shop Planting Flower Guide - Recipes for cactus, snowflower, red maple, and more."
      }
    // ...其余数据按需补充
  ];

  // Pagination calculations
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = gameScenes.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(gameScenes.length / imagesPerPage);

  const openModal = (image: any) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  };

  return (
    <div className="game-scenes-container">
      <div className="game-scenes-header">
        <h1>Whisper of the House - Abnormal Points Collection</h1>
        <p className="subtitle">
          Discover the 49 unique abnormal points and hidden anomalies in Whisper of the House
        </p>
      </div>

      <div className="game-scenes-grid">
        {currentImages.map((scene) => (
          <div key={scene.id} className="scene-card" onClick={() => openModal(scene)}>
            <div className="scene-image">
              <img src={scene.image} alt={scene.alt} />
            </div>
            <div className="scene-info">
              <h3>{scene.title}</h3>
              <p>{scene.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Image modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              {/* removed: scene-code-large (selectedImage.code) */}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .game-scenes-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .game-scenes-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .game-scenes-header h1 {
          font-size: 2.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          color: #aaa;
          font-size: 1.1rem;
        }
        .game-scenes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .scene-card {
          background: rgba(45, 45, 45, 0.6);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .scene-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .scene-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .scene-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .scene-card:hover .scene-image img {
          transform: scale(1.05);
        }
        .scene-info {
          padding: 1rem;
        }
        .scene-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .scene-info p {
          color: #ccc;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .pagination button {
          padding: 0.5rem 1rem;
          background: #2a2a2a;
          color: #fff;
          border: 1px solid #444;
          border-radius: 4px;
          cursor: pointer;
        }
        .pagination button.active {
          background: #6c63ff;
          border-color: #6c63ff;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }
        .modal-content {
          background: #2a2a2a;
          border-radius: 8px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
          z-index: 10;
        }
        .modal-image {
          width: 100%;
          max-height: 500px;
          overflow: hidden;
        }
        .modal-image img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .modal-info {
          padding: 1.5rem;
        }
        .modal-info h2 {
          color: #fff;
          margin-bottom: 1rem;
        }
        .modal-info p {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .game-scenes-container {
            padding: 1rem;
          }
          .game-scenes-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          .pagination {
            gap: 1rem;
          }
        }
        @media (max-width: 480px) {
          .game-scenes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SecretsAndStoryClient;
