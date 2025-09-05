// app/guides/[id]/page.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import { Metadata } from 'next';

// Dynamically import the components for the guides
const BeginnerGuide = dynamic(() => import('../beginner-guide'));
const ProgressionGuide = dynamic(() => import('../game-progression-guide'));
const TopTipsAndTricks = dynamic(() => import('../top-tips-and-tricks'));
const HiddenSecretsGuide = dynamic(() => import('../hidden-secrets'));

// 使用函数封装参数获取
async function getGuideId(params: { id: string }) {
  return params.id;
}

// Dynamically generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // 使用异步函数获取参数
  const id = await getGuideId(params);

  let title = 'Whisper of the House Guide';
  let description = 'Discover detailed guides, tips, and secrets to help you navigate through Whisper of the House.';

  // Set the title and description based on the id
  switch (id) {
    case 'beginner-guide':
      title = "Beginner's Guide - Whisper of the House";
      description = 'Start your journey with a complete beginner’s guide to Whisper of the House. Learn the basics and explore the haunted mansion with ease.';
      break;
    case 'game-progression-guide':
      title = 'Progression Guide - Whisper of the House';
      description = 'Advance through Whisper of the House smoothly with this progression guide. Unlock new areas, find items, and avoid common pitfalls.';
      break;
    case 'top-tips-and-tricks':
      title = 'Top Tips & Tricks - Whisper of the House';
      description = 'Master Whisper of the House with top tips and tricks. Discover expert strategies to get ahead and survive the haunted mansion.';
      break;
    case 'hidden-secrets':
      title = 'Hidden Secrets Guide - Whisper of the House';
      description = 'Uncover the hidden secrets of Whisper of the House. Find secret rooms, mysteries, and lore hidden deep within the haunted mansion.';
      break;
    default:
      title = 'Guide Not Found';
      description = 'The requested guide could not be found.';
  }

  return {
    title,
    description,
    alternates: {
      canonical: `/guides/${id}`, // 添加 canonical URL
    },
  };
}

// Render the content based on the id
const GuidePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let content;

  // Render the corresponding component based on the id
  switch (id) {
    case 'beginner-guide':
      content = <BeginnerGuide />;
      break;
    case 'game-progression-guide':
      content = <ProgressionGuide />;
      break;
    case 'top-tips-and-tricks':
      content = <TopTipsAndTricks />;
      break;
    case 'hidden-secrets':
      content = <HiddenSecretsGuide />;
      break;
    default:
      content = (
        <div className="error-message">
          <h2>Guide Not Found</h2>
          <p>The requested guide could not be found.</p>
        </div>
      );
  }

  return (
    <div>
      {/* Render the corresponding content */}
      {content}
    </div>
  );
};

export default GuidePage;