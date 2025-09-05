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
        "id": 17,
        "title": "NO. 17 Luna's House Bathroom Footprints",
        "description": "In Luna's bathroom, mysterious wet footprints may randomly appear on the floor. This anomaly is located near the bathtub and can be triggered while cleaning or closely inspecting the bathroom, hinting at an unusual presence.",
        "image": "/images/whisper_of_the_house_abnormal_point_17_luna_bathroom_footprints.png",
        "alt": "Whisper of the House Abnormal Point #17: Luna's House Bathroom Footprints - Strange footprints appear on the bathroom floor near the bathtub, which can be triggered during cleaning."
    }
      ,
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
