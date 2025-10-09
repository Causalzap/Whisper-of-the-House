// components/HotGames.tsx
import Link from 'next/link';
import Image from 'next/image';

export type HotGameMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
  tags?: string[];
};

export default function HotGames({ games }: { games: HotGameMeta[] }) {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-4">
      <h2 className="mb-8 text-3xl font-bold text-center text-white bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
        Other Games You Might Like
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((g) => (
          <Link
            key={g.slug}
            href={`/play-online/${g.slug}`}
            className="group block overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-500"
          >
            {/* 图片容器 - 确保完整显示封面 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3 bg-gray-900/30 flex items-center justify-center">
              <Image
                src={g.thumbnail}
                alt={g.title}
                width={200}
                height={150}
                className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                style={{ width: 'auto', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-full shadow-md">
                    Play Now
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* 游戏标题 */}
            <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1">{g.title}</h3>
            
            {/* 游戏描述 */}
            {g.subtitle && (
              <p className="text-xs text-gray-400 line-clamp-2 mb-2 leading-relaxed">
                {g.subtitle}
              </p>
            )}
            
            {/* 游戏标签 */}
            {!!g.tags?.length && (
              <div className="mt-2 flex flex-wrap gap-1">
                {g.tags.slice(0, 2).map((t) => (
                  <span key={t} className="rounded-full bg-indigo-900/30 border border-indigo-700 px-2 py-0.5 text-xs text-indigo-300">
                    {t}
                  </span>
                ))}
                {g.tags.length > 2 && (
                  <span className="rounded-full bg-gray-700/50 border border-gray-600 px-2 py-0.5 text-xs text-gray-400">
                    +{g.tags.length - 2}
                  </span>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}