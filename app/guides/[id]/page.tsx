import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export function generateStaticParams() {
  return [
    { id: 'beginner-guide' },
    { id: 'game-progression-guide' },
    { id: 'top-tips-and-tricks' },
    { id: 'hidden-secrets' },
    { id: 'organize-and-uncover-secrets' },
    { id: 'audio-automation-workflow' },
    { id: 'how-to-help-luna' },
  ];
}

export const dynamicParams = false;

const BeginnerGuide = dynamic(() => import('../beginner-guide'));
const ProgressionGuide = dynamic(() => import('../game-progression-guide'));
const TopTipsAndTricks = dynamic(() => import('../top-tips-and-tricks'));
const HiddenSecretsGuide = dynamic(() => import('../hidden-secrets'));
const OrganizeAndUncoverSecrets = dynamic(() => import('../organize-and-uncover-secrets'));
const AudioAutomationWorkflow = dynamic(() => import('../audio-automation-workflow'));
const HowToHelpLuna = dynamic(() => import('../how-to-help-luna'));

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
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
    case 'audio-automation-workflow':
      title = 'Audio Automation Workflow - Whisper of the House';
      description = 'Learn how the audio team built a zero-tech-dependency workflow to deliver 2,000+ sound effects with no dedicated programmers.';
      break;
    case 'how-to-help-luna':
      title = 'How to Help Luna: Whisper of the House Walkthrough';
      description = 'Stuck on Luna’s commission? Learn how to find the Secret Room, place the Mouse Trap, and unlock the second email in this step-by-step guide.';
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

export default async function GuidePage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  switch (id) {
    case 'beginner-guide':
      return <BeginnerGuide />;
    case 'game-progression-guide':
      return <ProgressionGuide />;
    case 'top-tips-and-tricks':
      return <TopTipsAndTricks />;
    case 'hidden-secrets':
      return <HiddenSecretsGuide />;
    case 'organize-and-uncover-secrets':
      return <OrganizeAndUncoverSecrets />;
    case 'audio-automation-workflow':
      return <AudioAutomationWorkflow />;
    case 'how-to-help-luna':
      return <HowToHelpLuna />;
    default:
      return (
        <div className="error-message">
          <h2>Guide Not Found</h2>
          <p>The requested guide could not be found.</p>
        </div>
      );
  }
}