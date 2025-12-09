import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Dynamically import the components for the guides
const BeginnerGuide = dynamic(() => import('../beginner-guide'));
const ProgressionGuide = dynamic(() => import('../game-progression-guide'));
const TopTipsAndTricks = dynamic(() => import('../top-tips-and-tricks'));
const HiddenSecretsGuide = dynamic(() => import('../hidden-secrets'));
const OrganizeAndUncoverSecrets = dynamic(() => import('../organize-and-uncover-secrets'));
const AudioAutomationWorkflow = dynamic(() => import('../audio-automation-workflow')); // 新增导入


// 修改 generateMetadata 函数
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // 使用 await 解析 params
  const { id } = await params;

  let title = 'Whisper of the House Guide';
  let description = 'Discover detailed guides, tips, and secrets to help you navigate through Whisper of the House.';

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
    case 'organize-and-uncover-secrets':
      title = 'Organize and Discover Secrets';
      description = 'Uncover hidden rooms, mysterious objects, and secrets in Whisper of the House. Learn strategies to organize and explore the mansion’s mysteries.';
      break;
    case 'audio-automation-workflow': // 新增case
      title = 'Audio Automation Workflow - Whisper of the House';
      description = 'Learn how the audio team built a zero-tech-dependency workflow to deliver 2,000+ sound effects with no dedicated programmers.';
      break;
    default:
      title = 'Guide Not Found';
      description = 'The requested guide could not be found.';
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.whisperofthehouse.com/guides/${id}`,
    },
  };
}

// 同时修改页面组件
export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  // 使用 await 解析 params
  const { id } = await params;
  let content;

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
    case 'organize-and-uncover-secrets':
      content = <OrganizeAndUncoverSecrets />;
      break;
    case 'audio-automation-workflow': // 新增case
      content = <AudioAutomationWorkflow />;
      break;
    default:
      content = (
        <div className="error-message">
          <h2>Guide Not Found</h2>
          <p>The requested guide could not be found.</p>
        </div>
      );
  }

  return <div>{content}</div>;
}